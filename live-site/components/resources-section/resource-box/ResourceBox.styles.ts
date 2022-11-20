import styled from "styled-components";
import { fonts } from "../../../../shared-ui/lib/typography";
import { colors } from "../../../../shared-ui/style/colors";

const StyledResourceBox = styled.div`
   {
    width: 18em;
    height: 22em;
    background-color: ${colors.BUTTON_DARK_GREEN};
    margin: 1em;
    border-radius: 1em;
    border: 0.3em solid ${colors.PURPLE};
  }
`;
const StyledLabel = styled.div`
   {
    font-family: ${fonts.nunitoSansBold};
    margin: 1em;
    font-size: 2.7em;
    color: ${colors.BUTTON_GREEN};
  }
`;

export {
    StyledResourceBox, StyledLabel
}