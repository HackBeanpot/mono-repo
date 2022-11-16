import React from 'react';
import {
  StyledDesertShopSectionContainer,
  StyledDesertShopSectionSubHeader
} from './DesertShopSection.styles';
import ShopCard from './ShopCard';

// 1. Add forward ref to PrimaryButton component
// 2. Give animation capablities to PrimaryButton
// 3. scale on hover
// 4. scale on tap
// 5. Make cards appear when you scroll to them with whielInView

const DesertShopSection: React.FC = () => {
  return (
    <>
      <StyledDesertShopSectionSubHeader>
      Hover | Tap | WhileInView
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
