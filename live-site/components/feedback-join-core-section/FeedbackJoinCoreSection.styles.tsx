import styled from 'styled-components';
import { fonts } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import { P } from '../../../shared-ui/style/typography';
import { min, max } from '../../../shared-ui/lib/responsive';

const StyledFeedbackJoinCoreSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5.5em;
  gap: 2em;
  @media ${max.tablet} {
    padding: 2.4em;
    flex-wrap: wrap;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex: 100%;

  @media ${min.tablet} {
    flex: 50%;
  }
`;

const StyledColumnTitle = styled.div`
  font-size: 36px;
  font-family: ${fonts.nunitoSansSemibold};
  color: ${colors.OFF_BLACK};
`;

const StyledColumnText = styled(P)`
  color: ${colors.TEXT_BROWN};
`;

export {
  StyledFeedbackJoinCoreSection,
  StyledColumn,
  StyledColumnTitle,
  StyledColumnText
};
