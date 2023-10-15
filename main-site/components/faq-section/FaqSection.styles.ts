import styled from 'styled-components';
import { StyledPrimaryButton } from '../../../shared-ui/components/primary-button/PrimaryButton.styles';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { fonts, H2, H4 } from '../../../shared-ui/style/typography';

const StyledFaqSectionContainer = styled.div`
  text-align: center;
  position: relative;
  margin-top: 8em;
`;

const StyledCactus = styled.img`
  position: absolute;
  margin-left: 5em;
  top: 0.1em;
  left: 1em;

  @media ${max.desktop} {
    width: 13em;
    top: -1em;
    display: none;
  }
`;

const StyledH4 = styled(H4)`
  color: ${colors.TEXT_BROWN} !important;
  margin-top: 3em;
  padding: 2em;
`;

const StyledFaqSectionTitle = styled(H2)`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoRegular};
`;

const StyledContactUsButton = styled(StyledPrimaryButton)`
  color: #FABB32;
  background-color: #FABB32;
  font-family: ${fonts.nunitoRegular};
  &:hover {
    color: #D29000
    background-color: #D29000
  }

`;

export { 
  StyledCactus, 
  StyledFaqSectionContainer, 
  StyledH4,
  StyledFaqSectionTitle,
  StyledContactUsButton
};
