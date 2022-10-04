import React from 'react';
import { min } from '../../../shared-ui/lib/responsive';
import useMatchMedia from 'react-use-match-media';
import PhotosDesktop from "../../../shared-ui/images/old-photos-desktop.svg"
import PhotosMobile from "../../../shared-ui/images/old-photos-mobile.svg"
import {
  StyledPastPhotosSectionContainer,
  StyledDesktopPhotos,
  StyledMobilePhotos,
  StyledPastPhotosButton
} from './PastPhotosSection.styles';
import PrimaryButton from '../../../shared-ui/components/primary-button/PrimaryButton';

const PastPhotosSection: React.FC = () => {
  const isDesktop = useMatchMedia(min.tablet);
  return (
    <StyledPastPhotosSectionContainer>
        {isDesktop ? 
          <StyledDesktopPhotos src={PhotosDesktop}/> 
          : <StyledMobilePhotos src={PhotosMobile}/> 
        }
        <StyledPastPhotosButton>
          <PrimaryButton 
              btnText="Past Photos"
              btnLink="www.hackbeanpot.com"
              newTab
          />
        </StyledPastPhotosButton>
    </StyledPastPhotosSectionContainer>
  );
};

export default PastPhotosSection;
