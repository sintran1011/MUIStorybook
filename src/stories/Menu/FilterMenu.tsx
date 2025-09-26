import { Box, Typography } from '@mui/material';
import BasicMenu, { GenericMenuProps, MenuItems } from '.';
import Button from '@stories/Button';

interface FiltersMenuProps extends GenericMenuProps {
  onClearFilters?: () => void;
}

const FilterMenu = (props: FiltersMenuProps) => {
  const { anchorEl, open, onClose, menuItems = [], onClearFilters = () => {} } = props;
  return (
    <BasicMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      menuItems={
        [
          ...menuItems,
          {
            label: (
              <Box width={'100%'} pt={1} borderTop="1px solid" borderColor="border.primary">
                <Button
                  onClick={e => {
                    e.stopPropagation();
                    onClearFilters();
                    onClose();
                  }}
                  size="small"
                  fullWidth
                  variant="outlined"
                  color="brand"
                >
                  <Typography variant="body-small">Clear Filters</Typography>
                </Button>
              </Box>
            ),
            menuItemProps: {
              sx: {
                '&:hover': {
                  bgcolor: '#ffffff',
                },
              },
              disableTouchRipple: true,
            },
            onClick: () => false,
          },
        ] as MenuItems[]
      }
      disabledClosedOnClick
    />
  );
};
FilterMenu.displayName = 'FilterMenu';
export default FilterMenu;
