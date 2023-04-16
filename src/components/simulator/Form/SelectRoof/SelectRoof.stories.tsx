import SelectRoof from './SelectRoof';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/SelectRoof',
  component: SelectRoof
} satisfies Meta<typeof SelectRoof>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'generated',
    selectedRoof: 'ceramico'
  }
} satisfies Story;

export { Template };
export default meta;
