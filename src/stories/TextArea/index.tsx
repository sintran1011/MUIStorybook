import { Box, type SxProps, type Theme, Typography } from '@mui/material';
import { type TextareaAutosizeProps } from '@mui/material/TextareaAutosize';
import { TextAreaCustom } from './styled';
import { useState } from 'react';
import { theme } from '@styles/theme';

export interface TextAreaProps extends TextareaAutosizeProps {
  width?: number | string;
  value?: string;
  maxCharacters?: number;
  rows?: number;
  sx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
  bordered?: boolean;
  className?: string;
}

const TextArea = (props: TextAreaProps) => {
  const {
    width = '100%',
    value,
    maxCharacters,
    style,
    rows = 5,
    maxRows = 10,
    placeholder = 'Please type...',
    sx,
    bordered = true,
    readOnly = false,
    className = '',
    containerSx,
    ...rest
  } = props;

  const [show, setShow] = useState<boolean>(false);

  const renderCharacterCount = () => (
    <Typography
      position={'absolute'}
      bottom={-22}
      right={'4px'}
      color={'text.disabled'}
      align="right"
      variant="body-medium"
    >
      {value ? value.length : 0} / {maxCharacters}
    </Typography>
  );

  return (
    <Box width={width} position={'relative'} sx={containerSx}>
      <TextAreaCustom
        value={value}
        style={{
          border: '1px solid',
          borderColor: bordered ? theme.palette.interaction.border.neutralNormal : 'transparent',
          ...style,
        }}
        maxLength={maxCharacters}
        maxRows={maxRows}
        placeholder={placeholder}
        sx={{ resize: 'none', overflow: 'hidden', ...sx }}
        {...rest}
        minRows={rows}
        className={`${!bordered ? 'none-shadow' : ''} ${className}`}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        readOnly={readOnly}
        autoComplete="off"
      />
      {maxCharacters && show && !readOnly ? renderCharacterCount() : null}
    </Box>
  );
};

TextArea.displayName = 'TextArea';

export default TextArea;
