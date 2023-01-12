import { HackerTeam, Judge, Room } from "./types";
import * as _ from "lodash";

// driver code, takes parsed values and creates random assignments 
function sortJudgesAndPeople(allTimes: string[], allJudgingRooms: Room[], unassignedTeams: HackerTeam[], unassignedJudges: Judge[]) {
  // judges assignment
  let judgesPerRoom = unassignedJudges.length / allJudgingRooms.length;
  for (let roomIdx = 0; roomIdx < allJudgingRooms.length; roomIdx++) {
    for (let judgeCount = 0; judgeCount < judgesPerRoom; judgeCount++) {
      if (unassignedJudges.length > 0) {
        let judgeToAssignIdx = Math.floor(Math.random() * unassignedJudges.length + 1);
        let judgeToAssign = unassignedJudges.splice(judgeToAssignIdx, 1).at(0);
        assignJudgeToRoom(judgeToAssign, roomIdx);
      }
    }
  }

  // people assignment
  let curTimeSlotIdx = 0;
  while (unassignedTeams.length > 0) {
    const timeSlot = allTimes.at(curTimeSlotIdx);
    for (let roomInTimeSlot = 0; roomInTimeSlot < allJudgingRooms.length; roomInTimeSlot++) {
      if (unassignedTeams.length == 0) {
        break;
      }
      const teamToAssign = unassignedTeams.pop();
      const roomToAssignTo = allJudgingRooms.at(roomInTimeSlot);
      assignTeamToTime(timeSlot, teamToAssign, roomToAssignTo);
    }
    curTimeSlotIdx++;
  }
}

assignTeamToTime(timeSlot: string, teamToAssign: Team, roomToAssignTo: Room) {

}

assignJudgeToRoom(timeSlot: string, teamsToAssign, roomToAssignTo) {

}


