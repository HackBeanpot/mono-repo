import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { H4, P } from '../../../../shared-ui/style/typography';
import { max } from '../../../../shared-ui/lib/responsive';

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

const StyledFaqPlusSign = styled.img`
  height: 1.5em;
  width: 1.5em;
  padding-left: 85%;
  position: absolute;

  @media ${max.tablet} {
    display: none;
  }
`;

export {
  StyledFaqButton,
  StyledFaqDropdown,
  StyledFaqQuestionText,
  StyledFaqLine,
  StyledFaqPlusSign
};
