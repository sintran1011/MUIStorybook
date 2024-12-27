import React from "react";
import { Meta } from "@storybook/react";
import { IconButton, Typography } from "@mui/material";
import { momentFormatUTC } from "../../utils";
import { STATUS_OBJ } from "../../constants";
import { StatusChip } from "../StatusChip/StatusChip";
import { GridColDef, BasicTable } from "./Table";

interface DiscountData {
  version: string;
  releasedDate: string;
  status: string;
  id?: string;
}

const VERSION_LIST = [
  {
    version: "2.0.0",
    releasedDate: "2024-10-30T00:00:00.000Z",
    status: "PREPARE_FOR_SUBMISSION",
  },
  {
    version: "1.5.0",
    releasedDate: "2024-10-30T00:00:00.000Z",
    status: "CURRENT",
  },
  {
    version: "1.0.0",
    releasedDate: "2023-10-30T00:00:00.000Z",
    status: "ARCHIVED",
  },
  {
    version: "1.6.0",
    releasedDate: "2022-09-21T00:00:00Z",
    status: "READY_FOR_DISTRIBUTION",
  },
  {
    version: "1.8.0",
    releasedDate: "2024-03-04T00:00:00Z",
    status: "IN_REVIEW",
  },
  {
    version: "1.6.0",
    releasedDate: "2022-04-25T00:00:00Z",
    status: "REJECTED",
  },
];

const columns: GridColDef<DiscountData>[] = [
  {
    field: "version",
    headerName: "Version",
    width: "30%",
    renderCell: (version) => (
      <Typography
        variant="body-medium"
        fontSize="14px"
        lineHeight="20px"
        color="white"
        sx={{
          cursor: "pointer",
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        {version}
      </Typography>
    ),
  },
  {
    field: "releasedDate",
    headerName: "Released Date",
    width: "30%",
    renderCell: (releasedDate) => (
      <Typography
        variant="body-medium"
        fontSize="14px"
        lineHeight="20px"
        color="white"
      >
        {momentFormatUTC(releasedDate)}
      </Typography>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: "30%",
    renderCell: (status) => {
      const type = STATUS_OBJ[status];
      return <StatusChip type={type} value={status} />;
    },
  },
  {
    field: "1",
    headerName: "",
    renderCell: (_, row) => {
      return <IconButton>...</IconButton>;
    },
  },
];

const meta: Meta<typeof BasicTable> = {
  title: "Component/BasicTable",
  component: BasicTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes: {},
};

export default meta;

export const Default = {
  args: {
    total: 10,
    columns: columns as any,
    data: VERSION_LIST,
    page: 0,
    size: 10,
    onChangePage: () => {},
    onChangePageSize: () => {},
  },
  parameters: {
    docs: {
      source: {
        code: `
import BasicTable, { GridColDef } from 'src/components/Table';
import { StatusChip } from 'src/components/StatusChip';
import { momentFormatUTC } from 'src/utils/helpers';
import DotsIcon from 'src/assets/images/icons/three-dots.svg';

const [query, setQuery] = useState<any>({
  merchantId: undefined,
  search: undefined,
  page: 0,
  size: 10,
});

const VERSION_LIST = [
  {
    version: '2.0.0',
    releasedDate: '2024-10-30T00:00:00.000Z',
    status: 'PREPARE_FOR_SUBMISSION',
  },
  {
    version: '1.5.0',
    releasedDate: '2024-10-30T00:00:00.000Z',
    status: 'CURRENT',
  },
  {
    version: '1.0.0',
    releasedDate: '2023-10-30T00:00:00.000Z',
    status: 'ARCHIVED',
  },
  {
    version: '1.6.0',
    releasedDate: '2022-09-21T00:00:00Z',
    status: 'READY_FOR_DISTRIBUTION',
  },
  {
    version: '1.8.0',
    releasedDate: '2024-03-04T00:00:00Z',
    status: 'IN_REVIEW',
  },
  {
    version: '1.6.0',
    releasedDate: '2022-04-25T00:00:00Z',
    status: 'REJECTED',
  },
];

const columns: GridColDef<DiscountData>[] = [
  {
    field: 'version',
    headerName: 'Version',
    width: '30%',
    renderCell: (version) => (
      <Typography
        variant="body-medium"
        fontSize="14px"
        lineHeight="20px"
        color="white"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            color: 'text.primary',
          },
        }}
      >
        {version}
      </Typography>
    ),
  },
  {
    field: 'releasedDate',
    headerName: 'Released Date',
    width: '30%',
    renderCell: (releasedDate) => (
      <Typography
        variant="body-medium"
        fontSize="14px"
        lineHeight="20px"
        color="white"
      >
        {momentFormatUTC(releasedDate)}
      </Typography>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: '30%',
    renderCell: (status) => {
      const type = STATUS_OBJ[status];
      return <StatusChip type={type} value={status} />;
    },
  },
  {
    field: '1',
    headerName: '',
    renderCell: () => {
      return <IconButton><DotsIcon /></IconButton>;
    },
  },
];

<BasicTable
  total={10}
  columns={columns}
  data={listGame || []}
  page={query.page}
  onChangePage={(page) =>
    setQuery((state: any) => ({
      ...state,
      page,
    }))
  }
  size={query.size}
  onChangePageSize={(size) =>
    setQuery((state: any) => ({
      ...state,
      size,
    }))
  }
/>;
        `,
      },
    },
  },
};
