import React from "react"
import PrimaryButton from "../primary-button/PrimaryButton";
import { StyledTimeRemainingHeader, StyledButtonContainer, StyledTimeRemainingContainer } from "./TimeRemaining.styles"




const TimeRemaining = () => {
    return (
        <StyledTimeRemainingContainer>

            <StyledTimeRemainingHeader>Time Remaining</StyledTimeRemainingHeader>
            <StyledButtonContainer>
                <PrimaryButton
                    btnText="Share with friends!"
                    btnLink="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
                    newTab
                />
            </StyledButtonContainer>
        </StyledTimeRemainingContainer>

    )




}
export default TimeRemaining;