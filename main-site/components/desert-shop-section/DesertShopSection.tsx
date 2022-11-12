import React from 'react';
import {
  StyledDesertShopSectionContainer,
  StyledDesertShopSectionHeader,
  StyledDesertShopSectionSubHeader
} from './DesertShopSection.styles';
import ShopCard from './ShopCard';

const DesertShopSection: React.FC = () => {
  return (
    <>
      <StyledDesertShopSectionHeader>
        UI Animations
      </StyledDesertShopSectionHeader>
      <StyledDesertShopSectionSubHeader>
      Hover | Tap | Stagger
      </StyledDesertShopSectionSubHeader>
      <StyledDesertShopSectionContainer>
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </StyledDesertShopSectionContainer>
    </>
  );
};

export default DesertShopSection;
