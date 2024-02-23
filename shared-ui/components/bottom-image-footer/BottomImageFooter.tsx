import React from 'react';

import { StyledOceanLayers } from './BottomImageFooter.styles';

const BottomImageFooter: React.FC = ({ oceanLayers }) => {
  return (
    <>
      <StyledOceanLayers src={oceanLayers} />
    </>
  );
};

export default BottomImageFooter;
