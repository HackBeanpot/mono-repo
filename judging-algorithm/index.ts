import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse/sync';

type Judge = {
  name: string,
  inPerson: boolean,
  company: string
}
const judgeHeaders: Array<keyof Judge> = ['name', 'inPerson', 'company'];

type HackerTeam = {
  name: string,
  inPerson: boolean,
  company: string
}
const hackerTeamHeaders: Array<keyof HackerTeam> = ['name', 'inPerson', 'company'];

type Judge = {
  name: string,
  inPerson: boolean,
  company: string
}
const judgeHeaders: Array<keyof Judge> = ['name', 'inPerson', 'company'];

function parseCsv<T> (csvFilePath: string, headers: string[]): T[] {
  const csvFileAbsolutePath = path.resolve(__dirname, csvFilePath);

  const fileContent = fs.readFileSync(csvFileAbsolutePath, { encoding: 'utf-8' });

  const options = {
    delimiter: ',',
    columns: headers,
  };
  return parse(fileContent, options);
};

function parseJudgeCSV(judgeCsvFilePath: string) {
  parseCsv<Judge>(judgeCsvFilePath, judgeHeaders);
};

function parseHackerTeamCSV(hackerTeamCsvFilePath: string) {
  parseCsv<Judge>(hackerTeamCsvFilePath, judgeHeaders);
};

function parseCSV(judgeCsvFilePath: string) {
  parseCsv<Judge>(judgeCsvFilePath, judgeHeaders);
};