import Installments from './Installments';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/Installments',
  component: Installments
} satisfies Meta<typeof Installments>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'generated'
  }
} satisfies Story;

export { Template };
export default meta;
