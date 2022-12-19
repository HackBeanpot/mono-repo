import React from 'react';
import useMatchMedia from 'react-use-match-media';
import { max } from '../../../shared-ui/lib/responsive';
import { useAirtableApi } from '../../src/hooks/useAirtable';
import { StyledMentorsSection, StyledMentorsFilterRadio, StyledMentorsFilterDropdown, StyledMentorsHeader } from './MentorsSection.styles';

const MentorsSection: React.FC = () => {
  const isMobile = useMatchMedia(max.tablet);

  const { data } = useAirtableApi('Mentors', 'mentors');
  const positionsArr = Array.from(new Set(data.map(mentor => mentor.fields.position)));
  const companiesArr = Array.from(new Set(data.map(mentor => mentor.fields.company)));

  // const handlePositionFilterChange(x) {
  //   x.options[x.selectedIndex].innerHTML = 'Position: ' + x.value
  // };

  return (
    <StyledMentorsSection>
      <StyledMentorsHeader> Mentors </StyledMentorsHeader>
      <div>
        <label> Position: </label>
        <StyledMentorsFilterDropdown id="position-filter">
          {positionsArr.map((currPosition: string) => (
            <option value={currPosition}>{currPosition}</option>
          ))}
        </StyledMentorsFilterDropdown> 
      </div>
      {isMobile && <br />}
      <div>
      <StyledMentorsFilterDropdown id="company-filter">
          {companiesArr.map((currCompany: string) => (
            <option value={currCompany}>{currCompany}</option>
          ))}
        </StyledMentorsFilterDropdown>
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
      </div>
    </StyledMentorsSection>
  );
};

export default MentorsSection;
