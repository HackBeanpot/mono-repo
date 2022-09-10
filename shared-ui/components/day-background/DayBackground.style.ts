import styled from 'styled-components';
import { min } from '../../lib/responsive';
import background from '../../images/day-background.svg';
const StyledDayBackground = styled.div`
  height: 1000vh;
  width: 100vw;
  background-size: cover;
  background-image: url(${background});
  position: absolute;
  top: 0;
  left: 0;
  // @media ${min.mobile} {
  //   width: 100vw;
  // }
`;

export default StyledDayBackground;
