import { HackerTeam, Judge, Room } from "./types";

// driver code, takes parsed values and creates random assignments 
function sortJudgesAndPeople(allTimes: string[], allJudgingRooms: Room[], unassignedTeams: HackerTeam[], unassignedJudges: Judge[]) {

  // judges assignment
  judgesPerRoom: int = unassignedJudges.length / allJudgingRooms.length;
  roomIdx: int = -1;
  while (unassignedJudges.length > 0) {
    roomIdx++;
    judgesInCurRoom: int = 0;
    while (judgesInCurRoom < judgesPerRoom) {
      judgeToAssignIdx = Math.floor(Math.random() * unassignedJudges.length + 1);
      judgeToAssign = unassignedJudges.pop(judgeToAssignIdx);
      judgesInCurRoom++;

      assignJudgeToRoom(judgeToAssign, roomIdx);
    }
  }

  // people assignment
  while (unassignedTeams.length > 0) {
    const timeSlot: string = getNextTime();
    availableRooms = this.deepArrayCopy(allJudgingRooms);
    while (availableRooms.length() > 0 && unassignedTeams.length > 0) {
      const teamToAssignIdx = Math.floor(Math.random() * unassignedTeams.length + 1);
      const teamToAssign = unassignedTeams.pop(teamToAssignIdx);

      const roomToAssignToIdx = Math.floor(Math.random() * availableRooms.length() + 1);
      const roomToAssignTo = availableRooms.pop(roomToAssignToIdx);

      assignTeamToTime(timeSlot, teamsToAssign, roomToAssignTo);
    }
  }
}

function getNextTime() {
  return allTimes.pop();
}

assignTeamToTime(timeSlot: string, teamToAssign: Team, roomToAssignTo: Room) {

}

assignJudgeToRoom(timeSlot: string, teamsToAssign, roomToAssignTo) {

}


