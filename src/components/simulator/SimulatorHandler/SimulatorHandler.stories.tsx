import type { StoryObj, Meta } from '@storybook/react';
import SimulatorHandler from './SimulatorHandler';

const meta = {
  title: 'Components/SimulatorHandler',
  component: SimulatorHandler
} satisfies Meta<typeof SimulatorHandler>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'generated'
  }
} satisfies Story;

export { Template };
export default meta;
