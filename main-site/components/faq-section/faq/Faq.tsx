import React, { useState } from 'react';
import { FaqSectionData } from '../../../lib/data';
import FaqItem from '../faq-item/FaqItem';
import { StyledFaqContainer, StyledFaqSubtitle } from './Faq.styles';


// const Faq: React.FC = () => {
//   const [selectedQuestion, setSelectedQuestion] = useState<number>(0);
//   return (
//     <StyledFaqContainer>
//       {FaqSectionData.map((data) => (
//         <FaqItem
//           key={`faq-${data.id}`}
//           id={data.id}
//           question={data.question}
//           answer={data.answer}
//           selectedQuestion={selectedQuestion}
//           setSelectedQuestion={setSelectedQuestion}
//         />
//       ))}
//     </StyledFaqContainer>
//   );
// };

const Faq: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);
  
  return (
    <StyledFaqContainer>
      {FaqSectionData.map((data) => (
        <React.Fragment key={`faq-${data.id}`}>
          {data.id === 1 && <StyledFaqSubtitle>Time & Location</StyledFaqSubtitle>}
          {data.id === 4 && <StyledFaqSubtitle>Application Logistics</StyledFaqSubtitle>}
          {data.id === 5 && <StyledFaqSubtitle>Event Logistics</StyledFaqSubtitle>}
          <FaqItem
            id={data.id}
            question={data.question}
            answer={data.answer}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
          />
        </React.Fragment>
      ))}
    </StyledFaqContainer>
  );
};

export default Faq;
