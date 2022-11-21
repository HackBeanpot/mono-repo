import React, { useEffect, useState } from "react"
import PrimaryButton from "../primary-button/PrimaryButton";
import { StyledTimeRemainingHeader, StyledButtonContainer, StyledTimeRemainingContainer, StyledTimeRemainingText, StyledTimerContainer, StyledTimeRemainingDivider, StyledTimeRemainingLabel } from "./TimeRemaining.styles"

const TimeRemaining = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("02/03/2023 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

           


            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

           
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    return (
        <StyledTimeRemainingContainer>
            <StyledTimeRemainingHeader>Time Remaining</StyledTimeRemainingHeader>


            <StyledTimerContainer>

                <div>
                    <StyledTimeRemainingText>{days}  :</StyledTimeRemainingText>
                    <StyledTimeRemainingLabel>Days</StyledTimeRemainingLabel>
                </div>


                <div>
                    <StyledTimeRemainingText>{hours}  :</StyledTimeRemainingText>
                    <StyledTimeRemainingLabel>Hours</StyledTimeRemainingLabel>
                </div>


                <div>

                    <StyledTimeRemainingText>{minutes}  :</StyledTimeRemainingText>
                    <StyledTimeRemainingLabel>Minutes</StyledTimeRemainingLabel>
                </div>



                <div>

                    <StyledTimeRemainingText>{seconds}</StyledTimeRemainingText>
                    <StyledTimeRemainingLabel>Seconds</StyledTimeRemainingLabel>
                </div>



            </StyledTimerContainer>







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