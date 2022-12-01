import React from 'react';
import ResourceBox from './resource-box/ResourceBox';
import {
  BoxesContainer,
  StyledHeader,
  StyledResourcesSection
} from './ResourcesSection.styles';

const ResourcesSection: React.FC = () => {
  const labels: string[] = [
    'Project Guide',
    'Judging Process Guide',
    'Project Demo Guide',
    'Beginner Resource Guide'
  ];
  return (
    <StyledResourcesSection>
      <StyledHeader>Resources</StyledHeader>
      <BoxesContainer>
        {labels.map((label: string) => (
          <ResourceBox label={label} />
        ))}
      </BoxesContainer>
    </StyledResourcesSection>
  );
};

export default ResourcesSection;
