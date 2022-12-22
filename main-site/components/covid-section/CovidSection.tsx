import React from 'react';
import {
  StyledCovidSectionContainer,
  StyledDesertVan,
  StyledCovidTitleAndInformation,
  StyledCovidSectionInformation,
  StyledTitle,
  StyledExhaustLg,
  StyledExhaustSm,
  StyledExhaustSm2,
  ExhaustContainer
} from './CovidSection.styles';
import DesertVan from '../../../shared-ui/images/desert-van.svg';
import exhaustLg from '../../../shared-ui/images/exhaustLg.svg';
import exhaustSm from '../../../shared-ui/images/exhaustSm.svg';
import { colors } from '../../../shared-ui/style/colors';
import { bigPuff, smallPuff, smallPuff2 } from './CovidSection.animations';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
const CovidSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tabletLg);
  return (
    <StyledCovidSectionContainer>
      <StyledDesertVan src={DesertVan} />
      <img src={exhaustLg} />
      <StyledCovidTitleAndInformation>
        <StyledTitle color={colors.BLACK}>Safety first!</StyledTitle>
        <StyledCovidSectionInformation color={colors.TEXT_BROWN}>
          HackBeanpot is committed to ensuring that hackers feel safe and
          activities comply with local COVID-19 policies.
          <br />
          <br />
          For this reason, we ask that hackers upload proof of vaccination when
          asked after registration and encourage everyone to wear masks during
          the event as it is indoors.
        </StyledCovidSectionInformation>
        {isDesktop && (
          <ExhaustContainer>
            <StyledExhaustSm
              initial="initial"
              animate="animate"
              variants={smallPuff}
              src={exhaustSm}
            />
            <StyledExhaustSm2
              initial="initial"
              animate="animate"
              variants={smallPuff2}
              src={exhaustSm}
            />
            <StyledExhaustLg
              initial="initial"
              animate="animate"
              variants={bigPuff}
              src={exhaustLg}
            />
          </ExhaustContainer>
        )}
      </StyledCovidTitleAndInformation>
    </StyledCovidSectionContainer>
  );
};

export default CovidSection;
