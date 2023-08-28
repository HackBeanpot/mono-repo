import styled from "@emotion/styled";
import { colors } from "../../../../shared-ui/style/colors";
import { P } from "../../../../shared-ui/style/typography";

const StyledHackerP = styled(P)`
  text-align: center;
  color: ${colors.TEXT_BROWN};
  font-size: 1.5em;
`;

const StyledInfoSection = styled.div `
padding: 3em 3em;
`;

export {
    StyledHackerP, 
    StyledInfoSection

}