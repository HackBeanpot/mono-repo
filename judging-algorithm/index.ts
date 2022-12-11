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
  name: string
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

function parseRoom(roomCsvFilePath: string) {
  return parseCsv<Room>(roomCsvFilePath, true);
};


function main() {
  const filePaths: string[] = process.argv.slice(2)
  const judgeCsvFilePath: string = filePaths[0]
  const judCsvFilePath: string = filePaths[0]
  parseJudgeCSV(judgeCsvFilePath)
  parseJudgeCSV(filePaths[0])
}