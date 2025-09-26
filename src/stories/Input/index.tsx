import { InputAdornment } from '@mui/material';
import {
  type ComponentPropsWithoutRef,
  FocusEventHandler,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { TextFieldCustom } from './styled';
import { theme } from '@styles/theme';

export interface InputProps
  extends Omit<
    ComponentPropsWithoutRef<typeof TextFieldCustom>,
    'variant' | 'hiddenLabel' | 'onChange'
  > {
  height?: number;
  fullWidth?: boolean;
  onValuesChange?: (val?: string | number) => void;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  onChange?: (val?: string | number) => void;
  readOnly?: boolean;
  bordered?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    value = undefined,
    onChange = () => {},
    fullWidth = true,
    className,
    startAdornment,
    height = 32,
    onValuesChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    readOnly = false,
    bordered = true,
    disabled = false,
    autoFocus = false,
    style,
    onKeyDown = () => {},
    ...rest
  } = props;

  const innerRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

  useEffect(() => {
    if (autoFocus && innerRef.current) {
      innerRef.current.focus();
    }
  }, [autoFocus]);

  const inputProps = {
    ...(value !== undefined ? { value } : {}),
    fullWidth,
    readOnly,
    disabled,
    ...rest,
  };

  const noneBorderSx =
    !bordered || readOnly
      ? {
          backgroundColor: '#ffffff',
          border: '1px solid',
          borderColor: 'transparent',
          '&::after': {
            border: 'unset',
          },
          '&:hover': {
            '&::after': {
              border: 'unset',
            },
            '&::focus': {
              border: 'unset',
            },
          },
          '&.Mui-readOnly.MuiInputBase-readOnly': {
            border: 'unset',
            borderWith: 'none',
          },
        }
      : {};

  return (
    <TextFieldCustom
      inputRef={innerRef}
      className={className}
      startAdornment={
        startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : null
      }
      onChange={e => {
        onChange(e.target.value);
        onValuesChange(e.target.value);
      }}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
        if (readOnly) return;
        const value = e.target.value;
        const trimmedValue = value.replace(/\s+/g, ' ').trim();
        onChange(trimmedValue);
        onBlur(e);
      }}
      {...inputProps}
      sx={{
        gap: 0.5,
        height,
        fontSize: '12px',
        ...rest.sx,
        ...noneBorderSx,
      }}
      onFocus={e => {
        if (readOnly) return;
        innerRef.current?.select();
        onFocus(e);
      }}
      autoComplete="off"
      style={{
        borderColor: bordered ? theme.palette.interaction.border.neutralNormal : 'transparent',
        ...style,
      }}
      onKeyDown={onKeyDown}
    />
  );
});

export default BaseInput;

BaseInput.displayName = 'BaseInput';
