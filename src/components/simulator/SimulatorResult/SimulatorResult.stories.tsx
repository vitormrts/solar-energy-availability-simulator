import SimulatorResult from './SimulatorResult';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/SimulatorResult',
  component: SimulatorResult
} satisfies Meta<typeof SimulatorResult>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'generated',
    title: 'Generated Component'
  }
} satisfies Story;

export { Template };
export default meta;
