import React from 'react';
import { useAirtableApi } from '../../src/hooks/useAirtable';

const MentorsSection: React.FC = () => {
  const { data, isLoading } = useAirtableApi('mentors', 'mentors');
  console.log(data);
  return <div>Mentors section</div>;
};

export default MentorsSection;
