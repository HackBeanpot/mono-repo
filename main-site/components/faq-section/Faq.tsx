import React, { useState } from 'react';
import { FaqData } from '../../lib/types';
import { data } from './Data';
import FaqItem from './FaqItems';
import { StyledFaqContainer } from './FaqSection.styles';

const Faq: React.FC<FaqData> = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);
  return (
    <>
      <StyledFaqContainer>
        {data.map((data) => (
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
