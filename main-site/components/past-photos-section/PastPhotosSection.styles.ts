import styled from 'styled-components';

const StyledPhotos = styled.img`
  display: grid;
  position: absolute;
  z-index: 0;
`;

const StyledPastPhotosButton = styled.div`
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export { StyledPhotos, StyledPastPhotosButton };
