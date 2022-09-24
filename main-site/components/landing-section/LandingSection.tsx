import React from 'react';
import { H1 } from '../../../shared-ui/style/typography';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import {
  H3White,
  StyledLandingButtonContainer,
  StyledLandingSectionContainer
} from './LandingSection.styles';

const LandingSection: React.FC = () => {
  // const isDesktop = useMatchMedia(min.tablet);
  return (
    <>
      <StyledLandingSectionContainer>
        <H3White>HackBeanpot 2023</H3White>
        <H1>Desert Exploration</H1>

        <StyledLandingButtonContainer>
          <PrimaryButton
            btnText="Join our mailing list"
            btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
            newTab
          />
        </StyledLandingButtonContainer>
      </StyledLandingSectionContainer>
    </>
  );
};

export default LandingSection;
