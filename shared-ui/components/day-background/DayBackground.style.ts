import styled from 'styled-components';
// import { min } from '../../lib/responsive';
import background from '../../images/day-background.svg';
const StyledDayBackground = styled.body`
  height: 200vh;
  width: 100vw;
  background-size: cover;
  background-image: url(${background});
`;

export default StyledDayBackground;

// @media ${min.tablet} {
//   color: pink;
// }

// 100 vh for width height

//   width: 100vw;
// height: 100vh;

// background-color: green;
// backgroundSize: cover;
// backgroundImage: url(${'../../images/day-background.svg'});
