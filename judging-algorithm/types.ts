export type Judge = {
  name: string,
  inPerson: boolean,
  company: string
}
// const judgeHeaders: Array<keyof Judge> = ['name', 'inPerson', 'company'];

export type HackerTeam = {
  name: string;
  liveDemo: boolean;
  devpostLink: string;
}
export const hackerTeamHeaders: Array<string> = ['Project Title', 'Will You Be Able To Give A Live Demo Of Your Project To Judges?'];

export type Room = {
  name: string,
  capacity: number;
}

export type JudgeOutput = {
  judge: string, 
  time: string,
  project: string, 
  devPostLink: string, 
  inPersonDemo: boolean, 
  room: string
}

export type FinalOutputTables = {
  judgeOutput: JudgeOutput;
  hackerOutput: HackerOutput;
}

export type HackerOutput = {
  project: string, 
  time: string, 
  judges: string[], 
  room: string
}