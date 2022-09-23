import React from 'react';
import {
  StyledFillerSection,
  StyledTextContainer,
  StyledParagraph,
  StyledExploreSectionContainer,
  StyledExplorer,
  StyledVases
} from './ExploreSection.styles';
import { H3, P } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import Explorer from '../../../shared-ui/images/explorer.svg';
import Vases from '../../../shared-ui/images/vases.svg';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';



const ExploreSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <>
      <StyledFillerSection />
      <StyledExploreSectionContainer>
      <StyledExplorer src={Explorer}/>
        <StyledTextContainer >
          <H3 color={isDesktop ? colors.WHITE : colors.BLACK}>Explore the Desert with HackBeanpot!</H3>
          <StyledParagraph color={isDesktop ? colors.WHITE : colors.TEXT_BROWN}>
            HackBeanpot 2022 is gonna be out of this world! Join our community
            of astronaut trainees* for a weekend of exploration, collaboration,
            and fun! (Oh, and did we mention free food and swag?) <br /> <br />
            Hackers can expect to put their resourcefulness to the test, while
            sharing stories, and learning new skills from peers. So whether
            you're a seasoned hackathon-goer, an
            ‘I-have-never-written-a-line-of-code’ beginner, or someone
            in-between, we’re excited for you to embark on this adventure with
            us!
          </StyledParagraph>
          <PrimaryButton 
            btnText="Join our mailing list"
            btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
            newTab
          />
        </StyledTextContainer>
        <StyledVases src={Vases}/>
      </StyledExploreSectionContainer>
    </>
  );
};

export default ExploreSection;
