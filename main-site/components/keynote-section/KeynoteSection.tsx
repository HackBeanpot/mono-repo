import React from 'react';
import {
  StyledKeynoteSectionContainer,
  StyledTitle,
  StyledItemDescription,
  StyledTitleDescription,
  StyledSpeakerImage,
  StyledItemTitle
} from './KeynoteSection.styles';
import Headshot from '../../../shared-ui/images/rati-thanawala-headshot.png';

const KeynoteSection = (): React.FC => {
  return (
    <div id="keynote">
      <StyledKeynoteSectionContainer>
        <StyledTitle>Keynote Speaker</StyledTitle>

        <StyledSpeakerImage src={Headshot}></StyledSpeakerImage>

        <StyledItemTitle>Rati Thanawala</StyledItemTitle>
        <StyledTitleDescription>
          2018 Advanced Leadership Fellow, Harvard University | Founder,
          Leadership Academy for Women of Color in Tech
        </StyledTitleDescription>
        <StyledItemDescription>
          Dr. Thanawala is a 2018 Advanced Leadership Fellow at Harvard. She has
          a Ph.D. in Computer Science from Yale University. In her 39-year
          career in the tech industry, the last 17 as a Vice President at Bell
          Labs, she consistently broke new ground in the introduction of new
          communications technologies. She founded Bell Labs Consulting and has
          held executive positions in software development and product
          management at AT&T and Nokia. 
          <br/>
          <br/>
          Dr. Thanawala received a grant from the
          Women of Color in Computing Collaborative, funded by a Melinda Gates
          company. From her research, she developed “19 Levers” that, if
          mastered early by college students, gives them an increased ability to
          thrive in internships and early careers in tech. Dr.Thanawala
          established a curriculum for a Leadership Academy, which was launched
          with two partners, the University of Massachusetts, and Harvard
          University. In the last 4 years, 200+ students from 30+ colleges have
          participated in the virtual summer program, followed by a 9-month
          industry mentorship program.
        </StyledItemDescription>
      </StyledKeynoteSectionContainer>
    </div>
  );
};

export default KeynoteSection;
