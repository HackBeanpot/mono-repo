import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H3, P } from '../../../../shared-ui/style/typography';

const StyledEventItemMobileContainer = styled.div`
  @media ${max.tablet} {
    display: flex;
  } ;
`;
const StyledEventItemContainer = styled.div`
  margin-left: 1em;
  margin-right: 2em;
  margin-top: 1em;
  border-radius: 2em;
  height: 8em;
  background-color: ${colors.WHITE};
`;

const StyledEventItemLeftSideContainer = styled.div`
  display: flex;
  float: left;

  @media ${max.tablet} {
    display: block;
  } ;
`;

const StyledEventItemArrowContainer = styled.div`
  text-align: right;
  display: block;
`;

const StyledEventItemNameLocationContainer = styled.div`
  display: block;

  @media ${max.tabletLg} {
    padding-top: 0em;
    padding-left: 1em;
  }

  @media ${max.tablet} {
    padding-top: 0;
  }

  @media ${max.mobile} {
    padding-top: 0;
    padding-left: 1em;
  } ;
`;

const StyledPinpointLocationContainer = styled.div`
  display: flex;
`;

const StyledEventTimeTopicContainer = styled.div`
  padding: 2em;

  @media ${max.tablet} {
    display: flex;
    padding-left: 1em;
    padding-right: 0;
    padding-bottom: 0;
  }

  @media ${max.tabletXs} {
    padding-left: 1em;
  }

  @media ${max.mobile} {
    display: flex;
    padding-left: 1em;
    padding-right: 0;
    padding-bottom: 0.5em;
  } ;
`;

const StyledEventItemHeader = styled(H3)`
  padding-left: 2em;
  padding-top: 1em;
  font-size: 1.7em;

  @media ${max.tablet} {
    font-size: 1.2em;
    padding: 0;
  } ;
`;

const StyledEventitemLocation = styled(P)`
  color: ${colors.HEADER_FOOTER_BLUE};
  padding-left: 0.7em;

  @media ${max.tablet} {
    font-size: 1em;
  }

  @media ${max.tabletSm} {
    padding-left: 0;
  }

  @media ${max.mobile} {
    font-size: 0.7em;
    padding-left: 0.5em;
  } ;
`;

const StyledEventItemTime = styled(P)`
  color: ${colors.BLACK};

  @media ${max.tablet} {
    font-size: 1em;
   

  }

  @media ${max.mobile} {
    font-size: 0.8em;
    display: flex;
  } ;
`;

const StyledEventItemTopic = styled(P)`
  color: ${colors.CAMEL_ORANGE};

  @media ${max.tablet} {
    font-size: 0.8em;
    padding-left: 0.5em;
  }

  @media ${max.mobile} {
    font-size: 0.7em;
    padding-left: 0.5em;
  } ;
`;

const StyledPinpoint = styled.img`
  padding-left: 3.5em;
  height: 20%;

  @media ${max.tablet} {
    padding: 0;
    height: 1.5em;
    padding-right: 0.5em;
  }

  @media ${max.mobile} {
    height: 1em;
  } ;
`;

const StyledArrow = styled.img`
  padding-top: 3em;
  padding-right: 3em;
  float: right;

  @media ${max.tabletLg} {
    padding-top: 3em;
    padding-right: 0.7em;
    width: 2em;
  }

  @media ${max.tablet} {
  }

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
  StyledEventItemLeftSideContainer,
  StyledEventItemMobileContainer
};
