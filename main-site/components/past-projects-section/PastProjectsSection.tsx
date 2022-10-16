import React from 'react';
import FennecFox from '../../../shared-ui/images/fennec-fox.svg';
import Inky from '../../../shared-ui/images/inky.jpg';
import Swaple from '../../../shared-ui/images/swaple.png';

import {
  StyledPastProjectsSection,
  StyledPastProjectsHeader,
  StyledFennecFox,
  StyledPastProjectsContainer,
  StyledPastProjectsTitle,
  StyledPastProjectsMembers,
  StyledPastProjectsDescription,
  StyledPastProjectsPhotos,
  StyledPastProjectsInfo
} from './PastProjectsSection.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
const PastProjectsSection: React.FC = () => {
  return (
    <div>
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
              btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
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
              btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
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
              btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
              newTab
            />
          </StyledPastProjectsInfo>
        </StyledPastProjectsContainer>
      </StyledPastProjectsSection>
      <StyledFennecFox src={FennecFox} />
      <PrimaryButton
        btnText="View Archive"
        btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
        newTab
      />
    </div>
  );
};

export default PastProjectsSection;
