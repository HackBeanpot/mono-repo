import styled from '@emotion/styled';
import { max } from '../../../../shared-ui/lib/responsive';
import { fonts } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';

const StyledResourceBox = styled.img`
  margin: 1em;
  cursor: pointer;
  height: 21em;

  @media ${max.tabletLg} {
    height: 15em;
  }

  @media ${max.tablet} {
    height: 11em;
  }
`;
const StyledLabel = styled.div`
  font-family: ${fonts.berkshireSwash};
  margin: 0.6em;
  font-size: 2.8em;
  color: ${colors.WHITE};

  @media ${max.tabletLg} {
    font-size: 1.8em;
    margin: 0.4em;
  }

  @media ${max.tablet} {
    font-size: 2.89em;
  }

  @media ${max.tabletSm} {
    font-size: 1.8em;
  }
`;

export { StyledResourceBox, StyledLabel };