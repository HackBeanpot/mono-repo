import styled from 'styled-components';
import { max } from '../../../../lib/responsive';
import { fonts } from '../../../../../shared-ui/style/typography'

const StyledMobileTeamColumn = styled.div`
  padding-top: 2.5em;
`;

const LabelArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileImageContainer = styled.div`
  padding-top: 2em;
  width: 100%;
`;

const StyledHeadshot = styled.img`
  margin: 2em;
  @media ${max.tabletLg} {
    width: 9em;
  }
  @media ${max.tablet}{
    width: 8em;
  }
  @media ${max.tabletSm} {
    width: 7em;
  }
`;

const StyledImageRow = styled.div`
  justify-content: center;
  display: flex;
`;

const StyledSecondaryButtonWrapper = styled.div`
  margin: 0 2em;
  @media ${max.tabletSm} {
    margin: 0 1em;
  }
`;

const StyledLinkedIn = styled.a`
  color: white;
  text-decoration: none;
  width: 100%;
  font-family: ${fonts.nunitoSansRegular};

  img {
    width: 1.0em;
    height: 1.0em;
    margin-right: 0.3em;
    position: relative;
    top: 0.1em;
  }
`
const StyledPictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
`;


export {
  LabelArrowContainer,
  MobileImageContainer,
  StyledMobileTeamColumn,
  StyledImageRow,
  StyledHeadshot,
  StyledSecondaryButtonWrapper,
  StyledLinkedIn,
  StyledPictureContainer
};
