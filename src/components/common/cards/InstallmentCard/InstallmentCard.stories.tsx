import InstallmentCard from './InstallmentCard';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Components/cards/InstallmentCard',
  component: InstallmentCard
} satisfies Meta<typeof InstallmentCard>;

type Story = StoryObj<typeof meta>;
const Template = {
  args: {
    testId: 'generated',
    buttonLabel: 'Button label',
    installment: 6,
    installmentLabel: 'Installment label ',
    minTax: 1.0,
    minTaxLabel: 'Min tax label',
    minValue: 100,
    minValueLabel: 'Min value label'

  }
} satisfies Story;

export { Template };
export default meta;
