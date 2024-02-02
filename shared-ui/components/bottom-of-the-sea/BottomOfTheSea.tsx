import React from 'react';

import { StyledOceanLayers } from './BottomOfTheSea.styles';

const BottomOfTheSea: React.FC = ({ oceanLayers }) => {
  return (
    <>
      <StyledOceanLayers src={oceanLayers} />
    </>
  );
};

export default BottomOfTheSea;
