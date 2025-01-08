import { Accordion } from "@mui/material";
import { Meta } from "@storybook/react";
import GenericAccordion from ".";

const meta: Meta<typeof Accordion> = {
  title: "Quoxent/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => {
  const sampleItems = [
    {
      id: 1,
      title: "Title 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Title 3",
      content: "Content 3",
    },
  ];
  return sampleItems.map((item) => (
    <GenericAccordion
      key={item.id}
      item={item}
      renderContent={(content) => content}
    />
  ));
};

Default.parameters = {
  docs: {
    source: {
      code: `
      const sampleItems = [
    {
      id: 1,
      title: "Title 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Title 3",
      content: "Content 3",
    },
  ];
  return sampleItems.map((item) => (
    <GenericAccordion
      key={item.id}
      item={item}
      renderContent={(content) => content}
    />
  ));
      
      `,
    },
  },
};
