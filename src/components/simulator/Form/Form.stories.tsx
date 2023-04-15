import Form from './Form';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/Form',
  component: Form
} satisfies Meta<typeof Form>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'generated'
  }
} satisfies Story;

export { Template };
export default meta;
