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
import variants from '../../../shared-ui/animations/variants';

const LandingSection: React.FC<LandingSectionProps> = ({ isDay, setIsDay }) => {

  return (
    <StyledLandingSectionContainer>
      <ToggleMode isDay={isDay} setIsDay={setIsDay} location={'main-site'} />
      <StyledBubble1 src={Bubble} />
      <StyledBubble2 src={Bubble2} />
      <StyledFish src={Fish} />
      <StyledJellyfish src={Jellyfish} />
      <StyledWhale src={Whale} />
      <StyledLandingTextContainer
        variants={variants.container}
        initial="hidden"
        animate="staggerFadeInAndUp"
      >
        <StyledHackathonText variants={variants.item}>
          HackBeanpot 2024
        </StyledHackathonText>
        <StyledThemeText variants={variants.item}>
          Under the Sea
        </StyledThemeText>
        <StyledThemeTextSmall variants={variants.item}>
          February 10-12, 2024
        </StyledThemeTextSmall>
        <StyledThemeTextParagraph variants={variants.item}>
          @ Wood Mackenzie (Formerly known as PowerAdvocate) <br /> 179 Lincoln
          St, Boston, MA 02111
        </StyledThemeTextParagraph>
        <StyledLandingButtonContainer
          variants={variants.item}
          btnText="Apply"
          btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
          newTab
        />
        {/* <LocationTimeSection isDay={isDay} /> */}
      </StyledLandingTextContainer>
    </StyledLandingSectionContainer>
  );
};

export default LandingSection;
