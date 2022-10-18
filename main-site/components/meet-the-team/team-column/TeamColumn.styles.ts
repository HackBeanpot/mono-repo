import styled from "styled-components";
import { colors } from "../../../../shared-ui/style/colors";
import { P } from "../../../../shared-ui/style/typography";

const StyledTeamColumn = styled.div`
flex-direction: column;
width: 14em;
`;

const StyledLabel = styled(P)`
color: ${colors.TEXT_BROWN};
margin: 1em;
letter-spacing: 0.1em;
font-size: 1.3em;
`;

const StyledHeadshot = styled.img`
padding-top: 2em;
`;

export {
    StyledTeamColumn, 
    StyledLabel, 
    StyledHeadshot
}