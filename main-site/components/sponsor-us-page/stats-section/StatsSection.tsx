import React from 'react';
import { StyledStatsContainer, StyledCenterImage, StyledImageContainer } from './StatsSection.styles';
import { H2 } from '../../../../shared-ui/style/typography';
import KeyStatistics from '../../../../shared-ui/images/sponsor-us/key-statistics.png';

const StatsSection: React.FC = () => {
  return (
    <StyledStatsContainer>
      <H2>Key Statistics</H2>
      <StyledImageContainer>
        <StyledCenterImage
          src={KeyStatistics}
        />
      </StyledImageContainer>
    </StyledStatsContainer>
  );
};

export default StatsSection;