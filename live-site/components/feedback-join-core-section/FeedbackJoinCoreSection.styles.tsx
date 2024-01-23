import styled from '@emotion/styled';
import { fonts } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import { P } from '../../../shared-ui/style/typography';
import { min, max } from '../../../shared-ui/lib/responsive';

const StyledFeedbackJoinCoreSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 5.5em;
  gap: 10em;
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
  font-size: 2em;
  font-family: ${fonts.nunitoSansSemibold};
  color: ${colors.WHITE};
`;

const StyledOceanLayers = styled.img`
  width: 100%;
  margin-bottom: -0.2em;
`;

export {
  StyledFeedbackJoinCoreSection,
  StyledColumn,
  StyledColumnTitle,
  StyledOceanLayers
};
