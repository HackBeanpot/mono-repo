import styled from '@emotion/styled';
import { max } from '../../../../lib/responsive';

const StyledMobileTeamColumn = styled.div`
  padding-top: 2.5em;
`;

const LabelArrowContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MobileImageContainer = styled.div`
  padding-top: 2em;
`;

const StyledHeadshot = styled.img`
  margin: 2em;
  @media ${max.tabletLg} {
    width: 9em;
  }
  @media ${max.tablet} {
    width: 8em;
  }
  @media ${max.tabletSm} {
    width: 7em;
  }
`;

const StyledImageRow = styled.div`
  justify-content: center;
`;

const StyledSecondaryButtonWrapper = styled.div`
  margin: 0 2em;
  @media ${max.tabletSm} {
    margin: 0 1em;
  }
`;

export {
  LabelArrowContainer,
  MobileImageContainer,
  StyledMobileTeamColumn,
  StyledImageRow,
  StyledHeadshot,
  StyledSecondaryButtonWrapper
};
