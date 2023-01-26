import React from 'react';
import { MentorPopupProps } from '../../../lib/types';
import { MentorPopupContainer } from './MentorPopup.styles';
const MentorPopup: React.FC<MentorPopupProps> = ({ mentor }) => {
  if (!mentor) {
    return <></>;
  }
  return <MentorPopupContainer>{mentor.name}</MentorPopupContainer>;
};

export default MentorPopup;
