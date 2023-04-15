import Input from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Input',
  component: Input
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    error: '',
    success: '',
    disabled: false,
    name: 'input'
  }
} satisfies Story;

export { Template };
export default meta;
