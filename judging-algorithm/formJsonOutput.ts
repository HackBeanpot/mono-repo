import { FinalOutputTables, JudgeOutput, JudgeOutputLiveSite, JudgeOutputProjectsLiveSite } from "./types";
import fs from "fs";

/* Creates JSON file for the front-end hackers page to consume for judging assignments */
export function convertHackersTablesToJson(
    finalOutputTables: FinalOutputTables,
  ): void {
    const hackerTables = JSON.stringify(finalOutputTables.hackerOutput);
    fs.writeFileSync('../judging-algorithm/data/json_outputs/hackerResults.json', hackerTables);
}

/* Creates JSON files for the front-end judges page to consume for judging assignments */
export async function convertJudgesTablesToJson(
    judgeStrings: string[],
    finalOutputTables: FinalOutputTables,
  ): Promise<void> {
    const judgeTables = JSON.stringify(judgeDataLiveSite(judgeStrings, finalOutputTables.judgeOutput));
    fs.writeFileSync('../judging-algorithm/data/json_outputs/judgeResults.json', judgeTables);
}
  
/* Massage JudgeOutput structure data in to the live site structure */
function judgeDataLiveSite(judgeStrings: string[], judgeOutputs: JudgeOutput[]): JudgeOutputLiveSite[] {
    let judges: JudgeOutputLiveSite[] = [];
    for (var judge of judgeStrings) {
        const curLiveSiteOutput: JudgeOutputLiveSite = {room: '', judge: judge, projects: []};
        const projects = judgeOutputs.filter(judgeOutput => judgeOutput.judge === judge);
        curLiveSiteOutput.room = projects.at(0)!.room;
        projects.forEach(project => {
            const projectLiveSite: JudgeOutputProjectsLiveSite = {project: project.project, time: project.time};
            curLiveSiteOutput.projects.push(project);
        })
        judges.push(curLiveSiteOutput);
    }
    return judges;
}
