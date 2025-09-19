'use client';
import { styled } from '@mui/material/styles';
import boldIcon from '@assets/editor/bold.png';
import headingIcon from '@assets/editor/heading.png';
import italicIcon from '@assets/editor/italic.png';
import textStrikeIcon from '@assets/editor/text-strike.png';
import orderedListIcon from '@assets/editor/ordered-list.png';
import bulletListIcon from '@assets/editor/bullet-list.png';
import linkIcon from '@assets/editor/link.png';
import codeIcon from '@assets/editor/code.png';
import imageIcon from '@assets/editor/image.png';
import colorIcon from '@assets/editor/color.png';

type styleType = Record<string, Record<string, string>>;
type iconType = { name: string; url: string };

const ICONS = [
  { name: 'bold', url: boldIcon },
  { name: 'heading', url: headingIcon },
  { name: 'italic', url: italicIcon },
  { name: 'strike', url: textStrikeIcon },
  { name: 'ordered-list', url: orderedListIcon },
  { name: 'bullet-list', url: bulletListIcon },
  { name: 'link', url: linkIcon },
  { name: 'code', url: codeIcon },
  { name: 'image', url: imageIcon },
  { name: 'color', url: colorIcon },
];

const generateIconStyles = ICONS.reduce((styles: styleType, icon: iconType) => {
  styles[`.${icon.name}::after`] = {
    content: '""',
    backgroundImage: `url(${icon.url})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '20px',
    height: '20px',
    display: 'block',
  };
  return styles;
}, {});

const textStyle = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#fff',
  fontFamily: 'var(--font-montserrat)',
  fontWeight: 400,
};

const StyledEditorWrapper = styled('div')(({ theme }) => ({
  '.toastui-editor-defaultUI': {
    border: 'none',
    padding: '16px',
    backgroundColor: theme.palette.grey[700],
    '& .toastui-editor-toolbar': {
      backgroundColor: 'transparent',
      marginBottom: '8px',
      height: 'auto',
      '& .toastui-editor-defaultUI-toolbar': {
        borderRadius: '4px',
        overflow: 'hidden',
        height: 'auto',
        backgroundColor: theme.palette.grey[700],
        border: 'none',
        padding: 0,
        '& .toastui-editor-toolbar-group': {
          border: 'none',
          gap: '8px',
          alignItems: 'center',
          '& .toastui-editor-toolbar-divider': {
            backgroundColor: theme.palette.grey[700],
            margin: 0,
            height: '48px',
            marginRight: '8px',
          },
          '& .toastui-editor-toolbar-icons': {
            margin: 0,
            border: 'none',
          },
          '& button': {
            width: '32px',
            height: '32px',
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          ...generateIconStyles,
        },
      },
      '& .toastui-editor-popup': {
        backgroundColor: theme.palette.grey[800],
        border: 'none',
        borderRadius: '8px',
        color: '#ffffff',
        '& li:hover': {
          backgroundColor: '#332D2D',
          color: theme.palette.text.primary,
        },
        '& .tui-colorpicker-palette-button.tui-colorpicker-selected': {
          border: '2px solid #EF4923',
        },
        '& .tui-colorpicker-palette-toggle-slider': {
          display: 'none',
        },
        '& .toastui-editor-popup-body button[type=button]': {
          display: 'none',
        },
        '& input[type=text]': {
          backgroundColor: '#ffffff0a',
          ...textStyle,
          '&:focus': {
            border: '1px solid #EF4923',
            outline: 'none',
          },
        },
        '& .tab-item.active': {
          color: '#EF4923',
          borderBottom: '1px solid #EF4923',
        },
        '& .toastui-editor-file-name': {
          ...textStyle,
        },
      },
    },
    '& .toastui-editor-main': {
      // backgroundColor: '#ffffff0a',
      '& .toastui-editor-ww-container': {
        backgroundColor: 'transparent',
        '& .toastui-editor-contents': {
          padding: 0,
          '& p': {
            ...textStyle,
          },
        },
      },
    },
    '& .toastui-editor-mode-switch': {
      display: 'none !important',
    },
  },
}));

export { StyledEditorWrapper };
