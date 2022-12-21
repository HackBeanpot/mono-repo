import styled from 'styled-components';
import { max, min } from '../../../shared-ui/lib/responsive';
import { H3, StyledDropdown } from '../../../shared-ui/style/typography';
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

const StyledMentorsDropdownContainer = styled.div`
  margin-bottom: 1.5em;

  @media ${min.tablet} {
    margin-right: 1.5em;
  }
  @media ${max.tabletLg} {
    margin-bottom: 1em;
  }
  @media ${min.desktop} {
    display: inline-block;
  }
`;

const StyledMentorsDropdownWrapper = styled(StyledDropdown)`
  width: 50%;
  
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
  StyledMentorsDropdownContainer,
  StyledMentorsDropdownWrapper,
  StyledMentorsFilterRadio
};
