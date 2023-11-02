import React, { useState } from 'react';
import SecondaryButton from '../../../shared-ui/components/secondary-button/SecondaryButton';
import {
  StyledSponsorsSectionContainer,
  StyledContactContainer,
  StyledFish2,
  StyledDiamondLogo,
  StyledGoldLogos,
  StyledSilverLogos,
  StyledSponsorsHeader,
  StyledContactText,
  // StyledTreasureChest,
  StyledMobileLogo,
  StyledSecondaryButtonWrapper,
  StyledArrowWrapper,
  StyledOrangeStarfish,
  StyledRedStarfish,
  StyledGreenStarfish,
  StyledStarfishMobile,
  StyledSpecificSponsorsHeader,
  // StyledOrangeStarfishLevel,
  // StyledRedStarfishLevel,
  // StyledGreenStarfishLevel,
} from './SponsorsSection.styles';
import fish2 from '../../../shared-ui/images/fish2.svg';
import DiamondLogoDesktop from '../../images/diamond-level-logo-desktop.png';
import GoldLogosDesktop from '../../images/gold-level-logos-desktop.png';
import SilverLogosDesktop from '../../images/silver-level-logos-desktop.png';
import DiamondLogoMobile from '../../images/diamond-level-logo-mobile.png';
import GoldLogosMobile from '../../images/gold-level-logos-mobile.png';
import SilverLogosMobile from '../../images/silver-level-logos-mobile.png';
import TreasureChest from '../../images/treasure-chest.svg';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import useMatchMedia from 'react-use-match-media';
import { min } from '../../../shared-ui/lib/responsive';
import Arrow from '../../../shared-ui/components/arrow/Arrow';
import { getLeftOrRight } from '../../lib/utils';
import { SponsorsSectionProps } from '../../lib/types';
import RedStarfish from '../../../shared-ui/images/Red Starfish.svg';
import GreenStarfish from '../../../shared-ui/images/Green Starfish.svg';
import OrangeStarfish from '../../../shared-ui/images/Orange Starfish.svg';
// import OrangeStarfishDesktop from '../../../shared-ui/images/Orange starfish level.svg';
// import RedStarfishDesktop from '../../../shared-ui/images/Red starfish level.svg';
// import GreenStarfishDesktop from '../../../shared-ui/images/Green starfish level.svg';
import MobileOrangeStarfish from '../../../shared-ui/images/OrangeStarfishMobile.svg';


const SponsorsSection: React.FC<SponsorsSectionProps> = ({ isDay }) => {
  const isDesktop = useMatchMedia(min.tabletLg);
  const sponsorLevelsInfo = ['Diamond Level', 'Gold Level', 'Silver Level'];
  const [currLevel, setCurrLevel] = useState(sponsorLevelsInfo[0]);

  function getImage(title: string): string {
    if (title === 'Diamond Level') {
      //return styled diamond logo mobile would return diamondlogomobile + the styled starfish
      return DiamondLogoMobile;
    }
    if (title === 'Gold Level') {
      return GoldLogosMobile;
    }
    return SilverLogosMobile;
  }

  return (
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
          {/* <StyledTreasureChest src={TreasureChest} alt="treasure chest" /> */}
          <div>
          <StyledOrangeStarfish src={OrangeStarfish} alt="orange starfish" />
            <StyledSpecificSponsorsHeader> Diamond Level </StyledSpecificSponsorsHeader>
            <br />
            <StyledDiamondLogo
              src={DiamondLogoDesktop}
              alt="diamond level logo"
            />
          </div>
          <div>
          <StyledSpecificSponsorsHeader> Gold Level </StyledSpecificSponsorsHeader>
            <br />
            <StyledGoldLogos src={GoldLogosDesktop} alt="gold level logos" />
            <StyledRedStarfish src={RedStarfish} alt="red starfish" />
          </div>
          <div>
          <StyledSpecificSponsorsHeader> Silver Level </StyledSpecificSponsorsHeader>
            <br />
            <StyledSilverLogos
              src={SilverLogosDesktop}
              alt="silver level logos"
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
  );
};

export default SponsorsSection;
