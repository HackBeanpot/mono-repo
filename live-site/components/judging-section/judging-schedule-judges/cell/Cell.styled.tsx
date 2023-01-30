import styled from 'styled-components';
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
`;

export {
    StyledCell
}