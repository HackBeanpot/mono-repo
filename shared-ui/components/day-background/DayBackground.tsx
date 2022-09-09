import * as React from 'react';
//import Background from '../../images/day-background.svg';
import StyledDayBackground from './DayBackground.style';


//NEXT STEP, TRY TO PASS IMAGE SRC PROP TO STYLING
// GET A DIFFERENT BACKGROUND DEPENDING ON THE IMAGE .. don't pass it in as a prop lol
//objectFit: 'cover'
const BackgroundImage: React.FC = () => {
  return (
    <>
      <StyledDayBackground />
      {/* <img
        style={{
          objectFit: 'cover',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%'
        }}
        src={Background}
      /> */}
    </>
  );
};

export default BackgroundImage;
