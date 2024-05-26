import styled from '@emotion/styled';
import { max, min } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';

const StyledStatsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 5em;
  margin: 1em;
  @media ${min.desktop} {
    padding-top: 10em;
  }
`;

const StyledCenterImage = styled.img`
  align-self: center;
  width: 100%;
  object-fit:cover;
`;

const StyledImageContainer = styled.div`
  background-color: ${colors.DARK_BLUE};
  padding: 3em;
  padding-left: 8em;
  padding-right: 8em;
  border-radius: 2em;
  margin-top: 2em;
  @media ${max.tabletSm} {
    border-radius: 0em;
    width: 100%;
  }
`;

export {
    StyledStatsContainer,
    StyledCenterImage,
    StyledImageContainer
}