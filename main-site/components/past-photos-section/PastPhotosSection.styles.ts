import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';

const StyledPhotosSection = styled.div`
  padding-top: 10em;
  position: relative;
  @media ${max.tablet} {
    padding-bottom: 5em;
  }
`;

const StyledPhotos = styled.img`
  width: 100vw;
`;

const StyledPastPhotosButton = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  @media ${max.tablet} {
    top: 52%;
  }
  top: 55%;
  left: 50%;
`;

export { StyledPhotosSection, StyledPhotos, StyledPastPhotosButton };
