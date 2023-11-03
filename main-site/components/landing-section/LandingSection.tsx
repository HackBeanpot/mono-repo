import React, { useRef } from 'react';
import {
  StyledHackathonText,
  StyledThemeText,
  StyledLandingButtonContainer,
  StyledLandingSectionContainer,
  StyledLandingTextContainer,
  StyledThemeTextSmall,
  StyledThemeTextParagraph,
  StyledBubble1,
  StyledBubble2,
  StyledFish,
  StyledJellyfish,
  StyledWhale
} from './LandingSection.styles';
import Bubble from '../../../shared-ui/images/bubbles.svg';
import Bubble2 from '../../../shared-ui/images/bubbles2.svg';
import Fish from '../../../shared-ui/images/fish.svg';
import Jellyfish from '../../../shared-ui/images/jellyfish.svg';
import Whale from '../../../shared-ui/images/whale.svg';
import ToggleMode from '../../../shared-ui/components/toggle-mode/ToggleMode';
import { LandingSectionProps } from '../../lib/types';
import { useInView } from 'framer-motion';
import {
  customAnimationVariants,
  containerAnimation,
  itemAnimation
} from '../../../shared-ui/animations/variants';

const LandingSection: React.FC<LandingSectionProps> = ({ isDay, setIsDay }) => {
  const LandingSectionRef = useRef(null);
  const LandingSectionInView = useInView(LandingSectionRef, { once: true });

  return (
    <StyledLandingSectionContainer variants = {containerAnimation} initial = "initial" animate = 'animate'>
      <ToggleMode isDay={isDay} setIsDay={setIsDay} location={'main-site'} />
      <StyledBubble1 src={Bubble} />
      <StyledBubble2 src={Bubble2} />
      <StyledFish src={Fish} />
      <StyledJellyfish src={Jellyfish} />
      <StyledWhale src={Whale} />
      <StyledLandingTextContainer
        variants={containerAnimation}
      >
        <StyledHackathonText variants={itemAnimation}>
          HackBeanpot 2024
        </StyledHackathonText>
        <StyledThemeText variants={itemAnimation}>
          Under the Sea
        </StyledThemeText>
        <StyledThemeTextSmall variants={itemAnimation}>
          February 10-12, 2024
        </StyledThemeTextSmall>
        <StyledThemeTextParagraph variants={itemAnimation}>
          @ Wood Mackenzie (Formerly known as PowerAdvocate) <br /> 179 Lincoln
          St, Boston, MA 02111
        </StyledThemeTextParagraph>
        {/* <LocationTimeSection isDay={isDay} /> */}
        <StyledLandingButtonContainer
          btnText="Apply"
          btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
          newTab
        />
      </StyledLandingTextContainer>
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
