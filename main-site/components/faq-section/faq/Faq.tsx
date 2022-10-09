import React, { useState } from 'react';
import { FaqData } from '../../../lib/types';
import { FaqSectionData } from '../../../lib/data';
import FaqItem from '../faq-item/FaqItem';
import { StyledFaqContainer } from './Faq.styles';

const Faq: React.FC<FaqData> = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);
  return (
    <>
      <StyledFaqContainer>
        {FaqSectionData.map((data) => (
          <FaqItem
            id={data.id}
            question={data.question}
            answer={data.answer}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
          />
        ))}
      </StyledFaqContainer>
    </>
  );
};

export default Faq;
