import styled from '@emotion/styled';
import { max } from '../../../../shared-ui/lib/responsive';
import { fonts } from '../../../../shared-ui/style/typography';
import { colors } from '../../../../shared-ui/style/colors';

const StyledResourceBox = styled.a`
  text-decoration: none;
  width: 17em;
  height: 22em;
  background-color: ${colors.LIGHT_GREEN};
  margin: 1em;
  border-radius: 1em;
  cursor: pointer;

  @media ${max.tabletLg} {
    height: 18em;
  }

  @media ${max.tablet} {
    height: 11em;
    margin: 0.7em;
    width: 43%;
    height: 14em;
  }

  @media ${max.tabletSm} {
    width: 40%;
  }
`;
const StyledLabel = styled.div`
  font-family: ${fonts.nunitoSansBold};
  margin: 2em;
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
