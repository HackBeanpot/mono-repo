import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { max, } from '../../../../shared-ui/lib/responsive';

const StyledModal = styled.div`
  position: fixed;
  margin: auto;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const StyledContainer = styled.div`
  background-color: white;
  position: absolute;
  font-family: Roboto, sans-serif;
  left: 0;
  right: 0;
  margin: 5em auto;
  padding: 3em;
  border-radius: 2em;
  width: 55em;
  display: flex;
  flex-direction: row;
  gap: 3em;

  @media ${max.tablet} {
    display: block;
    width: 18em;
  }
`;

const StyledMentorName = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-top: 0.75em;
  @media ${max.tablet} {
    font-size: 1.75em; 
  }
`;

const StyledText = styled.div`
  font-size: 1.5em;
  @media ${max.tablet} {
    font-size: 1.25em;
  }
`;

const StyledHeader = styled.div`
  font-size: 1.5em;
  color: ${colors.TEXT_LIGHT_GREY};
  margin: 2em 0 0.75em 0;
  @media ${max.tablet} {
    margin: 0.5em 0 0.25em 0;
  }
`;

const StyledCloseButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 4em 4em 0 0;
  cursor: pointer;
  @media ${max.tablet} {
    margin: 2em 2em 0 0;
  }
`;

const StyledContactButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 4em 2em 0;
  cursor: pointer;
  @media ${max.tablet} {
    position: relative;
    margin: 1em 0 0 5em;
  }
`;

export {
  StyledModal,
  StyledContainer,
  StyledMentorName,
  StyledText,
  StyledHeader,
  StyledCloseButtonContainer,
  StyledContactButtonContainer
};
