import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';

const StyledPhotosSection = styled.div`
  padding: 4em 0;
  position: relative;
  @media ${max.tablet} {
    padding 6em 0;
  }
`;

const StyledPhotos = styled.img`
  width: 100vw;
`;

const StyledPastPhotosButton = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export { StyledPhotosSection, StyledPhotos, StyledPastPhotosButton };
