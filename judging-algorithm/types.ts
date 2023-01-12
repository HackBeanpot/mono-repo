export type Judge = {
  name: string,
  inPerson: boolean,
  company: string
}
// const judgeHeaders: Array<keyof Judge> = ['name', 'inPerson', 'company'];

export type HackerTeam = {
  name: string;
  liveDemo: boolean;
}
const hackerTeamHeaders: Array<string> = ['Project Title', 'Will You Be Able To Give A Live Demo Of Your Project To Judges?'];

export type Room = {
  name: string,
  capacity: number;
}
// const roomHeaders: Array<keyof Judge> = ['name', 'inPerson', 'company'];