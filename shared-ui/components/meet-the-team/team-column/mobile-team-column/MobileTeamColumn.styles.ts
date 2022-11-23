import styled from 'styled-components';
import { max } from '../../../../lib/responsive';
import { StyledTeamLabelProps } from '../../../../lib/types';
import { colors } from '../../../../style/colors';
import { P } from '../../../../style/typography';

const StyledMobileTeamColumn = styled.div`
  padding-top: 2.5em;
`;

const LabelArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 0.5em;
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

const StyledLabel = styled(P)<StyledTeamLabelProps>`
  padding-left: 0.8em;
  width: 8em;
  margin-bottom: ${(props): string => (props.twoLines ? '-1.2em' : '0')};
  font-size: 1.9em;
  color: ${colors.TEXT_BROWN};
  letter-spacing: 0.1em;
  @media ${max.tabletLg} {
    padding-left: 0;
  }
  @media ${max.tabletSm} {
    font-size: 1.6em;
  }
`;

export {
  LabelArrowContainer,
  MobileImageContainer,
  StyledMobileTeamColumn,
  StyledImageRow,
  StyledHeadshot,
  StyledLabel
};
