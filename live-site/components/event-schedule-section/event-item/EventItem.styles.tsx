import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { H3, P } from '../../../../shared-ui/style/typography';

const StyledEventItemContainer = styled.div`
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  border-radius: 2em;
  height: 8em;
  background-color: ${colors.WHITE};
  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    height: 15em;
  } ;
`;

const StyledEventItemLeftSideContainer = styled.div`
  display: flex;
  float: left;

  @media ${max.tabletLg} {
    padding-left: 2em;
  }

  @media ${max.tablet} {
    display: block;
  }

  @media ${max.tabletXs} {
    padding-left: 0.5em;
  } ;
`;

const StyledEventItemNameLocationContainer = styled.div`
  display: block;

  @media ${max.tabletLg} {
    padding-top: 0;
  }

  @media ${max.mobile} {
    padding-left: 1em;
  } ;
`;

const StyledPinpointLocationContainer = styled.div`
  display: flex;
`;

const StyledEventTimeTopicContainer = styled.div`
  padding: 2em;

  @media ${max.tabletLg} {
    padding-left: 0;
  }

  @media ${max.tablet} {
    display: flex;
    padding-right: 0;
    padding-bottom: 0;
  }

  @media ${max.mobile} {
    display: flex;
    padding-bottom: 0.5em;
  } ;
`;

const StyledEventItemHeader = styled(H3)`
  padding-left: 2em;
  padding-top: 1em;
  font-size: 1.7em;

  @media ${max.tabletLg} {
    font-size: 1.4em;
    padding-top: 1.5em;
    padding-left: 1em;
  }

  @media ${max.tablet} {
    font-size: 1.2em;
    padding: 0;
  } ;
`;

const StyledEventitemLocation = styled(P)`
  color: ${colors.HEADER_FOOTER_BLUE};
  padding-left: 0.7em;

  @media ${max.tabletLg} {
    font-size: 1em;
    padding-left: 0.5em;
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
  } ;
`;

const StyledPinpoint = styled.img`
  padding-left: 3.5em;
  height: 20%;

  @media ${max.tabletLg} {
    padding-left: 1.2em;
  }

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
    padding-right: 2em;
  }
`;

const StyledTagsContainer = styled.div`
  display: flex;
  float: right;
  padding-top: 3em;
  gap: 0.6em;
  padding-right: 1em;
  @media (max-width: 1040px) {
    gap: 0.3em;
  }
  @media (max-width: 890px) {
    padding-top: 2.8em;
    flex-direction: column;
  }
  @media ${max.tablet} {
    flex-direction: row;
  }
  @media (max-width: 460px) {
    flex-direction: column;
    align-self: start;
    padding-left: 0.5em;
    padding-top: 1em;
  } ;
`;

const StyledTag = styled.div`
  background-color: white;
  border-color: blue;
  border-style: solid;
  border-radius: 2em;
  height: 2em;
`;

const StyledTagText = styled(P)`
  color: blue;
  text-align: center;
  margin-top: auto;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.1em;
  @media (max-width: 1335px) {
    font-size: 0.9em;
    padding-top: 0.4em;
  }
  @media (max-width: 1200px) {
    font-size: 0.7em;
    padding-top: 0.7em;
  }
  @media (max-width: 1120px) {
    font-size: 0.2em;
    padding-top: 4.2em;
  }
  @media ${max.tablet} {
    font-size: 0.5em;
    padding-top: 1.33em;
  }
  @media (max-width: 471px) {
    font-size: 0.32em;
  }
  @media (max-width: 460px) {
    font-size: 0.9em;
    padding-top: 0.4em;
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
  StyledEventItemLeftSideContainer,
  StyledTag,
  StyledTagsContainer,
  StyledTagText
};
