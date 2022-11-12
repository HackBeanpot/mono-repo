import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { colors } from '../../../shared-ui/style/colors';
import { H2, H4 } from '../../../shared-ui/style/typography';

const StyledDesertShopSectionContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 5em;
`;

const StyledShopCard = styled.div`
  text-align: center;
  background-color: ${colors.TEXT_BOX};
  border-radius: 2em;
  width: 15em;
  padding: 2em;
`;

const StyledShopCardImage = styled.img`
  text-align: center;
  object-fit: cover;
  text-align: center;
  width: 15em;
  margin-bottom: 1em;
`;

const StyledShopCardName = styled(H4)`
  text-align: center;
  margin-bottom: 1em;
`;

const StyledDesertShopSectionHeader = styled(H2)`
  color: ${colors.BLACK};
  padding-top: 4em;
  padding-bottom: 0.5em;
  text-align: center;

  @media ${max.tablet} {
    padding-bottom: -10em;
  }
`;

const StyledDesertShopSectionSubHeader = styled(H2)`
  color: ${colors.WHITE};
  margin-top:2em;
  padding-left: 1em;
  @media ${max.tablet} {
    padding-bottom: -10em;
  }
`;

export {
  StyledDesertShopSectionContainer,
  StyledShopCard,
  StyledShopCardImage,
  StyledShopCardName,
  StyledDesertShopSectionHeader,
  StyledDesertShopSectionSubHeader
};
