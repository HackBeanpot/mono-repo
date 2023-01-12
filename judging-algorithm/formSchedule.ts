import { FinalOutputTables, HackerOutput, HackerTeam, Judge, JudgeOutput, Room } from "./types";

// driver code, takes parsed values and creates random assignments 
// the judges and hacker teams it take in have already been filtered, and rooms have been filtered for capacity
export function sortJudgesAndPeople(allTimes: string[], allJudgingRooms: string[], unassignedTeams: HackerTeam[], unassignedJudges: string[]): FinalOutputTables {
  const judgesTable: JudgeOutput[] = []
  const hackerTable: HackerOutput[] = []
  const hashMap = new Map<string, JudgeOutput[]>()
  
  // judges assignment
  const judgesPerRoom = unassignedJudges.length / allJudgingRooms.length;
  for (let roomIdx = 0; roomIdx < allJudgingRooms.length; roomIdx++) {
    for (let judgeCount = 0; judgeCount < judgesPerRoom; judgeCount++) {
      if (unassignedJudges.length > 0) {
        const room: string = allJudgingRooms[roomIdx]
        let judgeToAssignIdx = Math.floor(Math.random() * unassignedJudges.length + 1);
        let judgeToAssign = unassignedJudges.splice(judgeToAssignIdx, 1).at(0)!;
        const newJudge: JudgeOutput = assignJudgeToRoom(judgeToAssign, room);
        judgesTable.push(newJudge) // we mutate this later
        if (hashMap.has(room)) {
          hashMap.set(room, hashMap.get(room).push(newJudge))
        } else {
          hashMap.set(room, [newJudge])
        }
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
      const hackerOutput: HackerOutput = assignTeamToTime(timeSlot, teamToAssign, roomToAssignTo, hashMap);
      hackerTable.push(hackerOutput)
    }
    curTimeSlotIdx++;
  }
  const finalOutput: FinalOutputTables = {
    judgeOutput: judgesTable, 
    hackerOutput: hackerTable
  }
  return finalOutput
}

// returns one hackertable entry
// mutates every single JudgeOutput the map maps to 
function assignTeamToTime(timeSlot: string, hackerTeam: HackerTeam, room: string, dictionary: Map<string, JudgeOutput[]>): HackerOutput {
  const judgeGroup: JudgeOutput[] = dictionary.get(room)
  for (let judge of judgeGroup) {
    judge.project=hackerTeam.name
    judge.devPostLink=hackerTeam.devpostLink
  }
  const judgeNames: string[] = judgeGroup.map(judgeOutput=>judgeOutput.judge)
  const hackerOutput: HackerOutput = {
    project: hackerTeam.name, 
    time: timeSlot, 
    judges: judgeNames, 
    room: room
  }
  return hackerOutput
}

// judges will always bein the same room for all timeslots
function assignJudgeToRoom(judge: string, room: string): JudgeOutput {
  const newJudge: JudgeOutput = {
    room: room,
    judge: judge,
    project: "",
    devPostLink: "",
    inPersonDemo: false, 
    time: ""
  }
  return newJudge
}

