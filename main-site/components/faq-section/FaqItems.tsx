import { FaqProps } from '../../lib/types';
import React from 'react';
import {
  StyledFaqButton,
  StyledFaqDropdown,
  StyledFaqLine,
  StyledFaqQuestionText
} from './FaqSection.styles';

const FaqItem: React.FC<FaqProps> = ({
  id,
  question,
  answer,
  selectedQuestion,
  setSelectedQuestion
}) => {
  const isSelected = selectedQuestion == id;

  return (
    <>
      <StyledFaqButton
        onClick={(): void =>
          isSelected ? setSelectedQuestion(-1) : setSelectedQuestion(id)
        }
      >
        <StyledFaqQuestionText>{question}</StyledFaqQuestionText>
      </StyledFaqButton>
      <StyledFaqLine />
      {isSelected && <StyledFaqDropdown>{answer}</StyledFaqDropdown>}
    </>
  );
};

export default FaqItem;
