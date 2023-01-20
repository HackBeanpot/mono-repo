import {
  FinalOutputTables,
  HackerOutput,
  HackerTeam,
  JudgeOutput,
  Room
} from './types';

// driver code, takes parsed values and creates random assignments
// the judges and hacker teams it take in have already been filtered, and rooms have been filtered for capacity
export function sortJudgesAndPeople(
  allTimes: string[],
  allJudgingRooms: Room[],
  unassignedTeams: HackerTeam[],
  unassignedJudges: string[]
): FinalOutputTables {
  const judgesTable: JudgeOutput[] = [];
  const hackerTable: HackerOutput[] = [];
  const roomsToJudgeOutputs = new Map<string, JudgeOutput[]>();
  const finalOutput: FinalOutputTables = {
    judgeOutput: judgesTable,
    hackerOutput: hackerTable
  };
  // judges assignment
  const judgesPerRoom = Math.ceil(
    unassignedJudges.length / allJudgingRooms.length 
  );
  // filter out rooms with less capacity than judgesPerRoom
  const goodRooms: Room[] = allJudgingRooms.filter(room=>room.capacity >= judgesPerRoom)
  const goodRoomsName: string[] = goodRooms.map(room=>room.name)

  for (const room of goodRoomsName) {
    for (let judgeCount = 0; judgeCount < judgesPerRoom; judgeCount++) {
      if (unassignedJudges.length > 0) {
        const judgeToAssignIdx = Math.floor(
          Math.random() * unassignedJudges.length + 1
        );
        const newJudge: JudgeOutput = assignJudgeToRoom(
          unassignedJudges[judgeToAssignIdx],
          room
        );
        unassignedJudges.splice(judgeToAssignIdx, 1);
        judgesTable.push(newJudge); // we mutate this later
        // add to the mapping of room number to judges
        if (roomsToJudgeOutputs.has(room)) {
          roomsToJudgeOutputs.get(room).push(newJudge);
        } else {
          roomsToJudgeOutputs.set(room, [newJudge]);
        }
      }
    }
  }

  // people assignment
  let curTimeSlotIdx = 0;
  while (unassignedTeams.length > 0) {
    const timeSlot = allTimes[curTimeSlotIdx];
    for (
      const room of allJudgingRooms
    ) {
      if (unassignedTeams.length == 0) {
        break;
      }
      const teamToAssignIndx = Math.floor(
        Math.random() * unassignedJudges.length + 1
      );
      const teamToAssign = unassignedTeams[teamToAssignIndx] // select a random team from the unassigned teams
      unassignedTeams.splice(teamToAssignIndx, 1);
      const hackerOutput: HackerOutput = assignTeamToTime(
        timeSlot,
        teamToAssign,
        room,
        roomsToJudgeOutputs
      );
      hackerTable.push(hackerOutput);
    }
    curTimeSlotIdx++;
  }

  return finalOutput;
}

// returns one hackertable entry
// mutates every single JudgeOutput the map maps to
// return HackerOutput object, mutates the judge passed in
function assignTeamToTime(
  timeSlot: string,
  hackerTeam: HackerTeam,
  room: string,
  roomToJudgeOutput: Map<string, JudgeOutput[]>
): HackerOutput {
  const judgeGroup: JudgeOutput[] = roomToJudgeOutput.get(room);
  for (const judge of judgeGroup) {
    judge.project = hackerTeam.name;
    judge.devPostLink = hackerTeam.devpostLink;
  }
  const judgeNames: string[] = judgeGroup.map(
    (judgeOutput) => judgeOutput.judge
  );
  const hackerOutput: HackerOutput = {
    project: hackerTeam.name,
    time: timeSlot,
    judges: judgeNames,
    room: room
  };
  return hackerOutput;
}

// judges will always be in the same room for all timeslots
// no mutations, returns the new judge
function assignJudgeToRoom(judge: string, room: string): JudgeOutput {
  const newJudge: JudgeOutput = {
    room: room,
    judge: judge,
    project: '',
    devPostLink: '',
    inPersonDemo: false,
    time: ''
  };
  return newJudge;
}