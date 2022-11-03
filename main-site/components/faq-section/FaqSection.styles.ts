import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H4 } from '../../../shared-ui/style/typography';

const StyledFaqSectionContainer = styled.div`
  text-align: center;
  position: relative;
  margin-top: 8em;
`;

const StyledCactus = styled.img`
  position: absolute;
  margin-left: 5em;
  top: 0.1em;
  left: 1em;

  @media ${max.tablet} {
    width: 13em;
    top: -1em;
    display: none;
  }
`;

const StyledH4 = styled(H4)`
  color: ${colors.TEXT_BROWN};
  margin-top: 3em;
  padding: 2em;
`;

export { StyledCactus, StyledFaqSectionContainer, StyledH4 };
