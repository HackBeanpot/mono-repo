import React from 'react';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';

import {
  StyledAdventureAheadSectionContainer,
  StyledParagraph,
  StyledImageCore,
  StyledTextContainer,
  StyledButtonContainer,
  StyledHeader,
  StyledHeaderDiv,
  StyledOceanLayers,
  StyledShell
} from './AdventureAheadSection.styles';

import GroupPhoto from '../../../shared-ui/images/meet-the-team/group.png';
import OceanLayers from '../../../shared-ui/images/OceanLayers.svg';
import shell1 from '../../../shared-ui/images/shell1.svg';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';

const AdventureAheadSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <>
    <StyledAdventureAheadSectionContainer>
      {!isDesktop && <StyledHeaderDiv><StyledHeader>We can't wait to meet you!</StyledHeader></StyledHeaderDiv>};
      <StyledShell src={shell1}/>
      <StyledImageCore src={GroupPhoto}/>
      <StyledTextContainer>
      {isDesktop && <StyledHeader>We can't wait to meet you!</StyledHeader>}
        <StyledParagraph>
          Stay up to date with all things HackBeanpot like when we announce the location, date, and when applications open! (no spam we promise!)
        </StyledParagraph>
        <StyledButtonContainer>
          <PrimaryButton
            btnText="Join mailing list"
            btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
            newTab
          />
        </StyledButtonContainer>
      </StyledTextContainer>
    </StyledAdventureAheadSectionContainer>
    <StyledOceanLayers src={OceanLayers}/>
    </>
  );
};

export default AdventureAheadSection;
