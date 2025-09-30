import {
  Box,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { type Breakpoint, type SxProps, type Theme } from '@mui/system';
import React, { useEffect, useRef, useState, type Key, type ReactNode } from 'react';
import TablePaginationActions from './TablePagination';
import { difference, isEmpty, uniq } from 'lodash';
import { checkEmptyFilters } from '@utils/index';
import CheckBoxSingle from '@stories/Checkbox/CheckBoxSingle';
import { EmptyIcon } from '@stories/Icons';
import FilterIcon from './FilterIcon';
import BasicCheckbox from '@stories/Checkbox';
import FilterMenu from '@stories/Menu/FilterMenu';

export interface Sorter {
  label: string;
  value: string;
}

export type Filter = Record<string, any>;

export type FilterOptions = { label: string; value: string };

export interface GridColDef<T> {
  field: string;
  headerName: string | ReactNode;
  width?: number | string;
  description?: string;
  renderCell?: (value: any, row: T, idx: number) => React.ReactNode;
  textAlign?: 'left' | 'right' | 'center';
  headerAlign?: 'left' | 'right' | 'center';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  whitespace?: string;
  renderLoading?: () => ReactNode;
  sorter?: Sorter;
  filterOptions?: FilterOptions[];
  fixed?: 'left' | 'right';
  showShadow?: boolean;
}

export interface RowsSelection<T> {
  type?: 'radio' | 'checkbox';
  getCheckboxProps?: (row: T) => { disabled: boolean };
  onChange: (val: Key[]) => void;
  selectedRowKeys?: Key[];
  key?: string;
}

export interface TableProps<T> {
  columns: GridColDef<T>[];
  data: T[];
  total?: number;
  page?: number;
  size?: number;
  onChangePage?: (newPage: number) => void;
  onChangePageSize?: (newPage: number) => void;
  isLoading?: boolean;
  sx?: SxProps<Theme>;
  sxTableRowRenderRow?: SxProps<Theme>;
  getTableRowSx?: (row: T) => Record<string, any>;
  sxTableRowRenderHeader?: SxProps<Theme>;
  showPagination?: boolean;
  rowSelection?: RowsSelection<T>;
  rowsPerPageOptions?: number[];
  selectedLineOfRow?: number;
  width?: string | number | Partial<Record<Breakpoint, number | string>>;
  height?: string | number | Partial<Record<Breakpoint, number | string>>;
  bordered?: boolean;
}

const StyledTableCell = styled(TableCell)({
  borderBottom: 0,
  ':first-of-type': {
    paddingLeft: '12px',
  },
  ':last-of-type': {
    paddingRight: '12px',
  },
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const fixedColumnSx = {
  position: 'sticky',
  transition: 'box-shadow 180ms ease',
};

const renderTypography = ({ text, isHeader = true }: { text: string; isHeader?: boolean }) => (
  <Typography
    component={'p'}
    title={text}
    overflow={'hidden'}
    textOverflow={'ellipsis'}
    variant={isHeader ? 'body-strong-small' : 'body-small'}
    color="text.primary"
  >
    {text ? text : null}
  </Typography>
);

const BasicTable = <T extends Record<string, any>>(props: TableProps<T>) => {
  const theme = useTheme();
  const paletteColor = theme.palette;
  const {
    columns = [],
    data = [],
    total = 0,
    page = 0,
    size = 10,
    onChangePage = () => {},
    onChangePageSize = () => {},
    isLoading = false,
    sx,
    sxTableRowRenderRow,
    sxTableRowRenderHeader,
    showPagination = true,
    rowSelection,
    rowsPerPageOptions = [10, 25, 50, 100],
    selectedLineOfRow = -1,
    width,
    height = 500,
    bordered = true,
    getTableRowSx = () => {},
  } = props;

  //filter state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filterType, setFilterType] = useState<string>('');
  const [filtersOptions, setFilterOptions] = useState<FilterOptions[]>([]);
  const [filters, setFilters] = useState<Filter>({});
  const open = Boolean(anchorEl);
  // fixed columns state
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);
  // row selection with checkbox
  const [uncontrolledValue, setUncontrolledValue] = useState<Key[]>([]);
  const removeItemsRef = useRef<Key[]>([]);
  const haveCheckbox = !!rowSelection;
  const onChangeRow = rowSelection?.onChange ?? (() => {});
  const getRowProps = rowSelection?.getCheckboxProps ?? (() => ({ disabled: false }));
  const selectedRowKeys = rowSelection?.selectedRowKeys || uncontrolledValue;
  const rowKey = rowSelection?.key || 'id';
  const dataValues = data.map(i => i[rowKey]);
  const haveChecked = dataValues.some(i => selectedRowKeys.includes(i));
  const isAllChecked =
    !isEmpty(dataValues) && isEmpty(selectedRowKeys)
      ? dataValues
          .filter(data => !removeItemsRef.current.includes(data))
          .every(i => selectedRowKeys.includes(i))
      : false;
  const colSpan = haveCheckbox ? columns.length + 1 : columns.length;

  const ROW_BG_COLOR = {
    disabled: paletteColor.neutral['+5'],
    checked: paletteColor.brand['+4'],
  };

  const containerRef = useRef<HTMLDivElement | null>(null);

  //Fixed columns - only effect if width is number and at least column don't have width
  const generateFixedColHashmap = () => {
    let leftOffsetPx = 0;
    const leftOffsets: Record<string, number> = {};
    columns.forEach(i => {
      if (i.fixed === 'left') {
        leftOffsets[i.field] = leftOffsetPx;
        leftOffsetPx += i.width as number;
      }
    });
    let rightOffsetPx = 0;
    const rightOffsets: Record<string, number> = {};
    const reverseColumns = [...columns].reverse();
    reverseColumns.forEach(i => {
      if (i.fixed === 'right') {
        rightOffsets[i.field] = rightOffsetPx;
        rightOffsetPx += i.width as number;
      }
    });

    return { leftOffsets, rightOffsets };
  };

  const { leftOffsets, rightOffsets } = generateFixedColHashmap();

  // Pagination controller
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChangePageSize(parseInt(event.target.value, 10));
    onChangePage(0);
  };

  // Filters
  const handleClickFilter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosedFilter = () => {
    setAnchorEl(null);
  };

  const generateFilterSx = (rowData: Record<string, any>) => {
    if (checkEmptyFilters(filters)) return { display: 'table-row' };
    const isFilter = handleFilters(rowData);
    return { display: isFilter ? 'table-row' : 'none' };
  };

  const handleFilters = (rowData: Record<string, any>) => {
    let filterArr = [rowData];
    Object.keys(filters).forEach(filterKey => {
      if (!isEmpty(filters[filterKey]))
        filterArr = filterArr.filter(i => filters[filterKey].includes(i[filterKey]));
    });
    return !isEmpty(filterArr);
  };

  const renderFilter = () =>
    !isEmpty(filtersOptions)
      ? filtersOptions.map((i: FilterOptions) => ({
          label: (
            <CheckBoxSingle
              label={<Typography variant="body-small">{i.label}</Typography>}
              controlLabelSx={{ height: '20px', width: '100%' }}
              checked={filters?.[filterType]?.includes(i?.value)}
              size="small"
              onChange={val => {
                if (val) {
                  const checkedArr = [...(filters?.[filterType] || []), i.value];
                  setFilters({ ...filters, [filterType]: checkedArr });
                  return;
                }
                const checkedArr = [...(filters?.[filterType] || [])].filter(r => r !== i.value);
                setFilters({ ...filters, [filterType]: checkedArr });
              }}
            />
          ),
          onClick: () => {},
          menuItemProps: {
            disableTouchRipple: true,
          },
        }))
      : [{ label: 'No filters', onClick: () => false }];
  //

  const getRowBgColor = (isDisabled: boolean, isChecked: boolean, isSelected: boolean) => {
    if (isDisabled) return ROW_BG_COLOR['disabled'];
    if (isChecked) return ROW_BG_COLOR['checked'];
    if (isSelected) return ROW_BG_COLOR['checked'];
    return 'inherit';
  };

  const handleChecked = (checked: boolean, val: Key[]) => {
    if (checked) {
      const uniqArr = uniq([...selectedRowKeys, ...val]);
      setUncontrolledValue(uniqArr);
      onChangeRow(uniqArr);
    } else {
      const differentArr = difference(selectedRowKeys, val);
      setUncontrolledValue(differentArr);
      onChangeRow(differentArr);
    }
  };

  const renderLoading = () =>
    new Array(4).fill(1).map((_i, idx: number) => (
      <TableRow
        sx={{
          '& td': {
            padding: '4px',
            paddingRight: '16px',
            borderBottom: `1px solid ${paletteColor.border.primary}`,
          },
          height: '36px',
        }}
        key={idx}
      >
        {(haveCheckbox
          ? [{ field: '', width: 50, renderLoading: undefined }, ...columns]
          : columns
        ).map(col => {
          const key: string = col.field;
          const loadSkeleton = col?.renderLoading;
          return (
            <StyledTableCell sx={{ width: col.width, maxWidth: col.width }} key={key}>
              {loadSkeleton ? (
                loadSkeleton()
              ) : (
                <Skeleton variant="text" sx={{ fontSize: '24px', backgroundColor: 'neutral.+3' }} />
              )}
            </StyledTableCell>
          );
        })}
      </TableRow>
    ));

  const renderEmpty = () => (
    <TableRow>
      <TableCell colSpan={colSpan} sx={{ borderBottom: 'none' }}>
        <Stack width="100%" height="173px" justifyContent="center" alignItems="center">
          <EmptyIcon sx={{ fontSize: '100px' }} />
          <Typography variant="header-large" color="text.secondary">
            No Data
          </Typography>
        </Stack>
      </TableCell>
    </TableRow>
  );

  // Table UI
  const renderHeaderTitle = (col: GridColDef<T>) => {
    return typeof col.headerName === 'string'
      ? renderTypography({ text: col.headerName })
      : col.headerName;
  };

  const renderHeader = () => {
    return (
      <TableRow
        sx={{
          '& th': {
            padding: '8px 8px',
          },
          ...sxTableRowRenderHeader,
        }}
      >
        {haveCheckbox ? (
          <StyledTableCell sx={{ width: 50, maxWidth: 50, textAlign: 'center' }}>
            <BasicCheckbox
              checked={isAllChecked}
              indeterminate={haveChecked && !isAllChecked}
              onChange={e => {
                const checked = e.target.checked;
                const filterData = dataValues.filter(
                  data => !removeItemsRef.current.includes(data),
                );
                handleChecked(checked, filterData);
              }}
            />
          </StyledTableCell>
        ) : null}

        {columns.map(col => {
          const fixedLeftColumnSx: any = {
            left: leftOffsets[col.field],
            zIndex: '999',
            boxShadow:
              showLeftShadow && col?.showShadow ? '7px 0 8px -6px rgba(0,0,0,0.18)' : 'none',
            ...fixedColumnSx,
          };
          const fixedRightColumnSx: any = {
            right: rightOffsets[col.field],
            zIndex: '999',
            boxShadow: showRightShadow ? '-7px 0 8px -6px rgba(0,0,0,0.18)' : 'none',
            ...fixedColumnSx,
          };
          return (
            <StyledTableCell
              sx={{
                width: col.width,
                maxWidth: col.width,
                textAlign: col.headerAlign,
                whiteSpace: col.whitespace,
                ...(col.fixed === 'left' && fixedLeftColumnSx),
                ...(col.fixed === 'right' && fixedRightColumnSx),
              }}
              key={col.field}
            >
              {col?.filterOptions && col?.filterOptions.length > 0 ? (
                <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                  {renderHeaderTitle(col)}
                  <FilterIcon
                    onClick={e => {
                      handleClickFilter(e as any);
                      setFilterOptions(col?.filterOptions || []);
                      setFilterType(col?.field as string);
                    }}
                    isActive={!isEmpty(filters?.[col.field])}
                  />
                </Stack>
              ) : (
                renderHeaderTitle(col)
              )}
            </StyledTableCell>
          );
        })}
      </TableRow>
    );
  };

  const renderRow = () =>
    data && data.length > 0
      ? data.map((row, idx: number) => {
          const isDisabled = getRowProps(row)?.disabled;
          if (isDisabled) removeItemsRef.current = [...removeItemsRef.current, row[rowKey]];
          const isChecked = !!selectedRowKeys?.includes(row[rowKey]);
          const isSelected = selectedLineOfRow === idx;
          const customRowSx = getTableRowSx ? getTableRowSx(row) : undefined;
          const filterSx = generateFilterSx(row);
          return (
            <TableRow
              sx={{
                '& td': {
                  padding: '4px 8px',
                },
                '&:hover': {
                  bgcolor: isChecked ? paletteColor.brand['+2'] : paletteColor.neutral['+7'],
                },
                height: '36px',
                borderBottom: `1px solid ${paletteColor.interaction.neutral.subtleHover}`,
                pointerEvents: 'auto',
                opacity: 1,
                backgroundColor: getRowBgColor(false, isChecked, isSelected),
                ...sxTableRowRenderRow,
                ...customRowSx,
                ...filterSx,
              }}
              key={row?.id || idx}
            >
              {haveCheckbox ? (
                <StyledTableCell sx={{ width: 50, maxWidth: 50, textAlign: 'center' }}>
                  <BasicCheckbox
                    disabled={isDisabled}
                    onChange={e => {
                      const checked = e.target.checked;
                      handleChecked(checked, [row[rowKey]]);
                    }}
                    checked={isChecked}
                  />
                </StyledTableCell>
              ) : null}

              {columns.map(col => {
                const key: string = col.field;
                const fixedLeftColumnSx: any = {
                  left: leftOffsets[col.field],
                  zIndex: '2',
                  boxShadow:
                    showLeftShadow && col?.showShadow ? '7px 0 8px -6px rgba(0,0,0,0.18)' : 'none',
                  ...fixedColumnSx,
                };
                const fixedRightColumnSx: any = {
                  right: rightOffsets[col.field],
                  zIndex: '2',
                  boxShadow: showRightShadow ? '-7px 0 8px -6px rgba(0,0,0,0.18)' : 'none',
                  ...fixedColumnSx,
                };
                return (
                  <StyledTableCell
                    sx={{
                      minWidth: col.width,
                      width: col.width,
                      maxWidth: col.width,
                      textAlign: col.textAlign,
                      verticalAlign: col.verticalAlign,
                      bgcolor: '#ffffff',
                      ...(col.fixed === 'left' && fixedLeftColumnSx),
                      ...(col.fixed === 'right' && fixedRightColumnSx),
                    }}
                    key={key}
                  >
                    {col.renderCell
                      ? col.renderCell(row[key], row, idx)
                      : renderTypography({
                          text: row[key] as string,
                          isHeader: false,
                        })}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          );
        })
      : renderEmpty();

  const renderFooter = () => {
    return showPagination ? (
      <TableFooter
        sx={{
          position: 'sticky',
          bottom: 0,
          zIndex: 2,
          backgroundColor: 'background.paper',
          boxShadow: '0 -2px 6px rgba(0,0,0,0.08)',
          borderBottom: 0,
        }}
      >
        <TableRow>
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            colSpan={colSpan || 5}
            count={total}
            rowsPerPage={size}
            page={page}
            slotProps={{
              select: {
                sx: {
                  border: `1px solid ${paletteColor.border.primary}`,
                  borderRadius: '4px',
                },
                inputProps: {
                  'aria-label': 'rows per page',
                },
                MenuProps: {
                  slotProps: {
                    paper: {
                      sx: {
                        color: 'text.primary',
                        '& .MuiTablePagination-menuItem': {
                          fontSize: '12px',
                        },
                        '& .MuiMenu-list': {
                          padding: 0,
                          '& .MuiTablePagination-menuItem.Mui-selected': {
                            backgroundColor: 'brand.main',
                            color: 'white',
                            fontWeight: '600',
                          },
                        },
                      },
                    },
                  },
                },
              },
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={props => <TablePaginationActions {...props} />}
            sx={{
              borderBottom: 0,
              color: 'black',
              fontFamily: 'var(--font-montserrat)',
              '& .MuiTablePagination-selectIcon': {
                color: 'black',
              },
            }}
          />
        </TableRow>
      </TableFooter>
    ) : null;
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollLeft, clientWidth, scrollWidth } = el;
      setShowLeftShadow(scrollLeft > 0);
      setShowRightShadow(scrollLeft + clientWidth < scrollWidth - 1);
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      sx={{
        border: `1px solid `,
        borderColor: bordered ? paletteColor.border.primary : 'transparent',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      }}
    >
      <TableContainer
        sx={{
          padding: '8px',
          overflow: 'auto',
          borderRadius: '8px',
          maxHeight: height,
          ...sx,
        }}
        ref={containerRef}
      >
        <Table
          sx={{ minWidth: 700, '& .MuiTableCell-head': { lineHeight: '28px' }, width }}
          aria-label="customized table"
          padding="normal"
          stickyHeader
        >
          <TableHead
            sx={{
              borderRadius: '8px',
              color: '#A19E9E',
              border: `1px solid ${paletteColor.interaction.neutral.subtleHover}`,
              borderRight: 'none',
              borderLeft: 'none',
              backgroundColor: paletteColor.background.neutral.onSubtle,
            }}
          >
            {renderHeader()}
          </TableHead>
          <TableBody>{isLoading ? renderLoading() : renderRow()}</TableBody>
          {renderFooter()}
        </Table>
      </TableContainer>

      <FilterMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClosedFilter}
        menuItems={renderFilter() || []}
        onClearFilters={() => {
          setFilters({ ...filters, [filterType]: [] });
        }}
      />
    </Box>
  );
};

export default BasicTable;

BasicTable.displayName = 'BasicTable';
