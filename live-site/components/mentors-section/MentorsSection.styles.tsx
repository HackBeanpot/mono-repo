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
  width: 19em;

  @media ${max.tabletLg} {
    width: 50%;
  }
  @media ${max.tablet} {
    width: 60%;
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

const StyledMentorsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 95%;
  padding-bottom: 20px;
`

const StyledMentorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`

const StyledMentorName = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 22px;
`

const StyledMentorCompany = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 16px;
`

const StyledMentorPosition = styled.div`
  color: ${colors.TEXT_BROWN};
  font-family: ${fonts.nunitoSansLight};
  font-size: 14px;
  font-style: italic;
`

export {
  StyledMentorsSection,
  StyledMentorsHeader,
  StyledMentorsDropdownContainer,
  StyledMentorsDropdownWrapper,
  StyledMentorsFilterRadio,
  StyledMentorsListContainer,
  StyledMentorContainer,
  StyledMentorName,
  StyledMentorCompany,
  StyledMentorPosition
};
