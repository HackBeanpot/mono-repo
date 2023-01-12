import styled from 'styled-components';
import { max, min } from '../../../shared-ui/lib/responsive';
import { H3, StyledDropdown } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import { fonts } from '../../../shared-ui/style/typography';
import { StyledCactusButtonsProps } from '../../lib/types';

const StyledMentorsSection = styled.div`
  padding-top: 5.5em;

  @media ${max.tablet} {
    padding-top: 2.4em;
  }
`;

const StyledMentorsFilterSection = styled.div`
  padding-left: 5.5em;

  @media ${max.tablet} {
    padding-left: 2.4em;
  }
`

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
  padding-bottom: 20px;
  justify-content: center;
  max-width: 95%;
  margin: auto;

  @media ${max.tabletLg} {
    max-width: 500px;
  }

  @media ${max.tabletSm} {
    max-width: 375px;
  }
`

const StyledMentorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;

  @media ${min.desktop} {
    padding: 20px 40px;
  }
`

const StyledMentorName = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 16px;

  @media ${min.desktop} {
    font-size: 22px;
  }
`

const StyledMentorCompany = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 14px;

  @media ${min.desktop} {
    font-size: 16px;
  }
`

const StyledMentorPosition = styled.div`
  color: ${colors.TEXT_BROWN};
  font-family: ${fonts.nunitoSansLight};
  font-size: 12px;
  font-style: italic;

  @media ${min.desktop} {
    font-size: 14px;
  }
`

const StyledMentorsPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  @media ${min.desktop} {
    max-width: 95%;
  }
`
const StyledCactusButtons = styled.img<StyledCactusButtonsProps>`
  width: ${(StyledCactusButtonsProps): string =>
    StyledCactusButtonsProps.isToggled ? '3em' : '2em'};
  height: ${(StyledCactusButtonsProps): string =>
    StyledCactusButtonsProps.isToggled ? '3em' : '2em'};
  padding: 1em;
  align-self: center;
`;

export {
  StyledMentorsSection,
  StyledMentorsFilterSection,
  StyledMentorsHeader,
  StyledMentorsDropdownContainer,
  StyledMentorsDropdownWrapper,
  StyledMentorsFilterRadio,
  StyledMentorsListContainer,
  StyledMentorContainer,
  StyledMentorName,
  StyledMentorCompany,
  StyledMentorPosition,
  StyledMentorsPaginationContainer,
  StyledCactusButtons
};
