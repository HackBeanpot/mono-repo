import React from "react";
import { TeamColumnProps } from "../../../../shared-ui/lib/types";
import { StyledTeamColumn, StyledLabel, StyledHeadshot } from "./TeamColumn.styles";

const TeamColumn: React.FC<TeamColumnProps> = ({label, pictures}) => {
    return (
      <StyledTeamColumn>
          <StyledLabel>
              {label}
          </StyledLabel>
          {pictures.map((picture: string) => (
            <StyledHeadshot src={picture}/>
          ))}
     
      </StyledTeamColumn>
    );
  };
  
  export default TeamColumn;
  