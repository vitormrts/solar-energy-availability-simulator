import CircleCard from './CircleCard';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/cards/CircleCard',
  component: CircleCard
} satisfies Meta<typeof CircleCard>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'generated',
    label: 'Default label',
    image: '',
    selected: false
  }
} satisfies Story;

export { Template };
export default meta;
