import { FaqItemProps } from '../../../lib/types';
import React from 'react';
import {
  StyledFaqButton,
  StyledFaqDropdown,
  StyledFaqLine,
  StyledFaqQuestionText
} from './FaqItem.styles';

const FaqItem: React.FC<FaqItemProps> = ({
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
      {isSelected && (
        <>
          <StyledFaqDropdown>{answer}</StyledFaqDropdown>
          <StyledFaqLine />
        </>
      )}
    </>
  );
};

export default FaqItem;
