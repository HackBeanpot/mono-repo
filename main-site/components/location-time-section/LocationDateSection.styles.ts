import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { StyledLocationSectionProps } from '../../../shared-ui/lib/types';
import { colors } from '../../../shared-ui/style/colors';
import { H1, P } from '../../../shared-ui/style/typography';

const StyledLocationDateSectionContainer = styled.div`
    padding-bottom: 1.5em;
`;

const StyledDateHeader = styled(H1)<StyledLocationSectionProps>`
  color: ${(props): string =>
    props.isDay ? colors.TEXT_BROWN : colors.YELLOW};
  font-size: 3em;
  @media ${max.tablet} {
    font-size: 1.8em;
  }

`;


const StyledLocationText = styled(P)<StyledLocationSectionProps>`
  color:   ${(props): string =>
    props.isDay ? colors.TEXT_BROWN : colors.YELLOW};

  @media ${max.tablet} {
    font-size: 1em;
  }

`;

export { StyledLocationDateSectionContainer, StyledDateHeader,StyledLocationText };
