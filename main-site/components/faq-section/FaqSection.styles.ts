import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H4, P } from '../../../shared-ui/style/typography';

const StyledFaqSectionContainer = styled.div`
  text-align: center;
  position: relative;
  top: 2em;
  margin-bottom: 5em;
`;

const StyledCactus = styled.img`
  position: absolute;
  margin-left: 5em;
  top: 0.1em;
  left: 1em;

  @media ${max.tablet} {
    width: 13em;
    top: -1em;
    display: none;
  }
`;

const StyledH4 = styled(H4)`
  color: ${colors.TEXT_BROWN};
  margin-top: 3em;
  padding: 2em;
`;

const StyledFaqContainer = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;
  color: ${colors.TEXT_BROWN}
  position: relative;
  padding: 4em;
  padding-bottom: 0;

@media ${max.tablet} {
    width: 75%;
    padding: 0em;
   
}
`;

const StyledFaqQuestionText = styled(H4)`
  color: ${colors.TEXT_BROWN};
  margin: 0.5em;
`;

const StyledFaqButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  color: ${colors.TEXT_BROWN};
`;

const StyledFaqLine = styled.hr`
  border: 1.5px solid ${colors.TEXT_BROWN};
`;

const StyledFaqDropdown = styled(P)`
  color: ${colors.TEXT_BROWN};
  text-align: left;
`;

export {
  StyledCactus,
  StyledFaqContainer,
  StyledFaqButton,
  StyledFaqDropdown,
  StyledFaqQuestionText,
  StyledFaqLine,
  StyledFaqSectionContainer,
  StyledH4
};
