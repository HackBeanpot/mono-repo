import React from 'react';
import { EventItemTagProps } from '../../../lib/types';
import { StyledTag, StyledTagText } from './EventItemTag.styles';

const EventItemTag: React.FC<EventItemTagProps> = ({ tag }) => {
  return (
    <StyledTag tag={tag}>
      <StyledTagText tag={tag}>{tag}</StyledTagText>
    </StyledTag>
  );
};

export default EventItemTag;
