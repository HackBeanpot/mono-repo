import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H4, P } from '../../../shared-ui/style/typography';

const StyledFaqSectionContainer = styled.div`
  text-align: center;
  position: relative;
  top: 1em;
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
  text-align: left;
  padding-bottom: 0;

@media ${max.tablet} {
    width: 75%;
    padding: 0em;
   
}
`;

const StyledFaqQuestionText = styled(H4)`
  color: ${colors.TEXT_BROWN};

  padding: 1em;
  padding-left: 0;
  text-align: left;
  margin-left: 0;
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
  padding-left: 0;
`;

const StyledFaqLine = styled.hr`
  border: 1.5px solid ${colors.TEXT_BROWN};
  margin: 0;
`;

const StyledFaqDropdown = styled(P)`
  color: ${colors.TEXT_BROWN};
  text-align: left;
  margin: 0;
  padding: 1.5em;
  padding-left: 0;
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
