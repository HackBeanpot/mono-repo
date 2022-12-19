import styled from 'styled-components';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts } from '../../../shared-ui/style/typography';

const StyledMentorsSection= styled.div`
  padding-top: 2.4em;
  padding-left: 2.4em;
  padding-bottom: 1em;

  @media ${max.tablet} {
    padding-top: 0.8em;
    padding-left: 0.8em;
    padding-bottom: 0.8em;
  }
`;

const StyledMentorsFilterDropdown = styled.select`
  border-color: ${colors.WHITE};
  background-color: ${colors.BUTTON_DARK_GREEN};
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  margin-bottom: 1.5em;
  
  @media ${min.tablet} {
    margin-right: 1.5em;
  }

  @media ${max.tablet} {
    margin-bottom: 1em;
  }
`;

const StyledMentorsFilterRadio = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
`;

export {
  StyledMentorsFilterDropdown,
  StyledMentorsSection,
  StyledMentorsFilterRadio
};
