import styled from 'styled-components';
import { min } from '../../lib/responsive';

const StyledBackgroundImage = styled.image`

  color: blue;
  @media ${min.tablet} {
    color: pink;
  }
`;

export default StyledBackgroundImage;
