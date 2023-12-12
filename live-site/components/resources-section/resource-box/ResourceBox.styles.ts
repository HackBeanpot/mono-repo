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
  margin: 1em;
  font-size: 1.8em;
  color: ${colors.WHITE};
`;

const StyledNewTabIcon = styled.img`
  height: 10%;
  display: block;
  margin-left: auto;
  margin-right: 0;
  margin-top: auto;
  position: relative;
`;

const StyledBottomLeftStarfish = styled.img`
  display: block;
  position: relative;
  bottom: 0;
  left: 0;
  height: 20%;
`;

const StyledPurpleStarfish = styled.img`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  height: 20%;
`;

const StyledRedStarfish = styled.img`
  display: block;
  position: relative;
  top: 0;
  right: 0;
  height: 20%;
`;

export { StyledResourceBox, StyledLabel, StyledNewTabIcon, StyledBottomLeftStarfish, StyledPurpleStarfish, StyledRedStarfish };
