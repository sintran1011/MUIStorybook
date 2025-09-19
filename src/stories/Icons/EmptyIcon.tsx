import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import EmptyIcon from '@assets/icons/empty-icon.svg';

const CustomIcon = (props: SvgIconProps) => {
  return <SvgIcon component={EmptyIcon} inheritViewBox {...props} />;
};

export default CustomIcon;
