import React, { useState, useEffect } from 'react';
import useMatchMedia from 'react-use-match-media';
import { max } from '../../../shared-ui/lib/responsive';
import { useAirtableApi } from '../../src/hooks/useAirtable';
import {
  StyledMentorsSection,
  StyledMentorsFilterRadio,
  StyledMentorsDropdownContainer,
  StyledMentorsDropdownWrapper,
  StyledMentorsHeader,
  StyledMentorContainer,
  StyledMentorsListContainer,
  StyledMentorName,
  StyledMentorCompany,
  StyledMentorPosition
} from './MentorsSection.styles';
import { MentorInfo } from '../../lib/types';

const MentorsSection: React.FC = () => {
  const isMobile = useMatchMedia(max.tabletLg);

  const { data } = useAirtableApi('Mentors', 'mentors');
  const [mentors, setMentors] = useState<MentorInfo[]>([]);
  const positionsArr = Array.from(
    new Set(mentors.map((mentor) => `Position: ${mentor.position}`))
  );

  const companiesArr = Array.from(
    new Set(mentors.map((mentor) => `Company: ${mentor.company}`))
  );

  useEffect(() => {
    setMentors(data.map((mentor) => {
      return {
        name: mentor.fields.name,
        company: mentor.fields.company,
        position: mentor.fields.position,
        imageUrl: mentor.fields.image[0].url
      }
    }))
  }, [data, setMentors]);

  return (
    <StyledMentorsSection>
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
      <StyledMentorsListContainer>
      {mentors.map((currMentor) => (
        <StyledMentorContainer>
          <img width="140" height="140" alt={`Image of ${currMentor.name}`} src={currMentor.imageUrl}></img>
          <StyledMentorName>{currMentor.name}</StyledMentorName>
          <StyledMentorCompany>{currMentor.company}</StyledMentorCompany>
          <StyledMentorPosition>{currMentor.position}</StyledMentorPosition>
        </StyledMentorContainer>
      ))}
      </StyledMentorsListContainer>
    </StyledMentorsSection>
  );
};

export default MentorsSection;
