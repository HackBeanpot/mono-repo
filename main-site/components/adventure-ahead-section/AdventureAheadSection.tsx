import React from "react";
import PrimaryButton from "../../../shared-ui/components/primary-button/PrimaryButton";
import { H3 } from "../../../shared-ui/style/typography";
import { StyledButtonContainer, StyledParagraph, StyledTextContainer } from "../explore-section/ExploreSection.styles";
import Signpost from "../../../shared-ui/images/signpost.svg"

const AdventureAheadSection: React.FC = () => {
    return (
        <StyledTextContainer>
            <img src={Signpost}/>
            <H3>We can't wait to meet you!</H3>
            <StyledParagraph>
                Stay up to date with all things Hackbeanpot like when we announce 
                the location,date,and when applications open! (no spam we promise!)
            </StyledParagraph>
            <StyledButtonContainer>
            <PrimaryButton
              btnText="Join our mailing list"
              btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
              newTab
            />
          </StyledButtonContainer>
        </StyledTextContainer>
    )
}

export default AdventureAheadSection;