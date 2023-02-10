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
  const judgesPerRoom = Math.ceil(unassignedJudges.length / allJudgingRooms.length);
  // filter out rooms with less capacity than judgesPerRoom
  const goodRoomsName: string[] = allJudgingRooms.map(room => room.name)
  // populate keys for roomsToJudge outputs
  allJudgingRooms.map(room => roomsToJudgeOutputs.set(room.name, []));
  for (const room of goodRoomsName) {
    for (let judgeCount = 0; judgeCount < unassignedJudges.length; judgeCount++) {
      if (unassignedJudges.length > 0) {
        const newJudge: JudgeOutput = assignJudgeToRoom(
          unassignedJudges[0],
          room
        );
        unassignedJudges.splice(0, 1);
        judgesTable.push(newJudge); // we mutate this later
        // add to the mapping of room number to judges
        if (roomsToJudgeOutputs.has(room)) {
          roomsToJudgeOutputs.get(room)!.push(newJudge);
        } else {
          roomsToJudgeOutputs.set(room, [newJudge]);
        }
       // console.log('judges Table')
       // console.log(judgesTable)
      }
    }
  }

  // people assignment
  // iterates through each time slot and assigns to all rooms before proceeding to next time
  while (unassignedTeams.length > 0) {
    for (let curTimeSlotIdx = 0; curTimeSlotIdx < allTimes.length; curTimeSlotIdx++) {
      const timeSlot = allTimes[curTimeSlotIdx];
      for (const room of allJudgingRooms) {
        if (unassignedTeams.length === 0) {
          break;
        }
        // select a random team to sort to current room
       // const teamToAssignIdx = Math.floor(Math.random() * unassignedJudges.length + 1);
        const teamToAssign = unassignedTeams.splice(0, 1).at(0)!;
        const hackerOutput: HackerOutput = assignTeamToTime(
          timeSlot,
          teamToAssign,
          room.name,
          roomsToJudgeOutputs
        );
        hackerTable.push(hackerOutput);
      }
      if (unassignedTeams.length === 0) {
        break;
      }
    }
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
  const judgesInRoom: JudgeOutput[] = roomToJudgeOutput.get(room)!;
  for (const judgeOutput of judgesInRoom) {
    judgeOutput.time = timeSlot;
    judgeOutput.project = hackerTeam.name;
    judgeOutput.devPostLink = hackerTeam.devpostLink;
  }
  const judgeNames: string[] = judgesInRoom.map(judgeOutput => judgeOutput.judge);
 // console.log('judgeNames')
 // console.log(judgeNames)
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
    inPersonDemo: true,
    time: ''
  };
  return newJudge;
}