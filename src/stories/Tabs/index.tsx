'use client';
import React, { useState } from 'react';
import { Tabs, Tab, Box, TabProps, TabsProps, SxProps, styled } from '@mui/material';

export interface TabOption {
  key: string;
  label: string;
  content?: React.ReactNode;
  disabled?: boolean;
}

interface GenericTabsProps<T> {
  options: TabOption[];
  renderContentTab?: (item: T, index: number) => React.ReactNode;
  defaultValue?: string;
  tabsProps?: TabsProps;
  tabProps?: TabProps;
  tabPanelSx?: SxProps;
  onChange?: (value: string) => void;
}

const AntTabs = styled(Tabs)({
  // borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#EF4923',
  },
  '& .MuiTabScrollButton-root': {
    color: '#FFFFFF',
  },
});

const BasicTabs = <T,>({
  options,
  defaultValue,
  tabsProps,
  tabProps,
  tabPanelSx,
  renderContentTab,
  onChange,
}: GenericTabsProps<T>) => {
  const [currentTab, setCurrentTab] = useState<string>(defaultValue || options[0]?.key || '');

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
    onChange?.(newValue);
  };

  return (
    <Box>
      {/* Tabs */}
      <AntTabs
        value={currentTab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleTabChange}
        {...tabsProps}>
        {options.map(option => (
          <Tab
            key={option.key}
            label={option.label}
            value={option.key}
            disabled={option.disabled ?? false}
            disableRipple
            {...tabProps}
            sx={{
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: '20px',
              textAlign: 'right',
              textTransform: 'none',
              color: '#767272',
              '&.Mui-selected': {
                color: '#FFFFFF',
              },
              '&.Mui-disabled': {
                color: 'text.secondary',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#EF4923',
                height: '2px',
              },
              '&:hover': {
                color: '#EF4923',
              },
            }}
          />
        ))}
      </AntTabs>

      {/* Tab Panels */}
      {renderContentTab &&
        options.map((option: any, index: number) => (
          <Box
            key={option.key}
            role="tabpanel"
            hidden={currentTab !== option.key}
            sx={{
              p: 2,
              ...tabPanelSx,
            }}>
            {currentTab === option.key && renderContentTab(option, index)}
          </Box>
        ))}
    </Box>
  );
};

export default BasicTabs;
