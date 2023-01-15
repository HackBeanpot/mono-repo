import { FinalOutputTables, HackerTeam, Judge, Room } from "./types";
import { sortJudgesAndPeople } from "./formSchedule";
import { parseHackerTeamCSV, parseJudgeCSV, parseRoomsCSV } from "./parser";

// hardcode based on hackathon needs
const allTimes: string[] = ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45'];

function main(): FinalOutputTables {
  // read the CSV and capacity arguments from CLI
  const filePaths: string[] = process.argv.slice(2) 
  const judgeCsvFilePath: string = filePaths[0];
  const roomsCsvFilePath: string = filePaths[1];
  const teamsCsvFilePath: string = filePaths[2];
  const minCapacityRequired: number = parseInt(filePaths[3]);
  
  // parse the hacker CSV in to TS objects
  const allJudges: Judge[] = parseJudgeCSV(judgeCsvFilePath);
  const allRooms: Room[] = parseRoomsCSV(roomsCsvFilePath);
  const allHackers: HackerTeam[] = parseHackerTeamCSV(teamsCsvFilePath);

  // apply constraints to parsed data
  const allAwardEligibleHackers = allHackers.filter(team => team.liveDemo);  
  const capacityAvailableRooms = allRooms.filter(room => room.capacity >= minCapacityRequired);

  // extract string names for: judges, hackers and teams
  const judgeStrings = allJudges.map(judge => judge.name);
  const roomStrings = capacityAvailableRooms.map(room => room.name);

  // handles randomized placement and outputs a judge table and a hacker table for front-end
  return sortJudgesAndPeople(allTimes, roomStrings, allAwardEligibleHackers, judgeStrings);
}