import React from 'react';
import {
  StyledTextContainer,
  StyledParagraph,
  StyledWhySponsorContainer
} from './WhySponsor.styles';

import { H4 } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';
import { StyledFennecFox } from '../../past-projects-section/PastProjectsSection.styles';
import FennecFox from '../../../../shared-ui/images/fennec-fox.svg';
// import useMatchMedia from 'react-use-match-media';

const WnySponsor: React.FC = () => {
//   const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledWhySponsorContainer>
      <StyledFennecFox src={FennecFox} />
      <StyledTextContainer>
        <H4 color={colors.BUTTON_GREEN}>
          How can sponsoring HackBeanpot help your company?
        </H4>
        <StyledParagraph color={colors.WHITE}>
          HackBeanpot 2023 is gonna be a journey through the desert! Join our
          community of adventurers for a weekend of exploration, collaboration,
          and fun! (Oh, and did we mention free food and swag?) <br /> <br />
          Hackers can expect to put their resourcefulness to the test, while
          sharing stories, and learning new skills from peers. So whether you're
          a seasoned hackathon-goer, an ‘I-have-never-written-a-line-of-code’
          beginner, or someone in-between, we’re excited for you to embark on
          this adventure with us!
        </StyledParagraph>
      </StyledTextContainer>
    </StyledWhySponsorContainer>
  );
};

export default WnySponsor;
