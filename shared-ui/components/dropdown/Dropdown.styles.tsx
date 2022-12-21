import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { fonts } from '../../../shared-ui/style/typography';
import { max, min } from '../../lib/responsive';

const StyledDropdown = styled.select`
  border-color: ${colors.WHITE};
  background-color: ${colors.BUTTON_DARK_GREEN};
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  border-radius: 0.3em;
  height: 3em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  width: 35%; 

  @media ${min.mobile} {
    font-size: 1.2em;
  }
  @media ${min.tablet} {
    font-size: 1.25em;
  }
  @media ${max.tabletLg} {
    width: 55%;
  }
  @media ${max.tablet} {
    width: 65%;
  }
  @media ${max.mobile} {
    width: 85%;
  }
`;

export {
  StyledDropdown
};
