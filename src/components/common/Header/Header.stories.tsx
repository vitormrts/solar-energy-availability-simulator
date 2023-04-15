import Header from './Header';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/Header',
  component: Header
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'generated',
  }
} satisfies Story;

export { Template };
export default meta;
