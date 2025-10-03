import { Accordion } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import BasicAccordion from '.';

const meta: Meta<typeof Accordion> = {
  title: 'Nexus/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Title of Accordion',
    },
    content: {
      control: { type: 'text' },
      description: 'Content of Accordion',
    },
  },
};

export default meta;

export const Default = () => {
  const sampleItems = [
    {
      id: 1,
      title: 'Title 1',
      content: (
        <p>
          Welcome to the Accordion demo! 🎉 This section can be used to display introductory text, a
          short description, or any small block of content. Try expanding and collapsing to see the
          smooth animation.
        </p>
      ),
    },
    {
      id: 2,
      title: 'Title 2',
      content: (
        <div>
          <p>
            Accordions are perfect when you want to organize related information without
            overwhelming the UI. For example, FAQ sections, collapsible menus, or progressive
            disclosure of advanced settings.
          </p>
          <ul>
            <li>Lightweight and simple</li>
            <li>Expandable on demand</li>
            <li>Helps keep interfaces clean</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Title 3',
      content: (
        <p>
          ✅ Tip: Combine Accordion with Storybook Controls to dynamically test different props such
          as
          <code>isOpen</code>, <code>disabled</code>, or <code>iconPosition</code>. This way your
          design system feels both interactive and maintainable.
        </p>
      ),
    },
  ];
  return sampleItems.map(item => (
    <BasicAccordion title={item.title} keyProps={item.id}>
      {item.content}
    </BasicAccordion>
  ));
};

Default.parameters = {
  docs: {
    source: {
      code: `
     const sampleItems = [
    {
      id: 1,
      title: 'Title 1',
      content: (
        <p>
          Welcome to the Accordion demo! 🎉 This section can be used to display introductory text, a
          short description, or any small block of content. Try expanding and collapsing to see the
          smooth animation.
        </p>
      ),
    },
    {
      id: 2,
      title: 'Title 2',
      content: (
        <div>
          <p>
            Accordions are perfect when you want to organize related information without
            overwhelming the UI. For example, FAQ sections, collapsible menus, or progressive
            disclosure of advanced settings.
          </p>
          <ul>
            <li>Lightweight and simple</li>
            <li>Expandable on demand</li>
            <li>Helps keep interfaces clean</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Title 3',
      content: (
        <p>
          ✅ Tip: Combine Accordion with Storybook Controls to dynamically test different props such
          as
          <code>isOpen</code>, <code>disabled</code>, or <code>iconPosition</code>. This way your
          design system feels both interactive and maintainable.
        </p>
      ),
    },
  ];
  return sampleItems.map(item => (
    <BasicAccordion title={item.title} keyProps={item.id}>
      {item.content}
    </BasicAccordion>
  ));
      `,
    },
  },
};
