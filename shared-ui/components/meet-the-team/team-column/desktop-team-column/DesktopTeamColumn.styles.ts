import styled from 'styled-components';
import { max } from '../../../../lib/responsive';
import { fonts } from '../../../../../shared-ui/style/typography'

const StyledTeamColumn = styled.div`
  flex-direction: column;
  width: 14em;
  @media ${max.desktop} {
    width: 11em;
  }
  @media ${max.tabletLg} {
    width: clamp(9.5em, 20vw, 11em);
  }
`;

const StyledHeadshot = styled.img`
  padding-top: 2em;
  width: 9em;
  @media ${max.tabletLg} {
    width: 6.5em;
    margin: 0;
  }
  @media ${max.tablet} {
    padding-top: 3em;
    width: 6em;
    margin: 0.5em;
  }
  @media ${max.tabletSm} {
    width: 6.2em;
    margin: 0.9em;
  }
`;

const StyledLinkedIn = styled.a`
width: 14em;
color: white;
display: flex
align-items: center; 
justify-content: center;
text-decoration: none;
font-family: ${fonts.nunitoSansRegular};
margin-top: 0.5em;

img {
  width: 1.0em;
  height: 1.0em;
  margin-right: 0.4em;
  position: relative;
  top: 0.1em;
}

@media ${max.desktop} {
  width: 11em;
}
@media ${max.tabletLg} {
  width: clamp(9.5em, 20vw, 11em);
  margin: 0;
}
@media ${max.tablet} {
  padding-top: 3em;
  width: 6em;
  margin: 0.5em;
}
@media ${max.tabletSm} {
  width: 6.2em;
  margin: 0.9em;
}
`

export { StyledTeamColumn, StyledHeadshot, StyledLinkedIn };
