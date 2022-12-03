import * as React from 'react';

import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { min } from '../../../shared-ui/lib/responsive';
import wave from '../../../shared-ui/images/wave.png';
import penguin from '../../../shared-ui/images/penguin.png';
import boat from '../../../shared-ui/images/boat.png';
import useMatchMedia from 'react-use-match-media';
import '../../style/globals.css';
import {
  StyledH1,
  StyledH4,
  ButtonContainer,
  StyledWave1,
  StyledWave2,
  StyledWave3,
  StyledWave4,
  WaveContainer,
  Penguin,
  Boat
} from './404.styles';
import {
  wave1Animations,
  wave2Animations,
  wave3Animations,
  wave4Animations
} from './404.animations';
import { StyledPageContainer } from '../../styled-components/Background.styles';

const NotFound: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const getBackgroundClassName = (): string => {
    if (isDesktop) {
      return 'error-background-desktop';
    }
    return 'error-background-mobile';
  };
  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <StyledPageContainer>
      <div className={getBackgroundClassName()}>
        <StyledH1>
          Uh oh, how did we end <br /> up here?
        </StyledH1>
        <WaveContainer>
          <StyledWave1
            src={wave}
            animate="animate"
            variants={wave1Animations}
          />
          <StyledWave2
            src={wave}
            animate="animate"
            variants={wave2Animations}
          />
          <StyledWave3
            src={wave}
            animate="animate"
            variants={wave3Animations}
          />
          <StyledWave4
            src={wave}
            animate="animate"
            variants={wave4Animations}
          />
        </WaveContainer>
        <Penguin src={penguin} />
        <Boat src={boat} />
        <StyledH4>Let's get back to exploring!</StyledH4>
        <ButtonContainer>
          <PrimaryButton btnText="return home" btnLink="/"></PrimaryButton>
        </ButtonContainer>
      </div>
    </StyledPageContainer>
  );
};

export default NotFound;
