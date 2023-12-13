import styled from 'styled-components';
import { max } from '../../lib/responsive';
import { colors } from '../../style/colors';
import { fonts, H2, P } from '../../style/typography';

const StyledTimeRemainingContainer = styled.div`
  text-align: center;
  padding-top: 2em;
`;

const StyledTimeRemaing = styled.div`
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const StyledTimeRemainingText = styled(H2)`
   {
    display: flex;
    font-size: 60px;
    letter-spacing: 0.001em; 
    color: ${colors.TEXT_BOX_BLUE};
  }
`;

const StyledTimeRemainingLabel = styled(P)` {
  color : ${colors.TEXT_BOX_BLUE};
  font-family: ${fonts.nunitoSansRegular};
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin-top: -0.5em; 

  @media ${max.tabletLg} {
  }
}`;

const StyledTimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimeRemainingDivider = styled(H2)`{
  color : ${colors.TEXT_BOX_BLUE};
  display: flex;
}`;

const StyledTimeRemainingHeader = styled(P)`
   {
    color: ${colors.TEXT_BOX_BLUE};
    font-family: ${fonts.nunitoSansBold};
    font-size: 1.25em;
    margin: 0;
  }
`;

const StyledButtonContainer = styled.div`
  margin-top: 0.5em;
  justify-content: center;
  padding-top: 1em;
  padding-bottom: 7em;
`;

export {
  StyledTimeRemainingLabel,
  StyledTimeRemainingDivider,
  StyledTimerContainer,
  StyledTimeRemainingText,
  StyledTimeRemaing,
  StyledTimeRemainingHeader,
  StyledButtonContainer,
  StyledTimeRemainingContainer
};
