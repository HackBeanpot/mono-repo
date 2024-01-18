import styled from 'styled-components';
import { max } from '../../lib/responsive';

const StyledMeetTheTeamSection = styled.div`
  padding-top: 12em, 0;
  text-align: center;
  padding-bottom: 15em;
  @media ${max.tabletLg} {
    padding-bottom: 0em;
  } ;
`;

const StyledImageContainer = styled.div`
  display: flex;
  width: 100%;
  object-fit: cover;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledSchoolOfFish = styled.img`
  float: right;
  width: 10%;
`;

export { StyledMeetTheTeamSection, StyledImageContainer, StyledSchoolOfFish };
