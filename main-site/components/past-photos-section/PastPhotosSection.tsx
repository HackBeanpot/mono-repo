import React from 'react';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import PhotosDesktop from '../../../shared-ui/images/old-photos-desktop.png';
import PhotosMobile from '../../../shared-ui/images/old-photos-mobile.png';
import {
  StyledPhotosSection,
  StyledPhotos,
  StyledPastPhotosButton
} from './PastPhotosSection.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';

const PastPhotosSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledPhotosSection>
      {isDesktop ? (
        <StyledPhotos src={PhotosDesktop} />
      ) : (
        <StyledPhotos src={PhotosMobile} />
      )}
      <StyledPastPhotosButton>
        <PrimaryButton
          btnText="Past Photos"
          btnLink="https://drive.google.com/drive/folders/1qQMVmQLCNCEf7UwDp5QLqDD20d_QRHIp"
          newTab
        />
      </StyledPastPhotosButton>
    </StyledPhotosSection>
  );
};

export default PastPhotosSection;
