import styled from 'styled-components';
import { min } from '../lib/responsive';
import { colors } from './colors';

const fonts = {
  calistogaRegular: 'Calistoga-Regular',
  nunitoSansBold: 'NunitoSans-Bold',
  nunitoSansLight: 'NunitoSans-Light',
  nunitoSansRegular: 'NunitoSans-Regular',
  nunitoSansSemibold: 'NunitoSans-SemiBold'
};

const H1 = styled.h1`
  font-family: ${fonts.calistogaRegular};
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  font-size: clamp(1.5em, 9.5vw, 6.5em);
  letter-spacing: 0.04em;
  margin: 0;
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

const P = styled.p`
  margin: 0;
  font-family: ${fonts.nunitoSansRegular};
  font-size: 1.1em;
  line-height: 1.4em;
  color: ${(props): string => (props.color ? props.color : colors.WHITE)};
  @media ${min.mobile} {
    font-size: 1.2em;
  }
  @media ${min.tablet} {
    font-size: 1.25em;
  }
`;

const StyledLink = styled.a`
   {
    text-decoration: none;
  }
`;

const StyledDropdown = styled.select`
  border-color: ${colors.WHITE};
  background-color: ${colors.BUTTON_DARK_GREEN};
  color: ${colors.WHITE};
  font-family: ${fonts.nunitoSansSemibold};
  border-radius: 0.3em;
  height: 3em;
  padding-left: 0.5em;
  padding-right: 0.5em;

  -webkit-appearance: none;
  appearance: none;
  background-image: url("../GoogleDropdown.png");
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5em) center;
  background-size: 1.5em;

  @media ${min.mobile} {
    font-size: 1.2em;
  }
  @media ${min.tablet} {
    font-size: 1.25em;
  }
`;


export { H1, H2, H3, H4, P, fonts, StyledLink, StyledDropdown };
