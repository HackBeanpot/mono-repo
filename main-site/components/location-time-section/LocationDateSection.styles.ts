import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
import { H1, P } from '../../../shared-ui/style/typography';

const StyledLocationDateSectionContainer = styled.div``;

const StyledDateHeader = styled(H1)`
  color: ${colors.TEXT_BROWN};

`;


const StyledLocationText = styled(P)`
  color: ${colors.TEXT_BROWN};

`;

export { StyledLocationDateSectionContainer, StyledDateHeader,StyledLocationText };
