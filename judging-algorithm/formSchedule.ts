import { HackerTeam, Judge, JudgeOutput, Room } from "./types";

// driver code, takes parsed values and creates random assignments 
// the judges and hacker teams it take in have already been filtered, and rooms have been filtered for capacity
export function sortJudgesAndPeople(allTimes: string[], rooms: Room[], unassignedTeams: HackerTeam[], judges: Judge[]) {
  let judgesTable: JudgeOutput[] = []
  // Judge -> judge name
  let unassignedJudges: string[] = judges.map(judge => judge.name)
  let allJudgingRooms: string[] = rooms.map(room => room.name)
  
  // judges assignment
  let judgesPerRoom = unassignedJudges.length / allJudgingRooms.length;
  for (let roomIdx = 0; roomIdx < allJudgingRooms.length; roomIdx++) {
    for (let judgeCount = 0; judgeCount < judgesPerRoom; judgeCount++) {
      if (unassignedJudges.length > 0) {
        let judgeToAssignIdx = Math.floor(Math.random() * unassignedJudges.length + 1);
        let judgeToAssign = unassignedJudges.splice(judgeToAssignIdx, 1).at(0)!;
        assignJudgeToRoom(judgeToAssign, allJudgingRooms.at(roomIdx)!);
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

function assignJudgeToRoom(judge: string, room: string) {
  const newJudge: JudgeOutput = {
    room: room,
    judge: judge,
    time: "",
    project: "",
    devPostLink: "",
    inPersonDemo: false
  }
  return newJudge;
}
