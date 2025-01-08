import { Box, Typography } from '@mui/material';
import type { InputProps } from '@mui/material';

import { TextFieldCustom } from './styled';

export interface TextAreaProps extends InputProps {
  width?: number | string;
  value?: string;
  maxCharacters?: number;
}

const TextArea = (props: TextAreaProps) => {
  const { width, value, maxCharacters = 512, sx, ...rest } = props;

  const renderCharacterCount = () => (
    <Typography
      position={'absolute'}
      bottom={0}
      right={'16px'}
      fontSize={'14px'}
      variant='body-medium'
      color={'dark.300'}
      align='right'>
      {value ? value.length : 0} / {maxCharacters} characters
    </Typography>
  );

  return (
    <Box width={width} position={'relative'}>
      <TextFieldCustom
        sx={{ height: 'auto', ...sx }}
        fullWidth
        inputProps={{ maxLength: maxCharacters }}
        multiline
        rows={5}
        value={value}
        {...rest}
      />
      {maxCharacters ? renderCharacterCount() : null}
    </Box>
  );
};

TextArea.displayName = 'TextArea';

export default TextArea;
