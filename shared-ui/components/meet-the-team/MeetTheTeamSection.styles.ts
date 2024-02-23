import styled from 'styled-components';
import { max } from '../../lib/responsive';
import { colors } from '../../style/colors';
import { H3 } from '../../style/typography';

const StyledMeetTheTeamSection = styled.div`
  padding-top: 12em, 0;
  text-align: center;
  padding-bottom: 15em;
  @media ${max.tabletLg} {
    padding-bottom: 0em;
  } ;
`;

const StyledHeader = styled(H3)`
  color: ${colors.WHITE};
  font-family: Berkshire-Swash;
  font-size: 2.7em;
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

export { StyledMeetTheTeamSection, StyledImageContainer, StyledSchoolOfFish, StyledHeader};
