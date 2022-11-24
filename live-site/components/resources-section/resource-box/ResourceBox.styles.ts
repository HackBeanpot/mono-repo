import styled from "styled-components";
import { max } from "../../../../shared-ui/lib/responsive";
import { fonts } from "../../../../shared-ui/lib/typography";
import { colors } from "../../../../shared-ui/style/colors";

const StyledResourceBox = styled.a`
   {
     text-decoration: none;
     width: 20%;
    height: 22em;
    background-color: ${colors.BUTTON_DARK_GREEN};
    margin: 1em;
    border-radius: 1em;
    border: 0.3em solid ${colors.PURPLE};
    cursor:pointer;
    @media ${max.tabletLg} {
      width: 19%;
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


  }
`;
const StyledLabel = styled.div`
   {
    font-family: ${fonts.nunitoSansBold};
    margin: 0.6em;
    font-size: 2.5em;
    color: ${colors.BUTTON_GREEN};
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
  }
`;

export {
    StyledResourceBox, StyledLabel
}