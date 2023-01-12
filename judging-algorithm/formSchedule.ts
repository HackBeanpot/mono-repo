import { HackerTeam, Judge, JudgeOutput, Room } from "./types";

// driver code, takes parsed values and creates random assignments 
// the judges and hacker teams it take in have already been filtered, and rooms have been filtered for capacity

function sortJudgesAndPeople(allTimes: string[], rooms: Room[], unassignedTeams: HackerTeam[], judges: Judge[]) {
  let judgesTable: JudgeOutput[] = []
  // Judge -> judge name
  let unassignedJudges: string[] = judges.map(judge=>judge.name)
  let allJudgingRooms: string[] = rooms.map(room=>room.name)
  

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

      const newJudge: JudgeOutput = assignJudgeToRoom(judgeToAssign, roomIdx);
      judgesTable.push(newJudge)
    }
  }

  // people assignment
  while (unassignedTeams.length > 0) {
    const timeSlot: string = getNextTime();
    availableRooms = this.deepArrayCopy(allJudgingRooms);
    for (int i = 0; i < numRoomsPerSlot; i++) {
      if (unassignedTeams.length == 0) {
        break;
      }
      teamToAssign = unassignedTeams.pop()
      roomToAssignTo = availableRooms.pop(i);
      assignTeamToTime(timeSlot, teamsToAssign, roomToAssignTo);
    }  
    // while (availableRooms.length() > 0 && unassignedTeams.length() > 0) {
    //   teamToAssignIdx = Math.floor(Math.random() * unassignedTeams.length() + 1);
    //   teamToAssign = unassignedTeams.pop(teamToAssignIdx);

    //   roomToAssignToIdx = Math.floor(Math.random() * availableRooms.length() + 1);
    //   roomToAssignTo = availableRooms.pop(roomToAssignToIdx);

    //   assignTeamToTime(timeSlot, teamsToAssign, roomToAssignTo);
    // }
  }
}

function getNextTime() {
  return allTimes.pop();
}

assignTeamToTime(timeSlot: string, teamToAssign: Team, roomToAssignTo: Room) {

}

function assignJudgeToRoom(judge: string, room: string) {
  const newJudge: JudgeOutput = {
    room: room,
    judge: judge,
    time: "",
    project: "",
    devPostLink: "",
    inPersonDemo: false
  }
  return newJudge
}
