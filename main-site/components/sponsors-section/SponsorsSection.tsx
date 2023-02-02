import React from 'react';
import SecondaryButton from '../../../shared-ui/components/secondary-button/SecondaryButton';
import {
  StyledSponsorsSectionContainer,
  StyledDiamondLogo,
  StyledGoldLogos,
  StyledSilverLogos,
  StyledSponsorsHeader,
  StyledContactText,
  StyledTreasureChest
} from './SponsorsSection.styles';
import DiamondLogoDesktop from '../../images/diamond-level-logo-desktop.png';
import GoldLogosDesktop from '../../images/gold-level-logos-desktop.png';
import SilverLogosDesktop from '../../images/silver-level-logos-desktop.png';
import TreasureChest from '../../images/treasure-chest.svg';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';

const SponsorsSection: React.FC = () => {
  return (
    <StyledSponsorsSectionContainer>
      <StyledTreasureChest src={TreasureChest} alt="treasure chest" />
      <StyledSponsorsHeader>2023 Sponsors</StyledSponsorsHeader>
      <div>
        <SecondaryButton btnText="Diamond Level" isClickable={false} />
        <br />
        <StyledDiamondLogo src={DiamondLogoDesktop} alt="diamond level logo" />
      </div>
      <div>
        <SecondaryButton btnText="Gold Level" isClickable={false} />
        <br />
        <StyledGoldLogos src={GoldLogosDesktop} alt="gold level logos" />
      </div>
      <div>
        <SecondaryButton btnText="Silver Level" isClickable={false} />
        <br />
        <StyledSilverLogos src={SilverLogosDesktop} alt="silver level logos" />
      </div>
      <StyledContactText>
        Interested in joining the HackBeanpot universe? <br /> <br /> Reach out
        to us at team@hackbeanpot.com or check out our sponsorship packet!
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
