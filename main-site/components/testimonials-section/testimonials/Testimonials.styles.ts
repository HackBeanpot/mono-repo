import styled from 'styled-components';

const StyledTestimonialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
  overflow: hidden;
  text-align: left;
  flex-wrap: wrap;
`;

const StyledTestimonialsCenterContainer = styled.div`
  justify-content: center;
`;
const StyledTestimonialsLeftContainer = styled.div`
  justify-content: left;
  position: absolute;
  left: -10em;
`;

const StyledTestimonialsRightContainer = styled.div`
  justify-content: right;
  position: absolute;
  right: -10em;
`;

const StyledCactusButtons = styled.img`
  width: 3em;
  height: 3em;
  padding: 1em;
`;

export {
  StyledTestimonialsCenterContainer,
  StyledTestimonialsLeftContainer,
  StyledTestimonialsRightContainer,
  StyledTestimonialsContainer,
  StyledCactusButtons
};
