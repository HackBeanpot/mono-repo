import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { min } from '../../../../shared-ui/lib/responsive';

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
  @media ${min.mobile} {
    display: block;
    width: 16em;
    margin-top: 7em;
  }
`;

const StyledMentorName = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-top: 0.75em;
  @media ${min.mobile} {
    font-size: 1.5em; 
  }
`;

const StyledText = styled.div`
  font-size: 1.5em;
  @media ${min.mobile} {
    font-size: 1em;
  }
`;

const StyledHeader = styled.div`
  font-size: 1.25em;
  color: ${colors.TEXT_LIGHT_GREY};
  margin: 2em 0 0.75em 0;
  @media ${min.mobile} {
    margin: 0.5em 0 0.25em 0;
  }
`;

const StyledCloseButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 4em 4em 0 0;
  cursor: pointer;
  @media ${min.mobile} {
    margin: 2em 2em 0 0;
  }
`;

const StyledContactButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 4em 2em 0;
  cursor: pointer;
  @media ${min.mobile} {
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
