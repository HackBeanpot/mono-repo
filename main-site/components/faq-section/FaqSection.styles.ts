import styled from 'styled-components';
import { StyledPrimaryButton } from '../../../shared-ui/components/primary-button/PrimaryButton.styles';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts, H2, H4 } from '../../../shared-ui/style/typography';
import { ButtonProps } from '../../../shared-ui/lib/types';

const StyledFaqSectionContainer = styled.div`
  text-align: center;
  position: relative;
  margin-top: 8em;
`;

const StyledOctopus = styled.img`
  position: absolute;
  top: -7em;
  right: -1.5em;
  width: 18em;
  height: 21em;

@media ${max.tabletLg} {
    width: 14em;
    height: 17em;
}

@media ${max.tablet} {
    width: 10em;
    height: 13em;
    right: 0em;
}

 @media ${max.tabletXs} {
  width: 8em;
  height: 11em;
  right: 0em;
}

`;

const StyledLightHouse = styled.img`
  position: absolute;
  top: 30em;
  left: -5em;
  width: 29em;
  height: 32em;

@media ${max.tabletLg} {
    width: 23em;
    height: 20em;
    top: 45em;
}

@media ${max.tablet} {
    width: 13em;
    height: 16em;
    left: -4em;
    top: 35em;
}

 @media ${max.tabletXs} {
  width: 10em;
  height: 13em;
  left: -2.5em;
  top: 40em;
}
`;

const StyledH4 = styled(H4)`
  color: ${colors.WHITE} !important;
  font-family: ${fonts.nunitoRegular};
  margin-top: 1em;
  padding: 2em;
  font-weight: 400;
`;

const StyledFaqSectionTitle = styled(H2)`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoRegular};

  @media ${max.tablet} {
    font-size: 2em;
`;

const StyledContactUsButton = styled(StyledPrimaryButton)<ButtonProps>`
  color: #FABB32;
  background-color: #FABB32;
  font-family: ${fonts.nunitoRegular};
  &:hover {
    color: #D29000
    background-color: #D29000
  }
`;

export { 
  StyledOctopus,
  StyledLightHouse, 
  StyledFaqSectionContainer, 
  StyledH4,
  StyledFaqSectionTitle,
  StyledContactUsButton
};
