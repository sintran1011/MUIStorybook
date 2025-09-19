import {
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
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { type Breakpoint, type SxProps, type Theme } from "@mui/system";
import React, { useRef, useState, type Key, type ReactNode } from "react";
import TablePaginationActions from "./TablePagination";
import { difference, isEmpty, uniq } from "lodash";
import { EmptyIcon } from "@stories/Icons";
import BasicCheckbox from "@stories/Checkbox";

export interface Sorter {
  label: string;
  value: string;
}

export interface GridColDef<T> {
  field: string;
  headerName: string | ReactNode;
  width?: number | string;
  description?: string;
  renderCell?: (value: any, row: T, idx: number) => React.ReactNode;
  textAlign?: "left" | "right" | "center";
  headerAlign?: "left" | "right" | "center";
  verticalAlign?: "top" | "middle" | "bottom";
  whitespace?: string;
  renderLoading?: () => ReactNode;
  sorter?: Sorter;
}

export interface RowsSelection<T> {
  type?: "radio" | "checkbox";
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
  sxTableRowRenderHeader?: SxProps<Theme>;
  showPagination?: boolean;
  rowSelection?: RowsSelection<T>;
  rowsPerPageOptions?: number[];
  selectedLineOfRow?: number;
  width?: string | number | Partial<Record<Breakpoint, number | string>>;
  bordered?: boolean;
}

const StyledTableCell = styled(TableCell)({
  borderBottom: 0,
  ":first-of-type": {
    paddingLeft: "12px",
  },
  ":last-of-type": {
    paddingRight: "12px",
  },
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const renderTypography = ({
  text,
  isHeader = true,
}: {
  text: string;
  isHeader?: boolean;
}) => (
  <Typography
    component={"p"}
    title={text}
    overflow={"hidden"}
    textOverflow={"ellipsis"}
    variant={isHeader ? "body-strong-small" : "body-small"}
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
    bordered = true,
  } = props;

  // row selection
  const [uncontrolledValue, setUncontrolledValue] = useState<Key[]>([]);
  const removeItemsRef = useRef<Key[]>([]);
  const haveCheckbox = !!rowSelection;
  const onChangeRow = rowSelection?.onChange ?? (() => {});
  const getRowProps =
    rowSelection?.getCheckboxProps ?? (() => ({ disabled: false }));
  const selectedRowKeys = rowSelection?.selectedRowKeys || uncontrolledValue;
  const rowKey = rowSelection?.key || "id";
  const dataValues = data.map((i) => i[rowKey]);
  const haveChecked = dataValues.some((i) => selectedRowKeys.includes(i));
  const isAllChecked =
    !isEmpty(dataValues) && isEmpty(selectedRowKeys)
      ? dataValues
          .filter((data) => !removeItemsRef.current.includes(data))
          .every((i) => selectedRowKeys.includes(i))
      : false;
  const ROW_BG_COLOR = {
    disabled: paletteColor.neutral["+5"],
    checked: paletteColor.brand["+4"],
  };

  const colSpan = haveCheckbox ? columns.length + 1 : columns.length;

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

  const getRowBgColor = (
    isDisabled: boolean,
    isChecked: boolean,
    isSelected: boolean,
  ) => {
    if (isDisabled) return ROW_BG_COLOR["disabled"];
    if (isChecked) return ROW_BG_COLOR["checked"];
    if (isSelected) return ROW_BG_COLOR["checked"];
    return "inherit";
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
          "& td": {
            padding: "4px",
            paddingRight: "16px",
            borderBottom: `1px solid ${paletteColor.border.primary}`,
          },
          height: "36px",
        }}
        key={idx}
      >
        {(haveCheckbox
          ? [{ field: "", width: 50, renderLoading: undefined }, ...columns]
          : columns
        ).map((col) => {
          const key: string = col.field;
          const loadSkeleton = col?.renderLoading;
          return (
            <StyledTableCell
              sx={{ width: col.width, maxWidth: col.width }}
              key={key}
            >
              {loadSkeleton ? (
                loadSkeleton()
              ) : (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "24px", backgroundColor: "neutral.+3" }}
                />
              )}
            </StyledTableCell>
          );
        })}
      </TableRow>
    ));

  const renderEmpty = () => (
    <TableRow>
      <TableCell colSpan={colSpan} sx={{ borderBottom: "none" }}>
        <Stack
          width="100%"
          height="173px"
          justifyContent="center"
          alignItems="center"
        >
          <EmptyIcon sx={{ fontSize: "100px" }} />
          <Typography variant="header-large" color="text.secondary">
            No Data
          </Typography>
        </Stack>
      </TableCell>
    </TableRow>
  );

  const renderRow = () =>
    data && data.length > 0
      ? data.map((row, idx: number) => {
          const isDisabled = getRowProps(row)?.disabled;
          if (isDisabled)
            removeItemsRef.current = [...removeItemsRef.current, row[rowKey]];
          const isChecked = !!selectedRowKeys?.includes(row[rowKey]);
          const isSelected = selectedLineOfRow === idx;
          return (
            <TableRow
              sx={{
                "& td": {
                  padding: "4px 8px",
                },
                "&:hover": {
                  bgcolor: isChecked
                    ? paletteColor.brand["+2"]
                    : paletteColor.neutral["+7"],
                },
                height: "36px",
                borderBottom: `1px solid ${paletteColor.interaction.neutral.subtleHover}`,
                pointerEvents: "auto",
                opacity: 1,
                backgroundColor: getRowBgColor(false, isChecked, isSelected),
                ...sxTableRowRenderRow,
              }}
              key={row?.id || idx}
            >
              {haveCheckbox ? (
                <StyledTableCell
                  sx={{ width: 50, maxWidth: 50, textAlign: "center" }}
                >
                  <BasicCheckbox
                    disabled={isDisabled}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      handleChecked(checked, [row[rowKey]]);
                    }}
                    checked={isChecked}
                  />
                </StyledTableCell>
              ) : null}

              {columns.map((col) => {
                const key: string = col.field;
                return (
                  <StyledTableCell
                    sx={{
                      minWidth: col.width,
                      width: col.width,
                      maxWidth: col.width,
                      textAlign: col.textAlign,
                      verticalAlign: col.verticalAlign,
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

  const renderHeader = () => {
    return (
      <TableRow
        sx={{
          "& th": {
            padding: "8px 8px",
          },
          ...sxTableRowRenderHeader,
        }}
      >
        {haveCheckbox ? (
          <StyledTableCell
            sx={{ width: 50, maxWidth: 50, textAlign: "center" }}
          >
            <BasicCheckbox
              checked={isAllChecked}
              indeterminate={haveChecked && !isAllChecked}
              onChange={(e) => {
                const checked = e.target.checked;
                const filterData = dataValues.filter(
                  (data) => !removeItemsRef.current.includes(data),
                );
                handleChecked(checked, filterData);
              }}
            />
          </StyledTableCell>
        ) : null}

        {columns.map((col) => (
          <StyledTableCell
            sx={{
              width: col.width,
              maxWidth: col.width,
              textAlign: col.headerAlign,
              whiteSpace: col.whitespace,
            }}
            key={col.field}
          >
            {typeof col.headerName === "string"
              ? renderTypography({ text: col.headerName })
              : col.headerName}
          </StyledTableCell>
        ))}
      </TableRow>
    );
  };

  return (
    <TableContainer
      sx={{
        padding: "8px",
        border: `1px solid `,
        borderColor: bordered ? paletteColor.border.primary : "transparent",
        overflow: "auto",
        borderRadius: "8px",
        ...sx,
      }}
    >
      <Table
        sx={{
          minWidth: 700,
          "& .MuiTableCell-head": { lineHeight: "28px" },
          width,
        }}
        aria-label="customized table"
        padding="normal"
      >
        <TableHead
          sx={{
            borderRadius: "8px",
            color: "#A19E9E",
            border: `1px solid ${paletteColor.interaction.neutral.subtleHover}`,
            borderRight: "none",
            borderLeft: "none",
            backgroundColor: paletteColor.background.neutral.onSubtle,
          }}
        >
          {renderHeader()}
        </TableHead>
        <TableBody>{isLoading ? renderLoading() : renderRow()}</TableBody>
        {showPagination ? (
          <TableFooter sx={{ borderBottom: 0 }}>
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
                      borderRadius: "4px",
                    },
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    MenuProps: {
                      slotProps: {
                        paper: {
                          sx: {
                            color: "text.primary",
                            "& .MuiTablePagination-menuItem": {
                              fontSize: "12px",
                            },
                            "& .MuiMenu-list": {
                              padding: 0,
                              "& .MuiTablePagination-menuItem.Mui-selected": {
                                backgroundColor: "brand.main",
                                color: "white",
                                fontWeight: "600",
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
                ActionsComponent={(props) => (
                  <TablePaginationActions {...props} />
                )}
                sx={{
                  borderBottom: 0,
                  color: "black",
                  fontFamily: "var(--font-montserrat)",
                  "& .MuiTablePagination-selectIcon": {
                    color: "black",
                  },
                }}
              />
            </TableRow>
          </TableFooter>
        ) : null}
      </Table>
    </TableContainer>
  );
};

export default BasicTable;

BasicTable.displayName = "BasicTable";
