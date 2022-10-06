import styled from 'styled-components';
import { max } from '../../../shared-ui/lib/responsive';

const StyledPhotosSection = styled.div`
  padding: 4em 0;
  @media ${max.tablet} {
    padding 6em 0;
  }
`;

const StyledPhotos = styled.img`
  position: absolute;
  width: 100vw;
`;

const StyledPastPhotosButton = styled.div`
  align-items: center;
  position: absolute;
  left: 50vw;
  margin: auto;
  justify-content: center;
  display: absolute;
`;

export { StyledPhotosSection, StyledPhotos, StyledPastPhotosButton };
