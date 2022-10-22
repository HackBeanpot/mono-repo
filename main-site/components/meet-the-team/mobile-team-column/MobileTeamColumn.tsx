import React, { useState } from 'react';
import Arrow from '../../../../shared-ui/components/arrow/Arrow';
import {
  MobileTeamColumnProps,
  TeamColumnInfo
} from '../../../../shared-ui/lib/types';
import { getLeftOrRight } from '../../../lib/utils';
import { StyledLabel } from '../team-column/TeamColumn.styles';

const MobileTeamColumn: React.FC<MobileTeamColumnProps> = ({listOfColumnInfo}) => {
  const [curColumn, setCurColumn] = useState<TeamColumnInfo>(
    listOfColumnInfo[0]
  );
  return (
    <StyledMobileTeamColumn>
      <LabelArrowContainer>
        <StyledLabel>{curColumn.teamLabel}</StyledLabel>
        <Arrow
          left
          onClick={(): void =>
            setCurColumn(getLeftOrRight('left', listOfColumnInfo, curColumn))
          }
        />
      </LabelArrowContainer>
    </StyledMobileTeamColumn>
  );
};

export default MobileTeamColumn;
