import React from 'react';
import { useAirtableApi } from '../../src/hooks/useAirtable';

const MentorsSection: React.FC = () => {
  const { data } = useAirtableApi('Mentors', 'mentors');
  return (
    <div>
      <h1> Mentors section</h1>
      {data.map((currMentor) => (
        <>
          <p>{currMentor.fields.company}</p>
          <p>{currMentor.fields.name}</p>
          <p>{currMentor.fields.position}</p>
        </>
      ))}
    </div>
  );
};

export default MentorsSection;
