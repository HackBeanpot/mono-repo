import React from 'react';
import {
  StyledTextContainer,
  StyledParagraph,
  StyledExploreSectionContainer,
  StyledDiver,
  StyledBubble3,
  StyledButtonContainer
} from './ExploreSection.styles';
import { H3 } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import Bubble3 from '../../../shared-ui/images/bubbles3.svg';
import Diver from '../../../shared-ui/images/diver.svg';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import { ExploreSectionProps } from '../../lib/types';

const ExploreSection: React.FC<ExploreSectionProps> = ({ isDay }) => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledExploreSectionContainer>
      <StyledTextContainer isDay={isDay}>
        <H3>Dive deep and explore!</H3>
        <StyledParagraph color={colors.WHITE}>
          HackBeanpot 2024 is gonna be an adventure under the sea! Join our
          school of fish for a weekend of exploration, collaboration, and fun!
          (Oh, and did we mention a tsunami of free food and treasures?) <br />{' '}
          <br />
          Hackers can expect to put their resourcefulness to the test while
          sharing stories, and learning new skills from peers. So whether you're
          a SEAsoned hackathon-goer, an ‘I-have-never-written-a-line-of-code’
          beginner, or someone in-between, we’re so shore things will go
          swimmingly!
        </StyledParagraph>
      </StyledTextContainer>
      <StyledDiver src={Diver} />
      <StyledBubble3 src={Bubble3} />
    </StyledExploreSectionContainer>
  );
};

export default ExploreSection;
