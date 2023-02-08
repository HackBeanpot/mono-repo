import { FinalOutputTables, HackerTeam, Judge, Room } from "./types";
import { sortJudgesAndPeople } from "./formSchedule";
import { parseHackerTeamCSV, parseJudgeCSV, parseRoomsCSV } from "./parser";
import { convertHackersTablesToJson, convertJudgesTablesToJson } from "./formJsonOutput";

// hardcode based on hackathon needs
const allTimes: string[] = ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45'];

function main(): FinalOutputTables {
  // read the CSV files with judge / hacker / room data
  const judgeCsvFilePath = 'judges.csv';
  const roomsCsvFilePath = 'rooms.csv';
  const teamsCsvFilePath = 'hackers.csv';

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

  console.log("Judge strings for sorting: " + judgeStringsForSorting);

  // handles randomized placement and outputs a judge table and a hacker table for front-end
  const allPeopleSorted = sortJudgesAndPeople(allTimes, allRooms, allAwardEligibleHackers, judgeStringsForSorting);

  // parse the judgeOutput and place in JSON files for the front-end to consume
  convertHackersTablesToJson(allPeopleSorted);
  convertJudgesTablesToJson(judgeStringsForJSON, allPeopleSorted);

  return allPeopleSorted;
}

main()
