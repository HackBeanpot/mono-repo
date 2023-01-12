
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse/sync';
import { HackerTeam, Judge, Room } from "./types";

function parseCsv<T> (csvFilePath: string, headers: string[] | boolean): T[] {
  const csvFileAbsolutePath = path.resolve(__dirname, csvFilePath);

  const fileContent = fs.readFileSync(csvFileAbsolutePath, { encoding: 'utf-8' });

  const options = {
    delimiter: ',',
    columns: headers,
  };
  return parse(fileContent, options);
};

function parseJudgeCSV(judgeCsvFilePath: string) {
  return parseCsv<Judge>(judgeCsvFilePath, true);
};

function parseHackerTeamCSV(hackerTeamCsvFilePath: string) {
  return parseCsv<HackerTeam>(hackerTeamCsvFilePath, true);
};

function parseRoomsCSV(roomCsvFilePath: string) {
  return parseCsv<Room>(roomCsvFilePath, true);
};

// filters out any teams with submissions that they will not demo
function getLiveDemoHackerTeams(allTeams: HackerTeam[]): HackerTeam[] {
  return allTeams.filter(team => team.liveDemo);
}

allHackers.filter(team => team.liveDemo);

function main() {
  const filePaths: string[] = process.argv.slice(2) 
  const judgeCsvFilePath: string = filePaths[0];
  const roomsCsvFilePath: string = filePaths[1];
  const teamsCsvFilePath: string = filePaths[2];
  
  const allJudges = parseJudgeCSV(judgeCsvFilePath);
  const allRooms = parseRoomsCSV(roomsCsvFilePath);
  const allHackers = parseHackerTeamCSV(judgeCsvFilePath);

  // filter out hacker teams doing live demo
  getLiveDemoHackerTeams(allHackers);

  sortJudgesAndPeople(allTimes, allRooms, allHackers, allJudges);




let judgeOutputTable: JudgeOutput[] = []

// const judgeHeaders: Array<keyof Judge> = ['name', 'inPerson', 'company'];

const hackerTeamHeaders: Array<string> = ['Project Title', 'Will You Be Able To Give A Live Demo Of Your Project To Judges?'];

// const roomHeaders: Array<keyof Judge> = ['name', 'inPerson', 'company'];


// hardcode based on hackathon needs
let allTimes: string[] = ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45'];

// obtained by CSV parsing
const allJudgingRooms: Room[] = [];
let unassignedTeams: HackerTeam[] = [];
let unassignedJudges: HackerTeam[] = [];