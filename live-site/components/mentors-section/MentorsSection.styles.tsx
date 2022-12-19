import styled from 'styled-components';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts } from '../../../shared-ui/style/typography';

const StyledMentorsSection= styled.div`
  margin-top: 2.4em;
  margin-left: 2.4em;

  @media ${max.tablet} {
    margin-top: 0.8em;
    margin-left: 0.8em;
  }
`;

const StyledMentorsFilterDropdown = styled.select`
  outline-color: ${colors.WHITE};
  background-color: ${colors.BUTTON_GREEN};
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};

  @media ${min.tablet} {
    margin-right: 0.8em;
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
