import React from 'react';
import { Meta } from '@storybook/react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { momentFormatUTC } from '@utils/index';
import { STATUS_OBJ } from '@constants/index';
import { StatusChip } from '@stories/StatusChip';
import { GridColDef } from '@stories/Table';
import BasicTable from '@stories/Table';
import Avatar from '@stories/Avatar';

interface DiscountData {
  version: string;
  releasedDate: string;
  status: string;
  id?: string;
}

const VERSION_LIST = [
  {
    version: '2.0.0',
    releasedDate: '2024-10-30T00:00:00.000Z',
    status: 'Active',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
  {
    version: '1.5.0',
    releasedDate: '2024-10-30T00:00:00.000Z',
    status: 'Inactive',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
  {
    version: '1.0.0',
    releasedDate: '2023-10-30T00:00:00.000Z',
    status: 'Approved',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
  {
    version: '1.6.0',
    releasedDate: '2022-09-21T00:00:00Z',
    status: 'On Hold',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
  {
    version: '1.8.0',
    releasedDate: '2024-03-04T00:00:00Z',
    status: 'Closed',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
  {
    version: '1.6.0',
    releasedDate: '2022-04-25T00:00:00Z',
    status: 'Uncompleted',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
];

const columns: GridColDef<DiscountData>[] = [
  {
    field: 'title',
    headerName: 'Title',
    width: '30%',
    renderCell: title => (
      <Stack
        gap="8px"
        alignItems="center"
        justifyContent="start"
        flexDirection="row"
        height={'fit-content'}
      >
        <Box width="40px" height="40px">
          <Box component="img" borderRadius="8px" src={'https://picsum.photos/40'} alt="" />
        </Box>
        <Typography title={title} variant="body-medium">
          {title}
        </Typography>
      </Stack>
    ),
  },
  {
    field: 'version',
    headerName: 'Version',
    width: '30%',
  },
  {
    field: 'releasedDate',
    headerName: 'Released Date',
    width: '30%',
    renderCell: releasedDate => (
      <Typography variant="body-medium">{momentFormatUTC(releasedDate)}</Typography>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: '30%',
    renderCell: status => {
      return <StatusChip type={status} value={status} />;
    },
  },
];

const meta: Meta<typeof BasicTable> = {
  title: 'Nexus/BasicTable',
  component: BasicTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: '`Columns Array` to render header and mapping data in table.',
      control: 'object',
      table: {
        type: {
          summary: 'GridColDef<T>[]',
          detail: `
interface GridColDef<T> {
  field: string;
  headerName: string | React.ReactNode;
  width?: number | string;
  description?: string;
  renderCell?: (value: any, row: T, idx: number) => React.ReactNode;
  textAlign?: 'left' | 'right' | 'center';
  headerAlign?: 'left' | 'right' | 'center';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  whitespace?: string;
  renderLoading?: () => React.ReactNode;
  sorter?: Sorter;
  filterOptions?: FilterOptions[];
  fixed?: 'left' | 'right';
  showShadow?: boolean;
}
          `.trim(),
        },
      },
    },
    data: {
      description: '`Data Source` to show in table',
    },
    total: {
      description: 'Total show in footer, should use total BE return',
    },
    page: {
      description: 'Current page number, start from 0',
    },
    size: {
      description: 'Limit items per page',
    },
    isLoading: {
      description: 'Change table into loading state if `True`',
    },
    getTableRowSx: {
      description: 'Function received params is items of data and return `SxProps` for Row Table',
    },
    showPagination: {
      description: 'Whether show pagination or not',
    },
    rowSelection: {
      description: '`Controlled props` to trigger checkbox style of `Table`',
      control: 'object',
      table: {
        type: {
          summary: 'RowsSelection<T>',
          detail: `
interface RowsSelection<T> {
  type?: 'radio' | 'checkbox';
  getCheckboxProps?: (row: T) => { disabled: boolean };
  onChange: (val: Key[]) => void;
  selectedRowKeys?: Key[];
  key?: string;
}
          `.trim(),
        },
      },
    },
    rowsPerPageOptions: {
      description: '`Number Array` to render Limit options in pagination',
    },
    width: {
      description:
        'Width of table, can use with Responsive Object in Mui. Ex : { sx: 150%, md: 200% }',
    },
    height: {
      description:
        'Height of table, can use with Responsive Object in Mui. Ex : { sx: 150%, md: 200% }',
    },
    bordered: {
      description: 'If `True` the border will show',
    },
  },
};

export default meta;

export const Default = {
  args: {
    sx: { p: '0px' },
    total: 10,
    columns: columns as any,
    data: VERSION_LIST,
    page: 0,
    size: 10,
    onChangePage: () => {},
    onChangePageSize: () => {},
    bordered: true,
    isLoading: false,
    width: 800,
    height: 400,
    showPagination: true,
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
    status: 'Active',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
  {
    version: '1.5.0',
    releasedDate: '2024-10-30T00:00:00.000Z',
    status: 'Inactive',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
  {
    version: '1.0.0',
    releasedDate: '2023-10-30T00:00:00.000Z',
    status: 'Approved',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
  {
    version: '1.6.0',
    releasedDate: '2022-09-21T00:00:00Z',
    status: 'On Hold',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
  {
    version: '1.8.0',
    releasedDate: '2024-03-04T00:00:00Z',
    status: 'Closed',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
  {
    version: '1.6.0',
    releasedDate: '2022-04-25T00:00:00Z',
    status: 'Uncompleted',
    title: 'Honkai starail',
    author: 'Sinbad',
  },
];

const columns: GridColDef<DiscountData>[] = [
  {
    field: 'title',
    headerName: 'Title',
    width: '30%',
    renderCell: title => (
      <Stack
        gap="8px"
        alignItems="center"
        justifyContent="start"
        flexDirection="row"
        height={'fit-content'}
      >
        <Box width="40px" height="40px">
          <Box component="img" borderRadius="8px" src={'https://picsum.photos/40'} alt="" />
        </Box>
        <Typography title={title} variant="body-medium">
          {title}
        </Typography>
      </Stack>
    ),
  },
  {
    field: 'version',
    headerName: 'Version',
    width: '30%',
  },
  {
    field: 'releasedDate',
    headerName: 'Released Date',
    width: '30%',
    renderCell: releasedDate => (
      <Typography variant="body-medium">{momentFormatUTC(releasedDate)}</Typography>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: '30%',
    renderCell: status => {
      return <StatusChip type={status} value={status} />;
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
