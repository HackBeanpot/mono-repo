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
  margin-bottom: 1em;
`;

const StyledMentorsFilterDropdown = styled.select`
  border-color: ${colors.WHITE};
  background-color: ${colors.BUTTON_DARK_GREEN};
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  margin-bottom: 1.5em;
  border-radius: 0.3em;
  width: 35%; 
  height: 3em;
  padding-left: 0.5em;

  -webkit-appearance: none;
  appearance: none;
  background-image: url("../mentors-section/GoogleDropdown.png");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) center;

  @media ${min.mobile} {
    font-size: 1.2em;
  }
  @media ${min.tablet} {
    font-size: 1.25em;
    margin-right: 1.5em;
  }
  @media ${max.tabletLg} {
    margin-bottom: 1em;
    width: 55%;
  }
  @media ${max.tablet} {
    width: 65%;
  }
  @media ${max.mobile} {
    width: 85%;
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
    vertical-align: middle;
  }
`;

export {
  StyledMentorsSection,
  StyledMentorsHeader,
  StyledMentorsFilterDropdown,
  StyledMentorsFilterRadio
};
