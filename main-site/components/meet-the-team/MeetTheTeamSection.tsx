import React from 'react';
import { MeetTheTeamProps } from '../../../shared-ui/lib/types';
import {
    StyledMeetTheTeamSection, 
    StyledImageContainer, 
    StyledH3, 
    StyledTeamHeaders, 
    StyledTeamLabel
  } from './MeetTheTeamSection.styles';

const MeetTheTeamSection: React.FC<MeetTheTeamProps> = ({teamLabels}) => {
  return (
    <StyledMeetTheTeamSection>
    <StyledH3>Meet the Team</StyledH3>
      <StyledImageContainer>
          <StyledTeamHeaders>
          {teamLabels.map((label: string) => (
            <StyledTeamLabel>
          {label}
            </StyledTeamLabel>
          ))}
              
          </StyledTeamHeaders>
      </StyledImageContainer>
    </StyledMeetTheTeamSection>
  );
};

export default MeetTheTeamSection;
