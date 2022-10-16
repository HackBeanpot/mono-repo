import styled from "styled-components";
import { colors } from "../../../shared-ui/style/colors";
import { H3, P } from "../../../shared-ui/style/typography";

const StyledMeetTheTeamSection = styled.div`
padding-top: 10em;
padding-bottom: 10em;
`;

const StyledImageContainer = styled.div`
`;

const StyledH3 = styled(H3)`
text-align: center;
letter-spacing: 0.1em;
`;

const StyledTeamHeaders = styled.div`
display: flex;
justify-content: center;
`;

const StyledTeamLabel = styled(P)`
color: ${colors.TEXT_BROWN};
margin: 1em;
`;

export {
    StyledMeetTheTeamSection, 
    StyledImageContainer, 
    StyledH3, 
    StyledTeamHeaders, 
    StyledTeamLabel
}