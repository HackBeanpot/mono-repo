import * as React from 'react';
import Background from '../../images/background.svg';
//import StyledBackgroundImage from './BackgroundImage.style';
//NEXT STEP, TRY TO PASS IMAGE SRC PROP TO STYLING
//objectFit: 'cover'
const BackgroundImage: React.FC = () => {
  return (
    <>
      {/* <StyledBackgroundImage src={Background} /> */}
      <img
        style={{
          objectFit: 'cover',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%'
        }}
        src={Background}
      />
    </>
  );
};

export default BackgroundImage;
