export type Judge = {
  name: string,
  inPerson: boolean,
  company: string
}

/* For some reason this parses name as 'name' so dummy is included to avoid strange key.
   Low priority TODO is to fix this later */
export type HackerTeam = {
  dummy: string,
  name: string,
  liveDemo: string
}

export type Room = {
  name: string
}

export type JudgeOutput = {
  judge: string, 
  time: string,
  project: string, 
  room: string
}

export type JudgeOutputLiveSite = {
  judge: string, 
  room: string,
  projects: JudgeOutputProjectsLiveSite[]
}

export type JudgeOutputProjectsLiveSite = {
  project: string,
  time: string
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