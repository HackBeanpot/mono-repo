import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { H3 } from '../../../shared-ui/style/typography';

const StyledMentorsHeader = styled(H3)`
  padding-left: 2.4em;
  @media ${max.tablet} {
    padding-left: 0.8em;
  }
`;

const StyledMentorsFilter= styled.div`
  font-size: 0.9375em;
`;

export {
  StyledMentorsHeader,
  StyledMentorsFilter
};
