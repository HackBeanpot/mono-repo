import React from "react";
import PrimaryButton from "../../../shared-ui/components/primary-button/PrimaryButton";
import { H3 } from "../../../shared-ui/style/typography";
import { colors } from '../../../shared-ui/style/colors';

import { StyledAdventureAheadSectionContainer, 
  StyledParagraph, 
  StyledSignpost,
  StyledTextContainer,
StyledButtonContainer } from "./AdventureAheadSection.styles";

import Signpost from "../../../shared-ui/images/signpost.svg"
import useMatchMedia from 'react-use-match-media';
import { min } from "../../../shared-ui/lib/responsive";


const AdventureAheadSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet)
    return (
      <StyledAdventureAheadSectionContainer>
        {isDesktop && <StyledSignpost src={Signpost}/> }
            <StyledTextContainer>
            <H3 color={colors.TEXT_BROWN}>We can't wait to meet you!</H3>
            <StyledParagraph>
                Stay up to date with all things Hackbeanpot like when we announce the <br/>
                 location, date, and when applications open! (no spam we promise!)
            </StyledParagraph>
            <StyledButtonContainer>
            <PrimaryButton
              btnText="Join mailing list"
              btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
              newTab
            />
          </StyledButtonContainer>
            </StyledTextContainer>
            {!isDesktop && <StyledSignpost src={Signpost}/>}
      </StyledAdventureAheadSectionContainer>

    )
}

export default AdventureAheadSection;