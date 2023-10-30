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
  StyledTreasureChest,
  StyledMobileLogo,
  StyledSecondaryButtonWrapper,
  StyledArrowWrapper
} from './SponsorsSection.styles';
import fish2 from '../../../shared-ui/images/fish2.svg'
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

const SponsorsSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tabletLg);
  const sponsorLevelsInfo = ['Diamond Level', 'Gold Level', 'Silver Level'];
  const [currLevel, setCurrLevel] = useState(sponsorLevelsInfo[0]);

  function getImage(title: string): string {
    if (title === 'Diamond Level') {
      return DiamondLogoMobile;
    }
    if (title === 'Gold Level') {
      return GoldLogosMobile;
    }
    return SilverLogosMobile;
  }

  return (
    <StyledSponsorsSectionContainer>
      <StyledContactContainer>
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
      <StyledSponsorsHeader>2023 Sponsors</StyledSponsorsHeader>
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
              <SecondaryButton btnText={currLevel} isClickable={false} />
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
        </>
      )}

      {isDesktop && (
        <>
          <StyledTreasureChest src={TreasureChest} alt="treasure chest" />
          <div>
            <SecondaryButton btnText="Diamond Level" isClickable={false} />
            <br />
            <StyledDiamondLogo
              src={DiamondLogoDesktop}
              alt="diamond level logo"
            />
          </div>
          <div>
            <SecondaryButton btnText="Gold Level" isClickable={false} />
            <br />
            <StyledGoldLogos src={GoldLogosDesktop} alt="gold level logos" />
          </div>
          <div>
            <SecondaryButton btnText="Silver Level" isClickable={false} />
            <br />
            <StyledSilverLogos
              src={SilverLogosDesktop}
              alt="silver level logos"
            />
          </div>
        </>
      )}
    </StyledSponsorsSectionContainer>
  );
};

export default SponsorsSection;
