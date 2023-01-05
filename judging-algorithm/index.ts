import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse/sync';

type Judge = {
  name: string,
  inPerson: boolean,
  company: string
}
// const judgeHeaders: Array<keyof Judge> = ['name', 'inPerson', 'company'];

type HackerTeam = {
  name: string;
  liveDemo: boolean;
}
const hackerTeamHeaders: Array<string> = ['Project Title', 'Will You Be Able To Give A Live Demo Of Your Project To Judges?'];

type Room = {
  name: string,
  capacity: number;
}
// const roomHeaders: Array<keyof Judge> = ['name', 'inPerson', 'company'];

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
  return parseCsv<HackerTeam>(hackerTeamCsvFilePath, hackerTeamHeaders);
};

function parseRoomsCSV(roomCsvFilePath: string) {
  return parseCsv<Room>(roomCsvFilePath, true);
};

function putJudgesInRooms() {
  // in person judge count
  // room count  
  // randomly stick (room count / in person count) in to rooms
}

function putJudgesInRooms() {
  // in person judge count
  // room count  
  // randomly stick (room count / in person count) in to rooms
}

// filters out any teams with submissions that they will not demo
function getLiveDemoHackerTeams(allTeams: HackerTeam[]): HackerTeam[] {
  return allTeams.filter(team => team.liveDemo);
}

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

}