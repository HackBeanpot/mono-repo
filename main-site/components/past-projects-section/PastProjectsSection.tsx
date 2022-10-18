import React from 'react';
import FennecFox from '../../../shared-ui/images/fennec-fox.svg';
import Inky from '../../../shared-ui/images/inky.jpg';
import Swaple from '../../../shared-ui/images/swaple.png';
import Camel from '../../../shared-ui/images/camel.svg';
import Duck from '../../../shared-ui/images/duck.png';

import {
  StyledPastProjectsSection,
  StyledPastProjectsHeader,
  StyledFennecFox,
  StyledPastProjectsContainer,
  StyledPastProjectsTitle,
  StyledPastProjectsMembers,
  StyledPastProjectsDescription,
  StyledPastProjectsPhotos,
  StyledPastProjectsInfo,
  StyledPastProjectsViewText,
  StyledPastProjectsInfoContainer,
  StyledCamel,
  StyledPastProjects,
  StyledPastProjectsContainerBottom
} from './PastProjectsSection.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
const PastProjectsSection: React.FC = () => {
  return (
    <StyledPastProjects>
      <StyledCamel src={Camel} />
      <StyledFennecFox src={FennecFox} />
      <StyledPastProjectsHeader>Past Projects</StyledPastProjectsHeader>
      <StyledPastProjectsSection>
        <StyledPastProjectsContainer>
          <StyledPastProjectsPhotos src={Inky} />
          <StyledPastProjectsInfo>
            <StyledPastProjectsTitle>
              Inky the Black Hole Pet, 2022
            </StyledPastProjectsTitle>
            <StyledPastProjectsMembers>
              by Rachael Cheung, Euann Gu, Jessica Luo
            </StyledPastProjectsMembers>
            <StyledPastProjectsDescription>
              Inky is a desktop pet! He can perform different actions: be
              dragged around, sleep, eat, etc.
            </StyledPastProjectsDescription>
            <PrimaryButton
              btnText="View Project"
              btnLink="https://devpost.com/software/inky-the-black-hole-pet
              "
              newTab
            />
          </StyledPastProjectsInfo>
        </StyledPastProjectsContainer>

        <StyledPastProjectsContainer>
          <StyledPastProjectsPhotos src={Swaple} />
          <StyledPastProjectsInfo>
            <StyledPastProjectsTitle>Swaple, 2022</StyledPastProjectsTitle>
            <StyledPastProjectsMembers>
              by Bob Zheng, Tze Zhe Brandon Lim, Nathan Kim, Daniel Ostapenko
            </StyledPastProjectsMembers>
            <StyledPastProjectsDescription>
              A parody of wordle, but you swap letters from a list of words
              instead! Try and complete the game in as few moves as possible.
            </StyledPastProjectsDescription>
            <PrimaryButton
              btnText="View Project"
              btnLink="https://brandonlim8890.github.io/wordle_variation/"
              newTab
            />
          </StyledPastProjectsInfo>
        </StyledPastProjectsContainer>

        <StyledPastProjectsContainerBottom>
          <StyledPastProjectsPhotos src={Duck} />
          <StyledPastProjectsInfo>
            <StyledPastProjectsTitle>Oh Duck!, 2022</StyledPastProjectsTitle>
            <StyledPastProjectsMembers>by Karyna Yen</StyledPastProjectsMembers>
            <StyledPastProjectsDescription>
              'Oh, Duck!' is a chrome chrome extension that replaces profane
              words with a duck emoji.
            </StyledPastProjectsDescription>
            <PrimaryButton
              btnText="View Project"
              btnLink="https://www.google.com/url?q=https://devpost.com/software/oh-duck&sa=D&source=editors&ust=1666054462827053&usg=AOvVaw1GNRfexvIUKuYxcp3Ey09w"
              newTab
            />
          </StyledPastProjectsInfo>
        </StyledPastProjectsContainerBottom>
      </StyledPastProjectsSection>
      <StyledPastProjectsInfoContainer>
        <StyledPastProjectsViewText>
          Interested in seeing more about our past events and past hacker
          projects?
          <br />
          Check out the HackBeanpot Archive!
        </StyledPastProjectsViewText>
        <PrimaryButton
          btnText="View Archive"
          btnLink="https://projects.hackbeanpot.com/"
          newTab
        />
      </StyledPastProjectsInfoContainer>
    </StyledPastProjects>
  );
};

export default PastProjectsSection;
