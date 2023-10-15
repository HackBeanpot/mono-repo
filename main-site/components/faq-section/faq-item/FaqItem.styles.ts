import styled from '@emotion/styled';
import { colors } from '../../../../shared-ui/style/colors';
import { fonts, H4, P } from '../../../../shared-ui/style/typography';
import { max } from '../../../../shared-ui/lib/responsive';

const StyledFaqQuestionText = styled(H4)`
  color: ${colors.WHITE} !important;
  font-family: ${fonts.nunitoRegular};
  font-weight: 400;
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
  border: 1.4px solid ${colors.WHITE};
  margin: 0;
`;

const StyledFaqDropdown = styled(P)`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoRegular};
  text-align: left;
  margin: 0;
  padding: 1.5em;
  padding-left: 0;
`;

const StyledFaqPlusSign = styled.img`
  width: 1.5em;
  float: right;

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
