import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { fonts } from '../../../../shared-ui/style/typography';

const StyledTable = styled.table`
  padding-bottom: 5em;
  display: vertical;
  border: 0.08em solid ${colors.TEXT_BROWN};
  background-color: ${colors.WHITE};
  border-collapse: collapse;
`;

const JudgingTableSection = styled.div`
  justify-content: center;
  display: flex;
  padding-bottom: 5em;
`;

const Styledtd = styled.td`
  font-family: ${fonts.nunitoSansRegular};
  border: 0.08em solid ${colors.TEXT_BROWN};
  border-collapse: collapse;
  padding: 1em;
  text-align: center;
  font-size: 1.3em;

  @media ${max.tablet} {
    font-size: 1em;
  }
  @media ${max.tabletSm} {
    padding: 0.75em;
  }
`;

export { StyledTable, JudgingTableSection, Styledtd };
