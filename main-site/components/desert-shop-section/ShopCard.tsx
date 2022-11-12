import React from 'react';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import cactusShop from '../../../shared-ui/images/cactus-shop.png';

import {
  StyledShopCard,
  StyledShopCardImage,
  StyledShopCardName
} from './DesertShopSection.styles';

const ShopCard: React.FC = () => {
  return (
    <StyledShopCard>
      <StyledShopCardImage src={cactusShop}></StyledShopCardImage>

      <StyledShopCardName>Rare Cactus</StyledShopCardName>
      <PrimaryButton
        btnText={'Add to Cart'}
        btnLink={
          'https://www.amazon.com/Koicaxy-Cactus-Bedroom-Living-Holiday/dp/B07GSZLDNT/ref=sr_1_6?crid=OZEO97IB36KQ&keywords=cactus&qid=1668281288&sprefix=cactus%2Caps%2C111&sr=8-6'}
        newTab= {true}
      />
    </StyledShopCard>
  );
};

export default ShopCard;
