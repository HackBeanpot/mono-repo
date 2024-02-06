import styled from "styled-components";
import { max } from "../../../../shared-ui/lib/responsive";

const StyledStarfishContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  width: 100%;
  position: relative;
`;

const StyledStarfishOne = styled.img`
    width: 7%;
    margin-right: 20%; 
    margin-bottom: -10%;
    @media ${max.tabletSm} {
        width: 15%;
        margin-right: 25%;
      }
`;

const StyledStarfishTwo = styled.img`
    width: 7%;
    margin-right: 8%; 
    margin-bottom: -15%;
    @media ${max.tabletSm} {
        margin-right: 20%;
        width: 15%;
        margin-bottom: -5%;
      }
`;

const StyledStarfishThree = styled.img`
    width: 7%;
    margin-right: 20%; 
    margin-bottom: -3%;
    @media ${max.tabletSm} {
        margin-right: 25%;
        width: 15%;
        margin-bottom: -13%;
      }
`;

const StyledStarfishFour = styled.img`
    width: 7%;
    margin-right: 10%;
    margin-bottom: -13%;
    @media ${max.tabletSm} {
        display: none;
      }
`;

const StyledStarfishFive = styled.img`
    width: 7%;
    margin-bottom: -6%;
    @media ${max.tabletSm} {
        display: none
    }
`;

export {
  StyledStarfishOne,
  StyledStarfishTwo,
  StyledStarfishThree,
  StyledStarfishFour,
  StyledStarfishFive,
  StyledStarfishContainer
};
