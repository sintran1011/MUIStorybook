import {
  Box,
  type Breakpoint,
  Chip,
  CircularProgress,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  debounce,
} from '@mui/material';
import MUIAutocomplete, {
  type AutocompleteRenderGetTagProps,
  type AutocompleteRenderInputParams,
  createFilterOptions,
  type AutocompleteProps as MUIAutocompleteProps,
} from '@mui/material/Autocomplete';
import { type CSSProperties, forwardRef, type ReactNode, useState } from 'react';
import { isEmpty, uniqBy } from 'lodash';
import CheckIcon from '@mui/icons-material/Check';
import { StyledPopper, TextFieldCustom } from './styled';
import { theme } from '@styles/theme';

export type MenuItemLabel = string | ReactNode;

export interface MenuItemProps {
  value: string;
  label: MenuItemLabel;
  description?: string;
  email?: string;
  icon?: string;
  disabled?: boolean;
  [key: string]: any;
}

export interface AutocompleteProps
  extends Omit<
    MUIAutocompleteProps<MenuItemProps, boolean, boolean, false>,
    'renderInput' | 'value' | 'onChange' | 'options' | 'loading'
  > {
  style?: CSSProperties;
  menuItemProps?: MenuItemProps;
  fullWidth?: boolean;
  width?: string | number | Partial<Record<Breakpoint, number | string>>;
  height?: string | number | Partial<Record<Breakpoint, number | string>>;
  placeholder?: string;
  options: MenuItemProps[];
  extraOptions?: MenuItemProps[];
  onSearch?: (query: string) => void;
  value?: string | string[];
  onChange?: (value: string | string[] | null) => void;
  onValuesChange?: (option: any) => void;
  isLoading?: boolean;
  displayValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
  isControlled?: boolean;
  disableClearable?: boolean;
  maxLength?: number;
  renderTags?: (val: MenuItemProps[], getTagProps: AutocompleteRenderGetTagProps) => ReactNode;
  bordered?: boolean;
  filterOptionsDisplay?: string;
}

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>((props, ref) => {
  const {
    sx,
    style,
    fullWidth = false,
    width = '240px',
    height = '30.5px',
    placeholder,
    options = [],
    extraOptions = [],
    value,
    isLoading,
    displayValue,
    menuItemProps,
    onChange = () => {},
    onValuesChange = () => {},
    onSearch,
    isControlled = true,
    slotProps,
    multiple = false,
    disabled = false,
    readOnly = false,
    disableClearable = false,
    maxLength = 4,
    renderTags,
    bordered = true,
    filterOptionsDisplay,
  } = props;

  const sxProps = {
    minWidth: 'fit-content',
    borderRadius: '8px',
    ...sx,
    height: multiple ? '100%' : height,
  };

  const [optionValue, setOptionValue] = useState<MenuItemProps | null>(null);
  const [optionValueArr, setOptionValueArr] = useState<MenuItemProps[] | null>([]);
  const [searchKey, setSearchKey] = useState<string | undefined>('');
  const [memoryOptions, setMemoryOptions] = useState<MenuItemProps[]>(extraOptions);
  const multipleProps = {
    ...(multiple ? { inputValue: searchKey } : {}),
  };
  const removeDuplicate = uniqBy([...options, ...memoryOptions], 'value');

  const controlledValues = isControlled
    ? options.find(item => item.value === value) || null
    : optionValue;

  const controlledValuesArray = isControlled
    ? removeDuplicate.filter(i => value?.includes(i.value))
    : optionValueArr;

  const handleOptionChange = (_: unknown, option: MenuItemProps | null) => {
    if (!isControlled) setOptionValue(option);
    onChange(option?.value || '');
    if (option) {
      onValuesChange(option);
    }
  };

  const handleOptionArrChange = (_: unknown, option: MenuItemProps[] | null) => {
    if (!isControlled) return setOptionValueArr(option);
    const formatArr = option?.map(i => i.value);
    onChange(formatArr || []);
    if (option) {
      onValuesChange(option);
    }
  };

  const handleFocus = () => {
    if (!searchKey && isEmpty(options)) {
      onSearch?.('');
    }
  };

  const getOptionLabel = (option: string | MenuItemProps) => {
    if (typeof option === 'string') return option;
    return option[displayValue || 'label'];
  };

  const filterOptions = createFilterOptions({
    stringify: (option: MenuItemProps) => option[filterOptionsDisplay || 'value'],
  });

  const debounceSearching = debounce((val?: string) => {
    onSearch?.(val as string);
  }, 300);

  const handleSearch = (val?: string) => {
    setSearchKey(val);
    debounceSearching(val);
  };

  const renderLabel = (label: MenuItemLabel) => {
    if (typeof label === 'string')
      return (
        <Typography
          color="text.primary"
          variant="body-small"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
            verticalAlign: 'middle',
          }}
          title={label}
        >
          {label}
        </Typography>
      );
    return label;
  };

  const renderInput = (params: AutocompleteRenderInputParams): React.ReactNode => {
    return (
      <TextFieldCustom
        placeholder={placeholder}
        sx={{
          gap: 0.5,
          '& .MuiInputBase-root': {
            height: multiple ? '100%' : height,
            minHeight: height,
            ...(readOnly
              ? {
                  backgroundColor: theme.palette.background.readonly,
                  color: theme.palette.text.secondary,
                  userSelect: 'none',
                }
              : {}),
          },
          '& .MuiInputBase-input': {
            color: theme.palette.text.primary,
          },
        }}
        inputRef={ref}
        aria-readonly={readOnly}
        {...params}
      />
    );
  };

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement> & { key: string },
    option: MenuItemProps,
  ): React.ReactNode => {
    const { onClick = () => {}, ...rest } = props;
    const isSelected = multiple
      ? (controlledValuesArray || []).some(i => i?.value === option?.value)
      : controlledValues?.value === option.value;
    return (
      <MenuItem
        disabled={option.disabled}
        value={option.value}
        {...menuItemProps}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onClick(e);
          setMemoryOptions([...memoryOptions, option]);
        }}
        {...rest}
        selected={isSelected}
      >
        {renderLabel(option.label)}
        <CheckIcon sx={{ color: '#ffffff', fontSize: '16px' }} />
      </MenuItem>
    );
  };

  const renderLoadingOption = (props: React.HTMLAttributes<HTMLLIElement>): React.ReactNode => {
    return (
      <MenuItem disabled={true} {...menuItemProps} {...props}>
        <Stack width={'100%'} justifyContent={'center'} alignItems={'center'}>
          <CircularProgress style={{ width: '24px', height: '24px' }} />
        </Stack>
      </MenuItem>
    );
  };

  const chipSx = {
    '& .MuiSvgIcon-root': {
      fontSize: '18px',
      color: '#ffffff',
    },
  };

  return (
    <Box
      overflow={'hidden'}
      sx={{
        width: fullWidth ? '100%' : width,
        borderRadius: `${theme.shape.borderRadius}px`,
        border: `1px solid `,
        borderColor: bordered ? theme.palette.interaction.border.neutralNormal : 'transparent',
        '&:hover': {
          boxShadow:
            bordered && !readOnly && !disabled ? `0 0 2px 1px ${theme.palette.brand.main}` : 'none',
        },
        height: 'fit-content',
        backgroundColor: disabled ? `${theme.palette.background.neutral.onSubtle}` : '#ffffff',
        ...style,
      }}
    >
      <MUIAutocomplete
        onFocus={handleFocus}
        sx={{
          '& .MuiAutocomplete-input': {
            padding: '0px',
          },
          '& .MuiTextField-root': {
            height: multiple ? '100%' : height,
            minHeight: height,
            '& .MuiChip-root': {
              margin: 0,
            },
          },
          ...sxProps,
        }}
        options={isLoading ? [{ label: '', value: '' }] : options}
        value={multiple ? controlledValuesArray : (controlledValues as any)}
        onChange={(
          _: unknown,
          option: MenuItemProps | MenuItemProps[] | null,
          _reason,
          details,
        ) => {
          if (!multiple) return handleOptionChange(_, option as MenuItemProps);
          const clickedValue = details?.option;
          const existValue = (controlledValuesArray || []).some(
            item => item.value === clickedValue?.value,
          );
          const removeExistValue = existValue
            ? controlledValuesArray?.filter(i => i.value !== clickedValue?.value)
            : option;
          handleOptionArrChange(_, removeExistValue as MenuItemProps[]);
        }}
        onInputChange={(_, val, reason) => {
          if (['input', 'clear'].includes(reason)) {
            if (reason === 'clear') {
              onChange(null);
              onValuesChange(null);
            }
            handleSearch(val);
          }
        }}
        {...multipleProps}
        getOptionLabel={getOptionLabel}
        renderInput={renderInput}
        renderOption={isLoading ? renderLoadingOption : renderOption}
        filterOptions={onSearch ? options => options : filterOptions}
        slots={{ popper: StyledPopper }}
        readOnly={readOnly}
        disabled={disabled}
        slotProps={{
          ...slotProps,
        }}
        multiple={multiple}
        disableClearable={disableClearable}
        disableCloseOnSelect={multiple}
        renderTags={(value, getTagProps) => {
          if (renderTags) return renderTags(value, getTagProps);
          return value.map((option, index: number) => {
            const chipProps = getTagProps({ index });
            if (maxLength && index + 1 > maxLength) return null;
            if (maxLength && index + 1 === maxLength) {
              const overIdx = value.length + 1 - maxLength;
              const sliceArr = value.slice(index).map(i => i[displayValue || 'label']);
              const tooltipContent = sliceArr.join(', ');
              return (
                <Tooltip title={tooltipContent}>
                  <Chip
                    label={`+${overIdx}`}
                    {...chipProps}
                    key={option.value}
                    onDelete={undefined}
                    sx={{
                      fontSize: '12px',
                      height: '24px',
                      width: 'fit-content',
                      '& .MuiChip-label': {
                        padding: '6px',
                      },
                      ...chipSx,
                    }}
                    color="brand"
                  />
                </Tooltip>
              );
            }
            return (
              <Chip
                label={option[displayValue || 'label']}
                {...chipProps}
                key={option.value}
                sx={{ fontSize: '12px', height: '24px', ...chipSx }}
                color="brand"
                onDelete={readOnly || disabled ? undefined : chipProps.onDelete}
              />
            );
          });
        }}
      />
    </Box>
  );
});

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;
