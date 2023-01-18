import React, { useState, useEffect } from 'react';
import useMatchMedia from 'react-use-match-media';
import { max } from '../../../shared-ui/lib/responsive';
import { useAirtableApi } from '../../src/hooks/useAirtable';
import {
  StyledMentorsSection,
  StyledMentorsFilterSection,
  StyledMentorsFilterRadio,
  StyledMentorsDropdownContainer,
  StyledMentorsDropdownWrapper,
  StyledMentorsHeader,
  StyledMentorContainer,
  StyledMentorsListContainer,
  StyledMentorName,
  StyledMentorCompany,
  StyledMentorPosition,
  StyledMentorsPaginationContainer,
  StyledCactusButtons
} from './MentorsSection.styles';
import cactus1 from '../../../shared-ui/images/cactus1.png';
import cactus2 from '../../../shared-ui/images/cactus2.png';
import cactus3 from '../../../shared-ui/images/cactus3.png';
import cactus4 from '../../../shared-ui/images/cactus4.png';
import { MentorInfo } from '../../lib/types';

const MentorsSection: React.FC = () => {
  const isSmallMobile = useMatchMedia(max.tabletSm);
  const isSmallTablet = useMatchMedia(max.tablet);
  const isMobile = useMatchMedia(max.tabletLg);

  const { data } = useAirtableApi('Mentors', 'mentors');
  const [mentors, setMentors] = useState<MentorInfo[]>([]);
  const positionsArr = Array.from(
    new Set(mentors.map((mentor) => `Position: ${mentor.position}`))
  );

  const companiesArr = Array.from(
    new Set(mentors.map((mentor) => `Company: ${mentor.company}`))
  );
  const [paginatedMentors, setPaginatedMentors] = useState<MentorInfo[][]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const pageSize = isSmallMobile ? 9 : isSmallTablet ? 12 : 15;
  const imageSize = isMobile ? 100 : 160;
  const mentorsToDisplay = isMobile
    ? paginatedMentors[currentPage] ?? []
    : mentors;

  useEffect(() => {
    setMentors(
      data.map((mentor) => {
        return {
          name: mentor.fields.name,
          company: mentor.fields.company,
          position: mentor.fields.position,
          imageUrl: mentor.fields.image[0].url
        };
      })
    );
  }, [data, setMentors]);

  useEffect(() => {
    const pages: MentorInfo[][] = [];
    for (let i = 0; i < mentors.length; i += pageSize) {
      const mentorsForPage = mentors.slice(i, i + pageSize);
      pages.push(mentorsForPage);
    }
    setPaginatedMentors(pages);
  }, [mentors, pageSize, setPaginatedMentors]);

  const displayMentor = (mentor: MentorInfo): React.ReactElement => (
    <StyledMentorContainer>
      <img
        width={imageSize}
        height={imageSize}
        alt={`Image of ${mentor.name}`}
        src={mentor.imageUrl}
      ></img>
      <StyledMentorName>{mentor.name}</StyledMentorName>
      <StyledMentorCompany>{mentor.company}</StyledMentorCompany>
      <StyledMentorPosition>{mentor.position}</StyledMentorPosition>
    </StyledMentorContainer>
  );

  const getCactus = (index: number): string => {
    if (index % 4 === 0) {
      return cactus1;
    }
    if (index % 4 === 1) {
      return cactus2;
    }
    if (index % 4 === 2) {
      return cactus3;
    }
    return cactus4;
  };

  return (
    <div id="mentors">
      <StyledMentorsSection>
        <StyledMentorsFilterSection>
          <StyledMentorsHeader> Mentors </StyledMentorsHeader>
          <StyledMentorsDropdownContainer>
            <StyledMentorsDropdownWrapper id="position-filter">
              {positionsArr.map((currPosition: string) => (
                <option value={currPosition}>{currPosition}</option>
              ))}
            </StyledMentorsDropdownWrapper>
          </StyledMentorsDropdownContainer>
          {isMobile && <br />}
          <StyledMentorsDropdownContainer>
            <StyledMentorsDropdownWrapper id="company-filter">
              {companiesArr.map((currCompany: string) => (
                <option value={currCompany}>{currCompany}</option>
              ))}
            </StyledMentorsDropdownWrapper>
          </StyledMentorsDropdownContainer>
          <StyledMentorsFilterRadio>
            <input
              type="radio"
              id="onShiftMentors"
              name="mentors_filter"
              value="Mentors on shift now"
            />
            <label htmlFor="onShiftMentors">Mentors on shift now</label>
            <br />
            <input
              type="radio"
              id="allMentors"
              name="mentors_filter"
              value="All mentors"
            />
            <label htmlFor="allMentors">All mentors</label>
            <br />
          </StyledMentorsFilterRadio>
        </StyledMentorsFilterSection>
        <StyledMentorsListContainer>
          {mentorsToDisplay.map((currMentor) => displayMentor(currMentor))}
        </StyledMentorsListContainer>
        {isMobile && (
          <StyledMentorsPaginationContainer>
            {paginatedMentors.map((_, index) => (
              <StyledCactusButtons
                src={getCactus(index)}
                onClick={(): void => setCurrentPage(index)}
                isToggled={index == currentPage}
              />
            ))}
          </StyledMentorsPaginationContainer>
        )}
      </StyledMentorsSection>
    </div>
  );
};

export default MentorsSection;
