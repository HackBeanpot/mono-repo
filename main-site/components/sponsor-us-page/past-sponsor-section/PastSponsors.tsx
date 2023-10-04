import React from 'react';
import {
  StyledPastSponsorsContainer,
  StyledPastSponsorsImagesContainer,
  StyledImageDescription,
  StyledCenterImage,
  StyledContactText,
  StyledButtonContainer
} from './PastSponsor.styles';
import { H2 } from '../../../../shared-ui/style/typography';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import { min } from '../../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import DesktopSizeImage from '../../../../shared-ui/images/sponsor-us/desktop-sponsors.png';
import MobileSizeImage from '../../../../shared-ui/images/sponsor-us/mobile-sponsors.png';


const PastSponsors: React.FC = () => {
  const isDesktop = useMatchMedia(min.mobile);
  return (
    <StyledPastSponsorsContainer>
      <H2>Past Sponsors</H2>
      <StyledPastSponsorsImagesContainer>
        <StyledCenterImage src={ isDesktop ? DesktopSizeImage : MobileSizeImage}/>
        {isDesktop && (
          <StyledImageDescription>
            Due to HackBeanpot's status as a 501c3 nonprofit organization, all
            sponsorship package purchases are considered tax deductible.
          </StyledImageDescription>
        )}
      </StyledPastSponsorsImagesContainer>

      <StyledContactText>
        Interested in joining the HackBeanpot universe?
        <br />
        <br />
        We would love to hear from you! Reach out to us at core@hackbeanpot.com
        to discuss further and thank you for considering us.
      </StyledContactText>

      <StyledButtonContainer>
        <PrimaryButton
          btnText="Contact Us"
          btnLink="mailto:team@hackbeanpot.com"
        />
      </StyledButtonContainer>
    </StyledPastSponsorsContainer>
  );
};

export default PastSponsors;
