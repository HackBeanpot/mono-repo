import React from 'react';
import {
  StyledCovidSectionContainer,
  StyledDesertVan,
  StyledCovidInformationAndButton,
  StyledCovidPolicyButtonContainer,
  StyledCovidSectionInformation
} from './CovidSection.styles';
import DesertVan from '../../../shared-ui/images/desert-van.svg';
import { CovidSectionProps } from '../../../shared-ui/lib/types';
import { H3 } from "../../../shared-ui/style/typography";
import { colors } from '../../../shared-ui/style/colors';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';

const CovidSection: React.FC<CovidSectionProps> = ({ isDay }) => {
  const isDesktop = useMatchMedia(min.tablet);

  return (
    <StyledCovidSectionContainer>
        {isDesktop && <StyledDesertVan src={DesertVan} />}

        <H3 color={isDay ? colors.BLACK : colors.WHITE}>
          Safety first! 
        </H3>
        <StyledCovidInformationAndButton>
          <StyledCovidSectionInformation color={isDay ? colors.BLACK : colors.WHITE}>
            In light of the COVID-19 pandemic, HackBeanpot is closely monitoring the situation and is fully 
            prepared to go virtual if public health dictates (although we really hope to see you all in person!)
            HackBeanpot is preparing to follow CDC guidelines surrounding room capacity, maintaining cleanliness,
            wearing masks, supplying sanitizer stations, and more. Take a look at our policies to learn more.
          </StyledCovidSectionInformation>

          <StyledCovidPolicyButtonContainer>
            <PrimaryButton 
              btnText="Our COVID Policies"
              btnLink="www.google.com"
              newTab
            />
          </StyledCovidPolicyButtonContainer>
        </StyledCovidInformationAndButton>

    </StyledCovidSectionContainer>
  );
};

export default CovidSection;
