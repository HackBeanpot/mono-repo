import styled from "styled-components";
import { H3 } from "../../../shared-ui/style/typography";

const StyledMeetTheTeamSection = styled.div`
padding-top: 10em;
padding-bottom: 10em;
`;

const StyledImageContainer = styled.div`
display: flex;
padding-top: 2.5em;
justify-content: center;
text-align: center;
`;

const StyledH3 = styled(H3)`
text-align: center;
letter-spacing: 0.1em;
`;




export {
    StyledMeetTheTeamSection, 
    StyledImageContainer, 
    StyledH3
}