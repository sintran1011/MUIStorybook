import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React from 'react';

import { StyledAccordion } from './styled';

type AccordionItem<T> = {
  id: string | number;
  title: string;
  content: T;
};

type GenericAccordionProps<T> = {
  item: AccordionItem<T>;
  renderContent: (content: T) => React.ReactNode;
};

const GenericAccordion = <T,>({ item, renderContent }: GenericAccordionProps<T>) => {
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
        aria-controls={`panel-${item.id}-content`}
        id={`panel-${item.id}-header`}>
        <Typography variant='title-large' fontWeight={500} fontSize={'22px'} lineHeight={'28px'}>
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          overflow={'hidden'}
          style={{
            maxHeight: '300px',
            display: '-webkit-box',
            WebkitLineClamp: 15,
            WebkitBoxOrient: 'vertical',
          }}>
          <Typography variant='body-medium' fontSize={'14px'} lineHeight={'20px'}>
            {renderContent(item.content)}
          </Typography>
        </Box>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default GenericAccordion;
