import Button from './Button';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'button',
    label: 'Label',
    disabled: false
  }
} satisfies Story;

export { Template };
export default meta;
