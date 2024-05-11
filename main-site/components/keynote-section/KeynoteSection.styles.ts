import styled from '@emotion/styled';
import { H2, H3, P } from '../../../shared-ui/style/typography';
import { max, min } from '../../../shared-ui/lib/responsive';

const StyledKeynoteSectionContainer = styled.div`
  padding-bottom: 10em;
  position: relative;
  overflow: hidden;
  display: grid;
  height: 100%;
  max-height: 100%;
  margin: 0 8vw;

  @media ${min.tablet} {
    grid-template-rows: repeat(3, auto) 3fr;
    grid-template-columns: 1fr 5fr 3fr;
    grid-template-areas:
      'empty1 title empty2'
      'empty3 name name'
      'image header header'
      'image blurb blurb';
  }

  @media ${max.tablet} {
    grid-template-rows: repeat(5, auto);
    grid-template-areas: 
      'title'
      'image'
      'name'
      'header'
      'blurb';
  }
`;

const StyledTitle = styled(H2)`
  color: white;
  grid-area: title;
  text-align: center;
  text-wrap: nowrap;
  @media ${min.tablet} {
    margin-left: 5vw;
    text-align: left;
  }
  @media ${min.tabletLg} {
    margin-left: 5vw;
    text-align: left;
  }
  @media ${min.desktop} {
    text-align: left;
    margin-left: 10vw;
  }
`;

const StyledSpeakerImage = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
  grid-area: image;
  justify-self: center;
  border-radius: 50%;
  width: 45vw;
  margin: 5vw 0;
  @media ${min.tablet} {
    width: 35vw;
  }
  @media ${min.tabletLg} {
    width: 30vw;
  }
  @media ${min.desktop} {
    width: 21vw;
  }
`;

const StyledItemTitle = styled(H3)`
  grid-area: name;
  font-size: 1.7rem;
  margin-top: 1vw;
  
  text-align: center;
  @media ${min.tablet} {
    margin-left: 5vw;
    text-align: left;
  }
  @media ${min.tabletLg} {
    margin-left: 5vw;
    text-align: left;
  }
  @media ${min.desktop} {
    text-align: left;
    margin-left: 10vw;
  }
`;

const StyledTitleDescription = styled(P)`
  grid-area: header;
  font-size: 1rem;
  font-style: italic;
  margin: 2vw 0 2vw 5vw;
  text-align: center;
  @media ${min.tablet} {
    m
    font-size: 1.1rem;
    text-align: left;
  }
  @media ${min.tabletLg} {
   
    font-size: 1.3rem;
    text-align: left;
  }
  @media ${min.desktop} {
    text-align: left;
    font-size: 1.5rem;
    margin: 2vw 0vw 2vw 10vw;
  }
`;

const StyledItemDescription = styled(P)`
  grid-area: blurb;
  
  font-size: 1rem;
  text-align: left;
  @media ${min.tablet} {
    margin-left: 5vw;
    text-align: left;
  }
  @media ${min.tabletLg} {
    margin-left: 5vw;
    text-align: left;
  }
  @media ${min.desktop} {
    font-size: 1.2rem;
    margin-left: 10vw;
  }
`;

export {
  StyledKeynoteSectionContainer,
  StyledTitle,
  StyledItemDescription,
  StyledSpeakerImage,
  StyledTitleDescription,
  StyledItemTitle
};
