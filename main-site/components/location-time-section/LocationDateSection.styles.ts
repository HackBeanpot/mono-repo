import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { H1, P } from '../../../shared-ui/style/typography';

const StyledLocationDateSectionContainer = styled.div`
    padding-top: 1em;
    padding-bottom: 1em;


`;

const StyledDateHeader = styled(H1)`
  color: ${colors.TEXT_BROWN};
  font-size: 4em;

`;


const StyledLocationText = styled(P)`
  color: ${colors.TEXT_BROWN};
`;

export { StyledLocationDateSectionContainer, StyledDateHeader,StyledLocationText };
