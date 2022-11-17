import styled from "styled-components";
import { colors } from "../../style/colors";
import { fonts, P } from "../../style/typography";

const StyledTimeRemaing = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;


`;


const StyledTimeRemainingHeader = styled(P)`{
    color: ${colors.TEXT_BROWN};
    font-family: ${fonts.nunitoSansLight};
    font-size: 2em;
    text-align: center;
    padding: 0.5em;
}
`;

export { StyledTimeRemaing, StyledTimeRemainingHeader };
