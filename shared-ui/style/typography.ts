import styled from 'styled-components';
import { min } from '../lib/responsive';
import { colors } from './colors';

// desert exploration
const H1 = styled.h1`
  font-family: 'NunitoSans-SemiBold';
`;

// Hackbeanpot is about...
const H2 = styled.h2``;

// Explore the desert with Hackbeanpot
const H3 = styled.h3``;

// Explore the desert with Hackbeanpot
const H4 = styled.h4`
  color: ${(props): string =>
    props.color ? props.color : colors.BUTTON_GREEN};
`;

export { H1 };
