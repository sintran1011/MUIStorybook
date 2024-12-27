import { styled } from "@mui/material/styles";
import React from "react";
import {
  TableFooter,
  TablePagination,
  Typography,
  TypographyProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactNode } from "react";
import TablePaginationActions from "@stories/Table/TablePagination";

export interface GridColDef<T = Record<string, unknown>> {
  field: string;
  headerName: string | ReactNode;
  width?: number | string;
  description?: string;
  renderCell?: (value: any, row: T) => ReactNode;
}

export interface TableProps<T = Record<string, unknown>> {
  columns: GridColDef<T>[];
  data: T[];
  total: number;
  page: number;
  size: number;
  onChangePage: (newPage: number) => void;
  onChangePageSize: (newPage: number) => void;
}

const StyledTableCell = styled(TableCell)({
  borderBottom: 0,
  ":first-of-type": {
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    paddingLeft: "24px",
  },
  ":last-of-type": {
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    paddingRight: "24px",
  },
});

const renderTypography = ({
  sx,
  text,
}: {
  sx?: TypographyProps;
  text: string;
}) => (
  <Typography
    variant="body-medium"
    fontSize={"14px"}
    lineHeight={"20px"}
    sx={{
      ...sx,
    }}
  >
    {text ? text : null}
  </Typography>
);

export const BasicTable = <T extends Record<string, unknown>>(
  props: TableProps<T>
) => {
  const {
    columns,
    data,
    total = 0,
    page = 0,
    size = 10,
    onChangePage,
    onChangePageSize,
  } = props;

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChangePageSize(parseInt(event.target.value, 10));
    onChangePage(0);
  };

  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 700, "& .MuiTableCell-head": { lineHeight: "28px" } }}
        aria-label="customized table"
      >
        <TableHead
          sx={{
            borderRadius: "8px",
            color: "#A19E9E",
            border: 0,
            backgroundColor: "#ffffff0a",
            backdropFilter: "blur(25px)",
          }}
        >
          <TableRow
            sx={{
              "& th": {
                padding: "8px",
              },
            }}
          >
            {columns.map((col) => (
              <StyledTableCell sx={{ width: col.width }} key={col.field}>
                {typeof col.headerName === "string"
                  ? renderTypography({
                      sx: { color: "#A19E9E" },
                      text: col.headerName,
                    })
                  : col.headerName}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(data || []).map((row, idx: number) => (
            <TableRow
              sx={{
                "&:nth-of-type(even)": {
                  backgroundColor: "#ffffff03",
                },
                "& td": {
                  padding: "8px",
                },
                height: "56px",
              }}
              key={idx}
            >
              {columns.map((col) => {
                const key: string = col.field;
                return (
                  <StyledTableCell key={key}>
                    {col.renderCell
                      ? col.renderCell(row[key], row)
                      : renderTypography({
                          sx: { color: "#ffffff" },
                          text: row[key] as string,
                        })}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter sx={{ borderBottom: 0 }}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              colSpan={columns?.length || 5}
              count={total}
              rowsPerPage={size}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  MenuProps: {
                    slotProps: {
                      paper: {
                        className: "sinbad",
                        sx: {
                          backgroundColor: "dark.800",
                          color: "white",
                          "& .MuiMenu-list": {
                            padding: 0,
                            "& .MuiTablePagination-menuItem:hover": {
                              backgroundColor: "dark.500",
                            },
                            "& .MuiTablePagination-menuItem.Mui-selected": {
                              backgroundColor: "dark.500",
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
                color: "white",
                fontFamily: "var(--font-montserrat)",
                "& .MuiTablePagination-selectIcon": {
                  color: "white",
                },
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
