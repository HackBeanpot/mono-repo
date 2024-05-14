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

const H2 = styled.h2`
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansRegular};
  font-size: clamp(1.5em, 8.2vw, 3.1em);
  margin: 0;
  letter-spacing: 0.1em;
  @media ${min.tablet} {
    font-size: 2.5em;
  }
`;

const H3 = styled.h3`
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  font-family: ${fonts.nunitoSansRegular};
  font-size: clamp(1.3em, 6.6vw, 2.1em);
  margin: 0;

  @media ${max.tablet} {
    padding: 0;
  }
`;

const H4 = styled.h4`
  font-family: ${fonts.nunitoSansRegular};
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  margin: 0;
  font-size: 1.3em;
  @media ${min.tablet} {
    font-size: 1.5em;
  }
  letter-spacing: 0.1em;
`;

const H5 = styled.h4`
  font-family: ${fonts.nunitoSansSemibold};
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  margin: 0;
  font-size: 1.5em;
  @media ${min.tablet} {
    font-size: 2.5em;
  }
  letter-spacing: 0.1em;
`;

const H6 = styled.h1`
  font-family: ${fonts.berkshireSwash};
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  font-size: clamp(0.5em, 8.5vw, 4.5em);
  letter-spacing: 0.04em;
  margin: 0;
  margin-bottom: 0.2em;
`;

const P = styled.p`
  margin: 0;
  margin-bottom: 1em;
  font-family: ${fonts.nunitoSansRegular};
  font-size: 1.1em;
  line-height: 1.4em;
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  @media ${min.mobile} {
    font-size: 1.3em;
  }
  @media ${min.tablet} {
    font-size: 1.4em;
  }
`;

const P1 = styled.p`
  margin: 0 0.5em 0 0.5em;
  margin-bottom: 1em;
  font-family: ${fonts.nunitoSansLight};
  font-size: 3em;
  line-height: 1.4em;
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  @media ${min.mobile} {
    font-size: 1em;
  }
  @media ${min.tablet} {
    font-size: 2em;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

export { H1, H2, H3, H4, H5, H6, P, P1, fonts, StyledLink };
