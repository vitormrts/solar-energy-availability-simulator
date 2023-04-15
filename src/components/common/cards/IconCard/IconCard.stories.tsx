import IconCard from './IconCard';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/IconCard',
  component: IconCard
} satisfies Meta<typeof IconCard>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'generated',
    title: 'Generated Component'
  }
} satisfies Story;

export { Template };
export default meta;
