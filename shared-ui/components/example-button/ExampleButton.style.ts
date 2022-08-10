import styled from 'styled-components';
import { min } from '../../lib/responsive';

const StyledExampleButton = styled.button`
  color: blue;
  @media ${min.tablet} {
    color: pink;
  }
`;

export { StyledExampleButton };
