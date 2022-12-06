import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';
import { fonts, H3 } from '../../../shared-ui/style/typography';

const StyledResourcesSection = styled.div`
   {
    padding-top: 10em;
  }
`;

const StyledHeader = styled(H3)`
   {
    font-family: ${fonts.nunitoSansSemibold};
    padding-bottom: 2em;
    padding-left: 2.4em;
    @media ${max.tablet} {
      padding-left: 1em;
      padding-bottom: 1em;
    }
  }
`;

const BoxesContainer = styled.div`
   {
    display: flex;
    justify-content: center;

    @media ${max.tablet} {
      flex-wrap: wrap;
    }
  }
`;

export { StyledResourcesSection, StyledHeader, BoxesContainer };
