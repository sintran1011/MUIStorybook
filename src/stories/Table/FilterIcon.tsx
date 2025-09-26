import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { theme } from '@styles/theme';

interface Props {
  isActive?: boolean;
  onClick?: (e: any) => void;
}

const FilterIcon = (props: Props) => {
  const { isActive, onClick = () => {} } = props;
  return (
    <FilterAltIcon
      onClick={onClick}
      sx={{
        fontSize: '16px',
        cursor: 'pointer',
        color: isActive ? theme.palette.brand.main : theme.palette.text.primary,
      }}
    />
  );
};

export default FilterIcon;
