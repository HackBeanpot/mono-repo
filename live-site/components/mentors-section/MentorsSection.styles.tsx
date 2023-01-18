import styled from 'styled-components';
import { max, min } from '../../../shared-ui/lib/responsive';
import { H3 } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import { fonts } from '../../../shared-ui/style/typography';
import { StyledDropdown } from '../../styled-components/SecondarySelect.styles';
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
  padding: 2em 0em;
  justify-content: center;
  max-width: 95%;
  margin: auto;

  @media ${max.tabletLg} {
    max-width: 50em;
  }

  @media ${max.tabletSm} {
    max-width: 25em;
  }
`

const StyledMentorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.75em;

  @media ${min.tabletSm} {
    padding: 1.25em;
  }

  @media ${min.desktop} {
    padding: 1.75em 3.5em;
  }
`

const StyledMentorName = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1.25em;

  @media ${min.desktop} {
    font-size: 1.7em;
  }
`

const StyledMentorCompany = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 0.75em;

  @media ${min.desktop} {
    font-size: 1em;
  }
`

const StyledMentorPosition = styled.div`
  color: ${colors.TEXT_BROWN};
  font-family: ${fonts.nunitoSansLight};
  font-size: 0.75em;
  font-style: italic;

  @media ${min.desktop} {
    font-size: 1em;
  }
`

const StyledMentorsPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
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
