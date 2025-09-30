import {
  FormControlLabel,
  type SxProps,
  type Theme,
  Typography,
  type SwitchProps,
} from '@mui/material';
import { CustomSwitch } from './styled';

export interface BasicSwitchProps extends Omit<SwitchProps, 'onChange'> {
  onValuesChange?: (val: any) => void;
  onChange?: (checked: boolean) => void;
  label?: string | React.ReactNode;
  controlLabelSx?: SxProps<Theme>;
}

const BasicSwitch = (props: BasicSwitchProps) => {
  const {
    onChange = () => {},
    onValuesChange = () => {},
    controlLabelSx = {},
    value = false,
    label,
    ...rest
  } = props;
  return (
    <FormControlLabel
      label={
        typeof label === 'string' ? <Typography variant="body-medium">{label}</Typography> : label
      }
      sx={{
        ml: 0,
        mr: 0,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        ...controlLabelSx,
      }}
      control={
        <CustomSwitch
          onChange={(_e, checked) => {
            onChange(checked);
            onValuesChange(checked);
          }}
          value={value}
          {...rest}
        />
      }
    />
  );
};

export default BasicSwitch;
