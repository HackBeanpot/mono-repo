import styled from '@emotion/styled';
import { max } from '../../lib/responsive';
import { colors } from '../../style/colors';
import { fonts, H2, P } from '../../style/typography';

const StyledTimeRemainingContainer = styled.div`
  text-align: center;
  padding-top: 2em;
`;

const StyledTimeRemaing = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const StyledTimeRemainingText = styled(H2)`
   {
    display: flex;
    padding-right: 0.2em;
    color: white;
  }
`;

const StyledTimeRemainingLabel = styled(P)` {
  color : ${colors.WHITE}
  font-family: ${fonts.nunitoSansLight};
  display: flex;
  

  @media ${max.tabletLg} {
    padding-left: 0.2em;
  }
}`;

const StyledTimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimeRemainingDivider = styled(H2)`{
  color : ${colors.WHITE}
  display: flex;
}`;

const StyledTimeRemainingHeader = styled(P)`
   {
    color: ${colors.TEXT_BROWN};
    font-family: ${fonts.nunitoSansLight};
    font-size: 2em;
    padding: 0.5em;
  }
`;

const StyledButtonContainer = styled.div`
  margin-top: 0.5em;
  justify-content: center;
  padding-top: 2em;
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
