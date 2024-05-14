import React, { useState } from 'react';
import TreasureChest from '../../../shared-ui/images/treasureChestSea.png'
import PirateFlag from '../../../shared-ui/images/pirateFlag.png'
import useMatchMedia from 'react-use-match-media';
import Arrow from '../../../shared-ui/components/arrow/Arrow';

import {
  StyledPastProjectsSection,
  StyledPastProjectsHeader,
  StyledPastProjectsContainer,
  StyledPastProjectsTitle,
  StyledPastProjectsMembers,
  StyledPastProjectsDescription,
  StyledPastProjectsPhotos,
  StyledPastProjectsInfo,
  StyledPastProjectsViewText,
  StyledPastProjectsInfoContainer,
  StyledArrowContainer,
  StyledPastProjectsDiv,
  StyledViewProjectButtonWrapper,
  StyledPastProjectsAward,
  StyledPastProjectsTitleAwardContainer,
  StyledPastProjectsLeftContainer,
  StyledPastProjectsRightContainer,
  StyledTreasureChest,
  StyledPirateFlag
} from './PastProjectsSection.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { min } from '../../../shared-ui/lib/responsive';
import { pastProjectsData } from '../../lib/data';
import { PastProjectData, PastProjectProps } from '../../lib/types';
import { getLeftOrRight } from '../../lib/utils';

const PastProjectsSection: React.FC<PastProjectProps> = ({ isDay }) => {
  const [currItem, setCurrItem] = useState<PastProjectData>(
    pastProjectsData[0]
  );
  const isDesktop = useMatchMedia(min.tablet);

  return (
    <div id="projects">
      <StyledPirateFlag src={PirateFlag} />
      <StyledPastProjectsHeader>Past Projects</StyledPastProjectsHeader>
      <StyledPastProjectsSection>
        {isDesktop &&
          pastProjectsData.map((project) => (
            <StyledPastProjectsContainer key={project.title}>
              <StyledPastProjectsPhotos src={project.image} />
              <StyledPastProjectsInfo>
                <StyledPastProjectsTitleAwardContainer>
                  <StyledPastProjectsTitle>
                    {project.title}, 2024
                  </StyledPastProjectsTitle>
                  <StyledPastProjectsAward>
                    {project.award}
                  </StyledPastProjectsAward>
                </StyledPastProjectsTitleAwardContainer>
                <StyledPastProjectsMembers>
                  {project.members}
                </StyledPastProjectsMembers>
                <StyledPastProjectsDescription>
                  {project.description}
                </StyledPastProjectsDescription>
                <StyledViewProjectButtonWrapper>
                  <PrimaryButton
                    btnText="View Project"
                    btnLink={project.btnLink}
                    newTab
                  />
                </StyledViewProjectButtonWrapper>
              </StyledPastProjectsInfo>
            </StyledPastProjectsContainer>
          ))}
      </StyledPastProjectsSection>

      {!isDesktop && (
        <>
          <StyledPastProjectsSection>
            <StyledPastProjectsLeftContainer>
              <StyledPastProjectsPhotos
                src={getLeftOrRight('left', pastProjectsData, currItem).image}
              />
            </StyledPastProjectsLeftContainer>
            <StyledPastProjectsRightContainer>
              <StyledPastProjectsPhotos
                src={getLeftOrRight('right', pastProjectsData, currItem).image}
              />
            </StyledPastProjectsRightContainer>
            <StyledPastProjectsPhotos src={currItem.image} />

            <StyledPastProjectsDiv>
              <StyledArrowContainer>
                <Arrow
                  left
                  onClick={(): void =>
                    setCurrItem(
                      getLeftOrRight('left', pastProjectsData, currItem)
                    )
                  }
                />
                <StyledPastProjectsTitle>
                  {currItem.title}, 2023
                </StyledPastProjectsTitle>
                <Arrow
                  left={false}
                  onClick={(): void =>
                    setCurrItem(
                      getLeftOrRight('right', pastProjectsData, currItem)
                    )
                  }
                />
              </StyledArrowContainer>
              <StyledPastProjectsTitleAwardContainer>
                <StyledPastProjectsAward>
                  {currItem.award}
                </StyledPastProjectsAward>
              </StyledPastProjectsTitleAwardContainer>
              <StyledPastProjectsDescription>
                {currItem.description}
              </StyledPastProjectsDescription>
            </StyledPastProjectsDiv>

            <PrimaryButton
              btnText="View Project"
              btnLink={currItem.btnLink}
              newTab
            />
          </StyledPastProjectsSection>
        </>
      )}

      <StyledPastProjectsInfoContainer isDay={isDay}>
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
    </div>
  );
};

export default PastProjectsSection;
