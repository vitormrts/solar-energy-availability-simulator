import { Header } from '@src/components/common';
import { SimulatorHandler } from '@src/components/simulator';
import React from 'react';

const Simulator: React.FC = () => {
  return (
    <>
      <Header />
      <SimulatorHandler />
    </>
  );
};

export default Simulator;
