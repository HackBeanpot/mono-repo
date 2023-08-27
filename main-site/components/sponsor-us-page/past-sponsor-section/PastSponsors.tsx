import React from 'react';
import { 
    StyledPastSponsorsContainer, 
    StyledPastSponsorsImagesContainer,
    StyledTextSpacing 
} from './PastSponsor.styles'
import { H2 } from '../../../../shared-ui/style/typography';
import { min } from '../../../../shared-ui/lib/responsive';
import DesktopSizeImage from '../../../../shared-ui/images/sponsor-us/desktop-sponsors.png';
import MobileSizeImage from '../../../../shared-ui/images/sponsor-us/mobile-sponsors.png';


const PastSponsors: React.FC = () => {
    const mql = window.matchMedia(min.mobile)
    const showMobileImage: boolean = mql.matches;


    

    // if (showMobileImage) {
    //     imageUrl = DesktopSizeImage
    // } else {
    //     imageUrl = MobileSizeImage
    // }

    return (
        <StyledPastSponsorsContainer>
            <H2>Past Sponsors</H2>
            <br/>
            <StyledPastSponsorsImagesContainer>
                <img src={DesktopSizeImage}/>
            <StyledTextSpacing>
                Due to HackBeanpot's status as a 501c3 nonprofit organization, all sponsorship package<br/>
                purchases are considered tax deductible.
            </StyledTextSpacing>
            </StyledPastSponsorsImagesContainer>
        </StyledPastSponsorsContainer>
    );
};


export default PastSponsors;
