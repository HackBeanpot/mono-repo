import React from "react";
import { LocationSectionProps } from "../../../shared-ui/lib/types";
import { StyledDateHeader, StyledLocationDateSectionContainer, StyledLocationText } from "./LocationDateSection.styles";


const LocationTimeSection: React.FC<LocationSectionProps> = ({ isDay }) => {
    return (
       <StyledLocationDateSectionContainer>
        <StyledDateHeader isDay={isDay}>February 10-12, 2023</StyledDateHeader>
        <StyledLocationText isDay={isDay}>@Wood Mackenzie (Formerly known as PowerAdvocate)</StyledLocationText>
        <StyledLocationText isDay={isDay}>179 Lincoln St, Boston, MA 02111</StyledLocationText>
       </StyledLocationDateSectionContainer>
    );
}
export default LocationTimeSection;