import React from 'react';
import useMatchMedia from 'react-use-match-media';
import { max } from '../../../shared-ui/lib/responsive';
import { useAirtableApi } from '../../src/hooks/useAirtable';
import { StyledMentorsSection, StyledMentorsFilterRadio, StyledMentorsDropdownContainer, StyledMentorsDropdownWrapper, StyledMentorsHeader } from './MentorsSection.styles';

const MentorsSection: React.FC = () => {
  const isMobile = useMatchMedia(max.tabletLg);

  const { data } = useAirtableApi('Mentors', 'mentors');
  const positionsArr = Array.from(new Set(data.map(mentor => (`Position: ${mentor.fields.position}`))));
  const companiesArr = Array.from(new Set(data.map(mentor => (`Company: ${mentor.fields.company}`))));

  return (
    <StyledMentorsSection>
      <StyledMentorsHeader> Mentors </StyledMentorsHeader>
      <StyledMentorsDropdownContainer> <StyledMentorsDropdownWrapper options={positionsArr} /> </StyledMentorsDropdownContainer>
      {isMobile && <br />}
      <StyledMentorsDropdownContainer> <StyledMentorsDropdownWrapper options={companiesArr} /> </StyledMentorsDropdownContainer>
      <StyledMentorsFilterRadio>
        <input type="radio" id="onShiftMentors" name="mentors_filter" value="Mentors on shift now" />
        <label htmlFor="onShiftMentors">Mentors on shift now</label><br />
        <input type="radio" id="allMentors" name="mentors_filter" value="All mentors" />
        <label htmlFor="allMentors">All mentors</label><br />
      </StyledMentorsFilterRadio>
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
