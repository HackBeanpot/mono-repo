import styled from 'styled-components';
import { max, min } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts } from '../../../shared-ui/style/typography';

const StyledMentorsSection= styled.div`
  padding-top: 2.4em;
  padding-left: 2.4em;
  margin-bottom: 2em;

  @media ${max.tablet} {
    padding-top: 0.8em;
    padding-left: 0.8em;
    margin-bottom: 0.8em;
  }
`;

const StyledMentorsFilterDropdown = styled.select`
  border-color: ${colors.WHITE};
  background-color: ${colors.BUTTON_DARK_GREEN};
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  margin-bottom: 1.5em;
  border-radius: 0.3em;
  width: 25%; 

  @media ${min.mobile} {
    font-size: 1.2em;
  }
  @media ${min.tablet} {
    font-size: 1.25em;
    margin-right: 1.5em;
  }
  @media ${max.mobile} {
    width: 75%;
  }
  @media ${max.tablet} {
    margin-bottom: 1em;
    width: 50%;
  }
  @media ${min.desktop} {
    display: inline-block;
  }
`;

const StyledMentorsFilterRadio = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};

  @media ${min.mobile} {
    font-size: 1.2em;
  }
  @media ${min.tablet} {
    font-size: 1.25em;
  }
  @media ${min.desktop} {
    display: inline-block;
  }
`;

export {
  StyledMentorsFilterDropdown,
  StyledMentorsSection,
  StyledMentorsFilterRadio
};
