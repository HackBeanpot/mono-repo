import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';

const StyledPhotosSection = styled.div`
  padding: 4em 0;
  @media ${max.tablet} {
    padding 6em 0;
  }
`;

const StyledPhotos = styled.img`
  display: grid;
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
`;

const StyledPastPhotosButton = styled.div`
  align-items: center;
  position: absolute
  top: 50%;
  left: 50%;
  justify-content: center;
`;

export { StyledPhotosSection, StyledPhotos, StyledPastPhotosButton };
