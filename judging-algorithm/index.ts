import { FinalOutputTables, HackerTeam, Judge, Room } from "./types";
import { sortJudgesAndPeople } from "./formSchedule";
import { parseHackerTeamCSV, parseJudgeCSV, parseRoomsCSV } from "./parser";
import { convertHackersTablesToJson, convertJudgesTablesToJson } from "./formJsonOutput";

// hardcode based on hackathon needs
const allTimes: string[] = ['10:00', '10:09', '10:18', '10:27', '10:36', '10:45', '10:54', '11:03', '11:12', '11:21'];

function main(): FinalOutputTables {
  // read the CSV files with judge / hacker / room data
  const judgeCsvFilePath = '../data/csv_inputs/judges.csv';
  const roomsCsvFilePath = '../data/csv_inputs/rooms.csv';
  const teamsCsvFilePath = '../data/csv_inputs/hackers.csv';

  // parse the hacker CSV in to TS objects
  const allJudges: Judge[] = parseJudgeCSV(judgeCsvFilePath);
  const allRooms: Room[] = parseRoomsCSV(roomsCsvFilePath);
  const allHackers: HackerTeam[] = parseHackerTeamCSV(teamsCsvFilePath);

  // apply constraints to parsed data
  const allAwardEligibleHackers = allHackers.filter(team => team.liveDemo === 'TRUE');  

  // extract string names for: judges, hackers and teams
  const judgeStringsForSorting = allJudges.map(judge => judge.name);

  // make a judgeStrings copy because the sorting version is mutable
  const judgeStringsForJSON  = Object.assign([], judgeStringsForSorting);

  // handles randomized placement and outputs a judge table and a hacker table for front-end
  const allPeopleSorted = sortJudgesAndPeople(allTimes, allRooms, allAwardEligibleHackers, judgeStringsForSorting);

  // parse the judgeOutput and place in JSON files for the front-end to consume
  convertHackersTablesToJson(allPeopleSorted);
  convertJudgesTablesToJson(judgeStringsForJSON, allPeopleSorted);

  return allPeopleSorted;
}

main()
