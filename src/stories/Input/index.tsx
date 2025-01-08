import { InputAdornment, Stack, Typography } from '@mui/material';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { TextFieldCustom } from './styled';
import { cn } from '@utils/index';

interface InputProps extends Omit<ComponentPropsWithoutRef<typeof TextFieldCustom>, 'variant' | 'hiddenLabel'> {
  message?: string;
  noHint?: boolean;
}

// Input component
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { size = 'medium', noHint, error = false, message, className, startAdornment, ...rest } = props;

  return (
    <Stack direction='column' pb={noHint ? 0 : 3.5} gap={noHint ? 0 : 1}>
      <TextFieldCustom
        size={size}
        ref={ref}
        className={cn(className)}
        startAdornment={startAdornment ? <InputAdornment position='start'>{startAdornment}</InputAdornment> : null}
        {...rest}
        sx={{ gap: 0.5, ...rest.sx }}
      />
      <Typography
        sx={{
          fontWeight: 500,
          color: error ? 'error.500' : '#767272',
        }}
        variant='label-small'>
        {message}
      </Typography>
    </Stack>
  );
});

export default Input;
