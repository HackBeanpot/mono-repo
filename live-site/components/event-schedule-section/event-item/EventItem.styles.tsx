import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H3, P } from '../../../../shared-ui/style/typography';

const StyledEventItemContainer = styled.div`
  margin: 1em;
  border-radius: 2em;
  height: 8em;
  background-color: ${colors.WHITE};
`;

const StyledEventItemLeftSideContainer = styled.div`
  display: flex;
  float: left;

`;

const StyledEventItemArrowContainer = styled.div`
  text-align: right;
  display: block;
  padding-top: -30px;
`;

const StyledEventItemNameLocationContainer = styled.div`
  display: block;
  @media ${max.tablet} {
    padding-top: 1.6em;
  } ;

 

`;

const StyledPinpointLocationContainer = styled.div`
  display: flex;
`;

const StyledEventTimeTopicContainer = styled.div`
  padding: 2em;
`;

const StyledEventItemHeader = styled(H3)`
  padding-left: 2em;
  padding-top: 0.7em;

  @media ${max.tablet} {
    font-size: 1.5em;
    padding: 0;
  } ;



  @media ${max.mobile} {
    font-size: 1em;
  } ;

`;

const StyledEventitemLocation = styled(P)`
  color: ${colors.HEADER_FOOTER_BLUE};
  padding-left: 0.7em;

  @media ${max.tablet} {
    font-size: 1em;
  } ;

  @media ${max.tabletSm} {
    padding-left: 0;
  } ;

  @media ${max.mobile} {
    font-size: 0.7em;
  } ;
`;

const StyledEventItemTime = styled(P)`
  display: flex;
  color: ${colors.BLACK};

  @media ${max.mobile} {
    font-size: 0.7em;
  } ;
`;

const StyledEventItemTopic = styled(P)`
  display: flex;
  color: ${colors.CAMEL_ORANGE};

  @media ${max.mobile} {
    font-size: 0.7em;
  } ;
`;

const StyledPinpoint = styled.img`
  padding-left: 4.5em;
  height: 20%;

  @media ${max.tablet} {
    padding: 0;
  } ;

  @media ${max.mobile} {
    height: 1em;
  } ;
`;

const StyledArrow = styled.img`
  padding-top: 3em;
  padding-right: 3em;
  float: right;


   @media ${max.tablet} {
    padding-top: 3em;
    padding-right: 0.7em;
  } ;

  @media ${max.tabletSm} {
    display: none;
  } ;

 
`;

export {
  StyledEventItemContainer,
  StyledEventItemHeader,
  StyledEventItemTime,
  StyledEventItemTopic,
  StyledEventTimeTopicContainer,
  StyledPinpoint,
  StyledEventitemLocation,
  StyledEventItemNameLocationContainer,
  StyledPinpointLocationContainer,
  StyledArrow,
  StyledEventItemArrowContainer,
  StyledEventItemLeftSideContainer
};
