import { FinalOutputTables } from "./types";
import {writeJsonFile} from 'write-json-file';

/* Creates a JSON file for the front-end to consume for judging assignments */
export async function convertTablesToJson(
    finalOutputTables: FinalOutputTables,
  ): Promise<void> {
    const jsonFinalOutputTables = JSON.stringify(finalOutputTables);
    await writeJsonFile('algorithmResults.json', jsonFinalOutputTables);
}
  