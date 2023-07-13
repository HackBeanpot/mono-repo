import styled from 'styled-components';
import { colors } from '../../../../shared-ui/style/colors';
import { P } from '../../../../shared-ui/style/typography';
import { min, max } from '../../../../shared-ui/lib/responsive';

const StyledTextContainer = styled.div`
  padding: 3em;
  border-radius: 3em;
  margin-top: 5em;
  @media ${min.tablet} {
    width: 34em;
    background-color: ${colors.TEXT_BOX};
    margin-top: 0;
  }
  @media ${min.tabletLg} {
    width: 38em;
  }
`;

const StyledWhySponsorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 8em;
  position: relative;
  @media ${min.mobile} {
    margin-top: 14em;
  }
  @media ${min.tabletSm} {
    margin-top: 24em;
  }
  @media ${min.tablet} {
    margin-top: 4em;
  }
  @media ${min.tabletLg} {
    margin-top: 10em;
  }
  @media ${min.desktop} {
    margin-top: 23em;
  }
`;

const StyledParagraph = styled(P)`
  padding: 1.5em 0;
`;

export {
  StyledTextContainer,
  StyledWhySponsorContainer,
  StyledParagraph,
};
