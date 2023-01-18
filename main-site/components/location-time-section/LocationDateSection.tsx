import React from "react";
import { StyledDateHeader, StyledLocationDateSectionContainer, StyledLocationText } from "./LocationDateSection.styles";



const LocationTimeSection: React.FC = () => {
    return (

       <StyledLocationDateSectionContainer>
        <StyledDateHeader>February 10-12, 2023</StyledDateHeader>
        <StyledLocationText>@Wood Mackenzie (Formerly known as PowerAdvocate)</StyledLocationText>
        <StyledLocationText>179 Lincoln St, Boston, MA 02111</StyledLocationText>
       </StyledLocationDateSectionContainer>
    );
}

export default LocationTimeSection;