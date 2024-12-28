import { Radio } from '@mui/material';

const StyledRadio = ({ checked = false }: { checked: boolean }) => {
  return (
    <Radio
      color="secondary"
      sx={{
        '& .MuiSvgIcon-root': {
          color: '#5C5757',
        },
        '&.Mui-checked .MuiSvgIcon-root': {
          color: '#EF4923',
        },
        '&.Mui-disabled': {
          color: 'dark.300',
        },
        height: '24px',
        width: '24px',
      }}
      checked={checked}
    />
  );
};

export default StyledRadio;
