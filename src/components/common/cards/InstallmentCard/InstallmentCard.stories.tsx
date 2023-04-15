import InstallmentCard from './InstallmentCard';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/InstallmentCard',
  component: InstallmentCard
} satisfies Meta<typeof InstallmentCard>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'generated'
  }
} satisfies Story;

export { Template };
export default meta;
