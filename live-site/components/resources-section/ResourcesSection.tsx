import React from 'react';
import { resources } from '../../lib/data';
import { ResourceBoxProps } from '../../lib/types';
import ResourceBox from './resource-box/ResourceBox';
import {
  BoxesContainer,
  StyledHeader,
  StyledResourcesSection
} from './ResourcesSection.styles';

const ResourcesSection: React.FC = () => {
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
