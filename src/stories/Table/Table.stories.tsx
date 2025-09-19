import React from "react";
import { Meta } from "@storybook/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { momentFormatUTC } from "@utils/index";
import { STATUS_OBJ } from "@constants/index";
import { StatusChip } from "@stories/StatusChip";
import { GridColDef } from "@stories/Table";
import BasicTable from "@stories/Table";
import Avatar from "@stories/Avatar";

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
    title: "Honkai starail",
    author: "Sinbad",
  },
  {
    version: "1.5.0",
    releasedDate: "2024-10-30T00:00:00.000Z",
    status: "CURRENT",
    title: "Honkai starail",
    author: "Sinbad",
  },
  {
    version: "1.0.0",
    releasedDate: "2023-10-30T00:00:00.000Z",
    status: "ARCHIVED",
    title: "Honkai starail",
    author: "Sinbad",
  },
  {
    version: "1.6.0",
    releasedDate: "2022-09-21T00:00:00Z",
    status: "READY_FOR_DISTRIBUTION",
    title: "Honkai starail",
    author: "Sinbad",
  },
  {
    version: "1.8.0",
    releasedDate: "2024-03-04T00:00:00Z",
    status: "IN_REVIEW",
    title: "Honkai starail",
    author: "Sinbad",
  },
  {
    version: "1.6.0",
    releasedDate: "2022-04-25T00:00:00Z",
    status: "REJECTED",
    title: "Honkai starail",
    author: "Sinbad",
  },
];

const columns: GridColDef<DiscountData>[] = [
  {
    field: "title",
    headerName: "Title",
    width: "30%",
    renderCell: (title) => (
      <Stack
        gap="8px"
        alignItems="center"
        justifyContent="start"
        flexDirection="row"
        height={"fit-content"}
      >
        <Box width="40px" height="40px">
          <Box
            component="img"
            borderRadius="8px"
            src={"https://picsum.photos/40"}
            alt=""
          />
        </Box>
        <Typography
          title={title}
          variant="body-medium"
          fontSize="14px"
          lineHeight="20px"
          color="white"
          className="line-clamp-2"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "text.primary",
            },
          }}
        >
          {title}
        </Typography>
      </Stack>
    ),
  },
  {
    field: "author",
    headerName: "Author",
    width: "30%",
    renderCell: (author) => (
      <Stack
        gap="8px"
        alignItems="center"
        justifyContent="start"
        flexDirection="row"
        height={"fit-content"}
      >
        <Avatar size="sm" src={"https://picsum.photos/40"} />
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
          {author}
        </Typography>
      </Stack>
    ),
  },
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
  title: "Quoxent/BasicTable",
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
import { GridColDef } from 'src/components/Table';
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
    field: "title",
    headerName: "Title",
    width: "30%",
    renderCell: (title) => (
      <Stack
        gap="8px"
        alignItems="center"
        justifyContent="start"
        flexDirection="row"
        height={"fit-content"}
      >
        <Box width="40px" height="40px">
          <Box
            component="img"
            borderRadius="8px"
            src={"https://picsum.photos/40"}
            alt=""
          />
        </Box>
        <Typography
          title={title}
          variant="body-medium"
          fontSize="14px"
          lineHeight="20px"
          color="white"
          className="line-clamp-2"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "text.primary",
            },
          }}
        >
          {title}
        </Typography>
      </Stack>
    ),
  },
  {
    field: "author",
    headerName: "Author",
    width: "30%",
    renderCell: (author) => (
      <Stack
        gap="8px"
        alignItems="center"
        justifyContent="start"
        flexDirection="row"
        height={"fit-content"}
      >
        <Avatar size="sm" src={"https://picsum.photos/40"} alt="" />
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
          {author}
        </Typography>
      </Stack>
    ),
  },
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
