import React from 'react';
import { EventItemTagProps } from '../../../lib/types';
import { StyledTag, StyledTagText } from './EventItemTag.styles';

const EventItemTag: React.FC<EventItemTagProps> = ({ type }) => {
    return (
        <StyledTag type={type}>
            <StyledTagText type={type}>{type}</StyledTagText>
        </StyledTag>
    );
  };
  export default EventItemTag;
  