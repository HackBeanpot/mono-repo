import React from 'react';
import { ResourceBoxProps } from '../../lib/types';
import ResourceBox from './resource-box/ResourceBox';
import {
  BoxesContainer,
  StyledHeader,
  StyledResourcesSection
} from './ResourcesSection.styles';

const ResourcesSection: React.FC = () => {
  const resources: ResourceBoxProps[] = [
    {
      label: 'Project Guide',
      link: '#'
    },
    {
      label: 'Beginner Resource Guide',
      link: '#'
    },
    {
      label: 'Hacker Guide',
      link: '#'
    }
  ];
  return (
    <div id="resources">
      <StyledResourcesSection>
        <StyledHeader>Resources</StyledHeader>
        <BoxesContainer>
          {resources.map((resource: ResourceBoxProps) => (
            <ResourceBox link={resource.link} label={resource.label} />
          ))}
        </BoxesContainer>
      </StyledResourcesSection>
    </div>
  );
};

export default ResourcesSection;
