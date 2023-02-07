export type Judge = {
  name: string,
  inPerson: boolean,
  company: string
}

/* For some reason this parses name as 'name' so dummy is included to avoid strange key.
   Low priority TODO is to fix this later */
export type HackerTeam = {
  dummy: string,
  name: string;
  liveDemo: string;
  devpostLink: string;
}

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
  judgeOutput: JudgeOutput[];
  hackerOutput: HackerOutput[];
}

export type HackerOutput = {
  project: string, 
  time: string, 
  judges: string[], 
  room: string
}