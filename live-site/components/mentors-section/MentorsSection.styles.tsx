import styled from '@emotion/styled';
import { max, min } from '../../../shared-ui/lib/responsive';
import { H3, fonts } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import { StyledDropdown } from '../../styled-components/SecondarySelect.styles';
import { StyledArrowButtonsProps } from '../../lib/types';

const StyledMentorsSection = styled.div`
  padding-top: 5.5em;

  @media ${max.tablet} {
    padding-top: 2.4em;
  }
`;

const StyledMentorsFilterSection = styled.div`
  padding-left: 8vw;

  @media ${max.tablet} {
    padding-left: 2.4em;
  }
`;

const StyledMentorsHeader = styled(H3)`
  padding-left: 8vw;
  margin-bottom: 0.5em;
  font-family: ${fonts.berkshireSwash};
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
    margin-bottom: 3.5em;
  }
`;

const StyledMentorsDropdownWrapper = styled(StyledDropdown)`
  display: flex;
  width: 20vw;
  border-radius: 0.5em;

  @media ${max.tabletLg} {
    width: 50%;
  }
  @media ${max.tablet} {
    width: 60%;
  }
  @media ${max.mobile} {
    width: 15vw;
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
  padding: 2em 0;
  justify-content: center;
  max-width: 95%;
  margin: auto;

  @media ${max.tabletLg} {
    max-width: 50em;
  }

  @media ${max.tabletSm} {
    max-width: 25em;
  }
`;

const StyledMermaid = styled.img`
  position: absolute;
  width: 15%;
  right: 10vw;
  z-index: 0;
`;

const StyledMentorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0.75em 0;
  width: 7.75em;

  cursor: pointer;

  @media ${min.tabletSm} {
    margin: 1.25em 0;
    width: 9em;
  }

  @media ${min.tabletLg} {
    margin: 1.75em 0;
    width: 12em;
  }
`;

const StyledMentorName = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 1em;
  text-align: center;
  margin-bottom: 0.2vh;
  margin-top: 1vh;
  z-index: 1;

  @media ${min.tabletLg} {
    font-size: 1.25em;
  }
`;

const StyledMentorCompany = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  font-size: 0.75em;
  z-index: 1;

  @media ${min.tabletLg} {
    font-size: 1em;
  }
`;

const StyledMentorPosition = styled.div`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansLight};
  font-size: 0.75em;
  font-style: italic;
  z-index: 1;

  @media ${min.desktop} {
    font-size: 1em;
  }
`;

const StyledMentorsPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;

  @media ${min.desktop} {
    max-width: 95%;
  }
`;

const StyledNoMentorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75em;
`;

const StyledArrowButtons = styled.img<StyledArrowButtonsProps>`
  width: 2em;
  height: 2em;
  padding: 1em;
  align-self: center;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  z-index: 1;
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
  StyledMermaid,
  StyledNoMentorsContainer,
  StyledArrowButtons,
  StyledImage
};
