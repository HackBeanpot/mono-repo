import React from 'react';

import Seahorse from '../../images/Seahorse.png';
import Bubbles from '../../images/bubbles.png';
import HBPCore from '../../images/HBPCore.png';
import {
  StyledOurTeamSection,
  StyledHeader,
  StyledSeahorse, StyledBubbles, StyledHBPCore, StyledH3, StyledParagraph, StyledColumn, StyledContainer
} from './OurTeamSection.styles';

const OurTeamSection: React.FC = () => {
  return (
    <div id="our-team">
      <StyledHeader>Our Team</StyledHeader>
      <StyledContainer>
        <StyledColumn>
          <StyledH3>Meet this year’s deep divers behind HackBeanpot!</StyledH3>
          <StyledParagraph>
            The HackBeanpot Core Team has been hard at work bringing HackBeanpot
            2024 under the sea! We are a group of 26 driven students from
            universities in the Boston area who aim to make technical experience
            and knowledge accessible to anyone who’s interested.
          </StyledParagraph>
        </StyledColumn>
        <StyledColumn>
          <StyledHBPCore src={HBPCore} />
        </StyledColumn>
      </StyledContainer>
      <div style={{ display: 'flex' }}>
        <StyledSeahorse src={Seahorse} />
        <StyledBubbles src={Bubbles} />
      </div>
    </div>
  );
};

export default OurTeamSection;
