import React from 'react';
import { EventItemTagProps } from '../../../lib/types';
import { StyledTag, StyledTagText } from './EventItemTag.styles';

const EventItemTag: React.FC<EventItemTagProps> = ({ tagType }) => {
    return (
        <StyledTag tagType={tagType}>
            <StyledTagText tagType={tagType}>{tagType}</StyledTagText>
        </StyledTag>
    );
  };
  
  export default EventItemTag;
  