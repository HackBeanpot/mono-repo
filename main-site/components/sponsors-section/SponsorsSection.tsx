import React, { useState } from 'react';
import {
  StyledSponsorsSectionContainer,
  StyledContactContainer,
  StyledFish2,
  StyledGoldLogos,
  StyledSponsorsHeader,
  StyledContactText,
  StyledMobileLogo,
  StyledSecondaryButtonWrapper,
  StyledArrowWrapper,
  StyledOrangeStarfish,
  StyledRedStarfish,
  StyledGreenStarfish,
  StyledStarfishMobile,
  StyledSpecificSponsorsHeader,
  StyledPlatinumLogos,
  StyledBronzeLogos,
} from './SponsorsSection.styles';
import fish2 from '../../../shared-ui/images/fish2.svg';
import PlatinumLogos from '../../images/platinum-level-logos-desktop.png';
import GoldLogos from '../../images/gold-level-logos-desktop.png';
import BronzeLogos from '../../images/bronze-level-logos-desktop.png';
// import DiamondLogoMobile from '../../images/diamond-level-logo-mobile.png';
// import GoldLogosMobile from '../../images/gold-level-logos-mobile.png';
// import SilverLogosMobile from '../../images/silver-level-logos-mobile.png';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';
import Arrow from '../../../shared-ui/components/arrow/Arrow';
import { getLeftOrRight } from '../../lib/utils';
import { SponsorsSectionProps } from '../../lib/types';
import RedStarfish from '../../../shared-ui/images/Red Starfish.svg';
import GreenStarfish from '../../../shared-ui/images/Green Starfish.svg';
import OrangeStarfish from '../../../shared-ui/images/Orange Starfish.svg';
import MobileOrangeStarfish from '../../../shared-ui/images/OrangeStarfishMobile.svg';


const SponsorsSection: React.FC<SponsorsSectionProps> = ({ isDay }) => {
  const isDesktop = useMatchMedia(min.tabletLg);
  const sponsorLevelsInfo = ['Platinum Level', 'Gold Level', 'Bronze Level'];
  const [currLevel, setCurrLevel] = useState(sponsorLevelsInfo[0]);

  function getImage(title: string): string {
    if (title === 'Platinum Level') {
      return PlatinumLogos;
    }
    if (title === 'Gold Level') {
      return GoldLogos;
    }
    return BronzeLogos;
  }

  return (
    <div id='sponsors'>
    <StyledSponsorsSectionContainer>
      <StyledSponsorsHeader>2024 Sponsors</StyledSponsorsHeader>
      {!isDesktop && (
        <>
          <StyledArrowWrapper>
            <Arrow
              onClick={(): void =>
                setCurrLevel(
                  getLeftOrRight('left', sponsorLevelsInfo, currLevel)
                )
              }
            />
            <StyledSecondaryButtonWrapper>
            <StyledSpecificSponsorsHeader> {currLevel} </StyledSpecificSponsorsHeader>
            </StyledSecondaryButtonWrapper>
            <Arrow
              left={false}
              onClick={(): void =>
                setCurrLevel(
                  getLeftOrRight('right', sponsorLevelsInfo, currLevel)
                )
              }
            />
          </StyledArrowWrapper>
          <br />
          <StyledMobileLogo src={getImage(currLevel)} level={currLevel} />
          <StyledStarfishMobile src={MobileOrangeStarfish} alt="mobile orange starfish" />
        </>
      )}

      {isDesktop && (
        <>
          <div>
          <StyledOrangeStarfish src={OrangeStarfish} alt="orange starfish" />
            <StyledSpecificSponsorsHeader> Platinum Level </StyledSpecificSponsorsHeader>
            <br />
            <StyledPlatinumLogos
              src={PlatinumLogos}
              alt="platinum level logo"
            />
          </div>
          <div>
          <StyledSpecificSponsorsHeader> Gold Level </StyledSpecificSponsorsHeader>
            <br />
            <StyledGoldLogos src={GoldLogos} alt="gold level logos" />
            <StyledRedStarfish src={RedStarfish} alt="red starfish" />
          </div>
          <div>
          <StyledSpecificSponsorsHeader> Bronze Level </StyledSpecificSponsorsHeader>
            <br />
            <StyledBronzeLogos
              src={BronzeLogos}
              alt="bronze level logos"
            />
            <StyledGreenStarfish src={GreenStarfish} alt="green starfish" />
          </div>
        </>
      )}
      <StyledContactContainer isDay={isDay}>
        <StyledContactText>
          Interested in sponsoring HackBeanpot 2024? <br /> <br /> Reach out to
          us at team@hackbeanpot.com or check out our sponsorship packet!
        </StyledContactText>
        <PrimaryButton
          btnText="View packet"
          newTab={true}
          btnLink="https://drive.google.com/file/d/1G1qBIdoTtaCFI3E38ZYA1cVJSECSwMot/view?usp=sharing"
        />
        <StyledFish2 src={fish2} />
      </StyledContactContainer>
    </StyledSponsorsSectionContainer>
    </div>
  );
};

export default SponsorsSection;