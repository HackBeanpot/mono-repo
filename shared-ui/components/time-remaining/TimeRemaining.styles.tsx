import styled from 'styled-components';
import { max, min } from '../../lib/responsive';
import { colors } from '../../style/colors';
import { fonts, H2, P } from '../../style/typography';
import { TimeRemainingTextProps } from '../../lib/types';

const StyledTimeRemainingContainer = styled.div`
  z-index: 1;
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

const StyledTimeRemainingText = styled(H2)<TimeRemainingTextProps>`
   {
    display: flex;
    font-size: 60px;
    letter-spacing: 0.001em;
    color: ${(props): string =>
      props.isDay ? colors.TEXT_BOX_BLUE : colors.WHITE};
    @media ${max.desktop} {
      font-size: 40px;
    }
    @media ${max.tabletLg} {
      font-size: 35px;
    }
    @media ${max.tablet} {
      font-size: 40px;
    }
  }
`;

const StyledTimeRemainingLabel = styled(P)<TimeRemainingTextProps>`
   {
    color: ${(props): string =>
      props.isDay ? colors.TEXT_BOX_BLUE : colors.WHITE};
    font-family: ${fonts.nunitoSansRegular};
    display: flex;
    font-size: 18px;
    justify-content: center;
    margin-top: -0.5em;
    @media ${max.desktop} {
      font-size: 1em;
    }
    @media ${max.tabletLg} {
      font-size: 1em;
    }
  }
`;

const StyledTimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimeRemainingDivider = styled(H2)`
   {
    color: ${colors.TEXT_BOX_BLUE};
    display: flex;
  }
`;

const StyledTimeRemainingHeader = styled(P)<TimeRemainingTextProps>`
   {
    color: ${(props): string =>
      props.isDay ? colors.TEXT_BOX_BLUE : colors.WHITE};
    font-family: ${fonts.nunitoSansBold};
    font-size: 1.25em;
    margin: 0;
  }
  @media ${max.tabletLg} {
    font-size: 1em;
  }
`;

const StyledButtonContainer = styled.div`
  margin-top: 0.5em;
  justify-content: center;
  padding-top: 1em;
  padding-bottom: 7em;
  @media ${max.desktop} {
    margin-top: 0;
  }
  @media ${max.tabletLg} {
    margin-top: 0;
  }
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
