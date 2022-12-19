import React from 'react';
import { useAirtableApi } from '../../src/hooks/useAirtable';
import { StyledMentorsSection, StyledMentorsHeader, StyledMentorsFilter } from './MentorsSection.styles';

const MentorsSection: React.FC = () => {
  const { data } = useAirtableApi('Mentors', 'mentors');
  const positionsArr = Array.from(new Set(data.map(mentor => mentor.fields.position)));
  const companiesArr = Array.from(new Set(data.map(mentor => mentor.fields.company)));

  return (
    <StyledMentorsSection>
      <StyledMentorsHeader> Mentors </StyledMentorsHeader>
      <select id="position-filter">
        {positionsArr.map((currPosition: string) => (
          <option value={currPosition}>{currPosition}</option>
        ))}
      </select>
      <select id="company-filter">
        {companiesArr.map((currCompany: string) => (
          <option value={currCompany}>{currCompany}</option>
        ))}
      </select>
      <StyledMentorsFilter>
        <input type="radio" id="onShiftMentors" name="mentors_filter" value="Mentors on shift now" />
        <label htmlFor="onShiftMentors">Mentors on shift now</label><br />
        <input type="radio" id="allMentors" name="mentors_filter" value="All mentors" />
        <label htmlFor="allMentors">All mentors</label><br />
      </StyledMentorsFilter>
      {data.map((currMentor) => (
        <>
          <p>{currMentor.fields.company}</p>
          <p>{currMentor.fields.name}</p>
          <p>{currMentor.fields.position}</p>
        </>
      ))}
    </StyledMentorsSection>
  );
};

export default MentorsSection;
