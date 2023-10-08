import styled from 'styled-components';
import { min, max } from '../lib/responsive';
import { colors } from './colors';

const fonts = {
  berkshireSwash: 'Berkshire-Swash',
  nunitoSansBold: 'NunitoSans-Bold',
  nunitoSansLight: 'NunitoSans-Light',
  nunitoSansRegular: 'NunitoSans-Regular',
  nunitoSansSemibold: 'NunitoSans-SemiBold',
  nunitoRegular: 'Nunito-Regular'
};

const H1 = styled.h1`
  font-family: ${fonts.berkshireSwash};
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  font-size: clamp(3.2em, 10vw, 7.5em);
  letter-spacing: 0.04em;
  margin: 0;
`;

const H11 = styled.h1`
  font-family: ${fonts.berkshireSwash};
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  font-size: clamp(0.5em, 8.5vw, 4.5em);
  letter-spacing: 0.04em;
  margin: 0;
  margin-bottom: 0.2em;
`;

const H2 = styled.h2`
  font-family: ${fonts.nunitoSansRegular};
  font-size: clamp(1.5em, 8.2vw, 3.1em);
  margin: 0;
  @media ${min.tablet} {
    letter-spacing: 0.1em;
  }
`;

const H3 = styled.h3`
  color: ${(props): string => (props.color ? props.color : colors.BLACK)};
  font-family: ${fonts.nunitoSansRegular};
  font-size: clamp(1.3em, 6.6vw, 2.1em);
  margin: 0;

  @media ${max.tablet} {
    padding: 0;
  }
`;

const H4 = styled.h4`
  font-family: ${fonts.nunitoSansRegular};
  color: ${(props): string =>
    props.color ? props.color : colors.BUTTON_GREEN};
  margin: 0;
  font-size: 1.3em;
  @media ${min.tablet} {
    font-size: 1.5em;
  }
  letter-spacing: 0.1em;
`;

const H5 = styled.h4`
  font-family: ${fonts.nunitoSansSemibold};
  color: ${(props): string =>
    props.color ? props.color : colors.WHITE};
  margin: 0;
  font-size: 1.5em;
  @media ${min.tablet} {
    font-size: 2.5em;
  }
  letter-spacing: 0.1em;
`;

const P = styled.p`
  margin: 0;
  margin-bottom: 1em;
  font-family: ${fonts.nunitoSansRegular};
  font-size: 1.1em;
  line-height: 1.4em;
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  @media ${min.mobile} {
    font-size: 0.8em;
  }
  @media ${min.tablet} {
    font-size: 1.4em;
  }
`;

const StyledLink = styled.a`
   {
    text-decoration: none;
  }
`;

export { H1, H11, H2, H3, H4, H5, P, fonts, StyledLink };
