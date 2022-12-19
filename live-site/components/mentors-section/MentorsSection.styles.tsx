import styled from 'styled-components';
import { max, min } from '../../../shared-ui/lib/responsive';
import { H3 } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import { fonts } from '../../../shared-ui/style/typography';

const StyledMentorsSection = styled.div`
  padding-top: 5.5em;
  padding-left: 5.5em;

  @media ${max.tablet} {
    padding-top: 2.4em;
    padding-left: 2.4em;
  }
`;

const StyledMentorsHeader = styled(H3)`
  padding-bottom: 1em;
`;

const StyledMentorsFilterDropdown = styled.select`
  border-color: ${colors.WHITE};
  background-color: ${colors.BUTTON_DARK_GREEN};
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  margin-bottom: 1.5em;
  border-radius: 0.3em;
  width: 25%; 
  height: 3em;

  @media ${min.mobile} {
    font-size: 1.2em;
  }
  @media ${min.tablet} {
    font-size: 1.25em;
    margin-right: 1.5em;
  }
  @media ${max.tablet} {
    margin-bottom: 1em;
    width: 50%;
  }
  @media ${max.mobile} {
    width: 75%;
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
    display: inline-block;
    padding-top: 0.3em;
  }
`;

export {
  StyledMentorsSection,
  StyledMentorsHeader,
  StyledMentorsFilterDropdown,
  StyledMentorsFilterRadio
};
