import React from 'react';
import { resources } from '../../lib/data';
import { ResourceBoxProps } from '../../lib/types';
import ResourceBox from './resource-box/ResourceBox';
import {
  BoxesContainer,
  StyledHeader,
  StyledResourcesSection,
  StyledTurtle
} from './ResourcesSection.styles';
import Turtle from '../../images/turtle.png';

const ResourcesSection: React.FC = () => {
  return (
    <div id="resources">
      <StyledResourcesSection>
        <StyledHeader>Resources</StyledHeader>
        <BoxesContainer>
          {resources.map((resource: ResourceBoxProps, index) => (
            <ResourceBox
              key={`${resource.link}-${index}`}
              link={resource.link}
              label={resource.label}
              image={resource.image}
            />
          ))}
        </BoxesContainer>
        <StyledTurtle src={Turtle} />
      </StyledResourcesSection>
    </div>
  );
};

export default ResourcesSection;
