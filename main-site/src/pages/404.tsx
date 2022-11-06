import * as React from 'react';

import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import '../pageStyles/globals.css';
import { StyledH1, StyledH4, ButtonContainer } from '../page-styles/404.styles';

const NotFoundPage: React.FC = () => {
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
    <div className={getBackgroundClassName()}>
      <StyledH1>
        Uh oh, how did we end <br /> up here?
      </StyledH1>
      <StyledH4>Let's get back to exploring!</StyledH4>
      <ButtonContainer>
        <PrimaryButton btnText="return home" btnLink="/"></PrimaryButton>
      </ButtonContainer>
    </div>
  );
};

export default NotFoundPage;
