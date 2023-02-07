import React, { useState } from 'react';
import SecondaryButton from '../../../shared-ui/components/secondary-button/SecondaryButton';
import {
  StyledSponsorsSectionContainer,
  StyledDiamondLogo,
  StyledGoldLogos,
  StyledSilverLogos,
  StyledSponsorsHeader,
  StyledContactText,
  StyledTreasureChest,
  StyledMobileLogo
} from './SponsorsSection.styles';
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
import { sponsorLevels } from '../../lib/types';
import { SponsorInfo } from '../../../live-site/lib/types';
import Arrow from '../../../shared-ui/components/arrow/Arrow';

const SponsorsSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tabletLg);
  const sponsorLevelsInfo = [
    {
      level: 'Diamond Level',
      image: DiamondLogoMobile
    },
    {
      level: 'Gold Level',
      image: GoldLogosMobile
    },
    {
      level: 'Silver Level',
      image: SilverLogosMobile
    }
  ];
  const [currLevel, setCurrLevel] = useState(sponsorLevelsInfo[0]);

  return (
    <StyledSponsorsSectionContainer>
      <StyledSponsorsHeader>2023 Sponsors</StyledSponsorsHeader>
      {!isDesktop && (
        <>
          <Arrow />
          <SecondaryButton btnText={currLevel.level} isClickable={false} />
          <Arrow left={false} />
          <br />
          <StyledMobileLogo src={currLevel.image} level={currLevel.level} />
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
      <StyledContactText>
        Interested in joining the HackBeanpot desert exploration? <br /> <br />{' '}
        Reach out to us at team@hackbeanpot.com or check out our sponsorship
        packet!
      </StyledContactText>
      <PrimaryButton
        btnText="View packet"
        newTab
        btnLink="https://drive.google.com/file/d/1J5JWo_ST-0UnxBLkK-eGDnc9lX3tCS2D/view"
      />
    </StyledSponsorsSectionContainer>
  );
};

export default SponsorsSection;
