import styled from 'styled-components';
import { min } from '../../lib/responsive';
import background from '../../images/day-background.svg';
const StyledDayBackground = styled.div`
  height: 2000vh; // how to make dynamic
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

// background-position: left top, center top;
// background-repeat: no-repeat;

// background-size:cover;
// background-position:center center;
// background-attachment:fixed;
// position: fixed;
// top: 0;
// right: 10;
// @media ${min.tablet} {
//   color: pink;
// }

// 100 vh for width height

//   width: 100vw;
// height: 100vh;

// background-color: green;
// backgroundSize: cover;
// backgroundImage: url(${'../../images/day-background.svg'});
