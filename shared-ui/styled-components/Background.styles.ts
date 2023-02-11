import styled from 'styled-components';

const StyledBackgrounds = styled.img`
  width: 100%;
  height: 150%;
  position: absolute;
  overflow-x: hidden;
  z-index: -1;
  object-fit: cover;
`;

const StyledPageContainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

export { StyledBackgrounds, StyledPageContainer };
