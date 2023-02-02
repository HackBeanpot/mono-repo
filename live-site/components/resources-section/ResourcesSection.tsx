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
      link: 'https://docs.google.com/document/d/1ogiTG4qaefJpdYJc05tx0jWiPZGtozIOzJcyu7a2aX8/'
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
