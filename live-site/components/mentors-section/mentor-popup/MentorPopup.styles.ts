import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';

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
  gap: 2em;
`;

const StyledMentorName = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-top: 0.75em;
`;

const StyledText = styled.div`
  font-size: 1.5em;
`;

const StyledHeader = styled.div`
  font-size: 1.5em;
  color: ${colors.TEXT_LIGHT_GREY};
  margin: 0.75em 0;
`;

const StyledCloseButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 4em 4em 0 0;
`;

const StyledContactButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 4em 2em 0;
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
