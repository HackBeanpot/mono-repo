import React, { useState, useEffect } from 'react';
import { 
    StyledPastSponsorsContainer, 
    StyledPastSponsorsImagesContainer,
    StyledTextSpacing,
    StyledCenterImage,
    StyledBlurbText,
    StyledButtonContainer
} from './PastSponsor.styles'
import { H2 } from '../../../../shared-ui/style/typography';
import PrimaryButton from '../../../../shared-ui/components/primary-button/PrimaryButton';
import { breakpoints } from '../../../../shared-ui/lib/responsive';
import DesktopSizeImage from '../../../../shared-ui/images/sponsor-us/desktop-sponsors.png';
import MobileSizeImage from '../../../../shared-ui/images/sponsor-us/mobile-sponsors.png';


const PastSponsors: React.FC = () => {
    let imageUrl: string = DesktopSizeImage;

    if (window.innerWidth <= breakpoints.mobile) {
        imageUrl = MobileSizeImage;
    }

    return (
        <StyledPastSponsorsContainer>
            <H2>Past Sponsors</H2>
            <StyledPastSponsorsImagesContainer>
                <StyledCenterImage src={imageUrl}/>
            <StyledTextSpacing>
                Due to HackBeanpot's status as a 501c3 nonprofit organization, all sponsorship package
                purchases are considered tax deductible.
            </StyledTextSpacing>
            </StyledPastSponsorsImagesContainer>

            <StyledBlurbText>
                Interested in joining the HackBeanpot universe?
                <br/><br/>
                We would love to hear from you! Reach out to us at core@hackbeanpot.com 
                to discuss further and thank you for considering us.
            </StyledBlurbText>

            <StyledButtonContainer>
            <PrimaryButton
                btnText="Contact Us"
                btnLink="#"
                newTab
            />
            </StyledButtonContainer>
        </StyledPastSponsorsContainer>
    );
};


export default PastSponsors;
