import { Box, type SxProps, Tab, type TabProps, type TabsProps } from '@mui/material';
import React, { type ReactElement, type ReactNode, useState } from 'react';
import { CustomTab } from './styled';

export interface TabOption {
  key: string;
  label: string | ReactNode;
  content?: ReactNode;
  disabled?: boolean;
  icon?: string | ReactElement;
}

interface GenericTabsProps {
  options: TabOption[];
  defaultValue?: string;
  tabsProps?: TabsProps;
  tabProps?: TabProps;
  tabPanelSx?: SxProps;
  onChange?: (value: string) => void;
}

const BasicTabs = (props: GenericTabsProps) => {
  const { options, defaultValue, tabsProps, tabProps, tabPanelSx, onChange } = props;
  const [currentTab, setCurrentTab] = useState<string>(defaultValue || options[0]?.key || '');

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
    onChange?.(newValue);
  };

  return (
    <Box>
      <CustomTab
        value={currentTab}
        scrollButtons="auto"
        variant="scrollable"
        onChange={handleTabChange}
        {...tabsProps}
      >
        {options.map(option => (
          <Tab
            key={option.key}
            label={option.label}
            value={option.key}
            disabled={option.disabled ?? false}
            disableRipple
            icon={option.icon}
            {...tabProps}
          />
        ))}
      </CustomTab>

      {/* Tab Panels */}
      {options.map((option: TabOption) => (
        <Box
          key={option.key}
          role="tabpanel"
          hidden={currentTab !== option.key}
          sx={{
            p: { xs: 1, md: 3 },
            '& button': {
              textTransform: 'capitalize',
            },
            ...tabPanelSx,
          }}
        >
          {option.content}
        </Box>
      ))}
    </Box>
  );
};

export default BasicTabs;

BasicTabs.displayName = 'BasicTabs';
