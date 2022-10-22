import React from "react";
import { TeamColumnProps } from "../../../../shared-ui/lib/types";
import { StyledTeamColumn, StyledLabel, StyledHeadshot } from "./TeamColumn.styles";

const TeamColumn: React.FC<TeamColumnProps> = ({columnInfo}) => {
  const listOfPictures: string[] = columnInfo.listOfPictures;
    return (
      <StyledTeamColumn>
          <StyledLabel twoLines={columnInfo.teamLabel == "Social Outreach"}>
              {columnInfo.teamLabel}
          </StyledLabel>
          {listOfPictures.map((picture: string) => (
            <StyledHeadshot src={picture}/>
          ))}
     
      </StyledTeamColumn>
    );
  };
  
  export default TeamColumn;
  