import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { H1, P } from '../../../shared-ui/style/typography';

const StyledLocationDateSectionContainer = styled.div`
    padding-bottom: 1.5em;


`;

const StyledDateHeader = styled(H1)`
  color: ${colors.TEXT_BROWN};
  font-size: 3em;

`;


const StyledLocationText = styled(P)`
  color: ${colors.TEXT_BROWN};
`;

export { StyledLocationDateSectionContainer, StyledDateHeader,StyledLocationText };
