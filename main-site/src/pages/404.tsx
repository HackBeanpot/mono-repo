import * as React from 'react';
import styled from 'styled-components';
import { fonts, H1, H4 } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';
import { max, min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import '../page-styles/globals.css';

// const StyledBackgrounds = styled.img`
//   position: absolute;
//   width: 100%;
//   z-index: -1;
// `;


const StyledH1 = styled(H1)`
  padding-top: 1em;
  padding-left: 2em;
  font-size: 5em;
  color: ${colors.HEADER_FOOTER_BLUE};
  @media ${max.tabletLg} {
    font-size: 3em;
  }
  @media ${max.tablet} {
    padding-top: 6em;
    padding-left: 1em;
    font-size: 2.5em;
  }
  @media ${max.tabletSm} {
    font-size: 2em;
  }
`;

const StyledH4 = styled(H4)`
  text-align: right;
  padding-top: 3em;
  padding-right: 9em;
  font-size: 1.6em;
  font-family: ${fonts.nunitoSansSemibold};
  color: ${colors.HEADER_FOOTER_BLUE};
  @media ${max.tabletLg} {
    padding-top: 2em;
    padding-right: 6em;
  }
  @media ${max.tablet} {
    padding-right: 2em;
  }
  @media ${max.tabletSm} {
    padding-top: 7em;
    font-size: 1em;
  }
`;

const ButtonContainer = styled.div`
padding-top: 2%;
float: right;
padding-right: 14em;
@media ${max.tabletLg} {
  padding-top: 3em;
  padding-right: 10em;
}
@media ${max.tablet} {
  padding-top: 2em;
  padding-right: 5em;
}
`;

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
    <>
      <div className={getBackgroundClassName()}>
      <StyledH1>
        Uh oh, how did we end <br /> up here?
      </StyledH1>
      <StyledH4>Let's get back to exploring!</StyledH4>
      <ButtonContainer>
      <PrimaryButton btnText = 'return home' btnLink='/'></PrimaryButton>
      </ButtonContainer>
      </div>
        

    </>
  );
};

export default NotFoundPage;


