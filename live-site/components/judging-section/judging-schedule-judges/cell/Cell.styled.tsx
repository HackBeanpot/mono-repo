import styled from 'styled-components';
import { max } from '../../../../../shared-ui/lib/responsive';
import { colors } from '../../../../../shared-ui/style/colors';
import { fonts } from '../../../../../shared-ui/style/typography';

const StyledCell = styled.div`
background-color: ${colors.WHITE};
width: 4.5em;
height: 1.5em;
border: 0.02em solid ${colors.TEXT_BROWN};
text-align: center;
font-family: ${fonts.nunitoSansRegular};
font-size: 1.8em;
padding: 0.3em;

@media ${max.tabletLg} {
    width: 3em;
  }
@media ${max.tablet} {
    width: 2em;
}
@media ${max.tabletSm} {
    width: 1em;
}


`;

export {
    StyledCell
}