import * as fs from "fs";
import * as path from "path";
import { parseHackerTeamCSV, parseJudgeCSV, parseRoomsCSV } from "./parser";
import { HackerTeam, Judge, Room } from "./types";

function main(): void {
  // get 3 CSV's as arguments
  const filePaths: string[] = process.argv.slice(2) 
  const judgeCsvFilePath: string = filePaths[0];
  const roomsCsvFilePath: string = filePaths[1];
  const teamsCsvFilePath: string = filePaths[2];
  
  // parse the input CSVs in to TS objects
  const allJudges: Judge[] = parseJudgeCSV(judgeCsvFilePath);
  const allRooms: Room[] = parseRoomsCSV(roomsCsvFilePath);
  const allHackers: HackerTeam[] = parseHackerTeamCSV(teamsCsvFilePath);
  
  // filter out hacker teams doing live demo
  allHackers.filter(team => team.liveDemo);

  // may have to change based on hackathon needs
  const allTimes: string[] = ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45'];
  sortJudgesAndPeople(allTimes, allRooms, allHackers, allJudges);
}