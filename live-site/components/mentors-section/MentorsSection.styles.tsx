import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts, H3 } from '../../../shared-ui/style/typography';

const StyledMentorsSection= styled.div`
  padding-left: 2.4em;
`;

const StyledMentorsHeader = styled(H3)`
  @media ${max.tablet} {
    padding-left: 0.8em;
  }
`;

const StyledMentorsFilter= styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
`;

export {
  StyledMentorsSection,
  StyledMentorsHeader,
  StyledMentorsFilter
};
