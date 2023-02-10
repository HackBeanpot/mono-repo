Judging Algorithm Usage:

1) NAVIGATE TO THIS FOLDER

In your terminal, `cd` in to `/judging-algorithm` within this `mono-repo` repository.

Run `yarn install` so that you can run the script.

2) UPLOAD YOUR CSV FILES

Upload the following 3 CSV files in to the `/judging-algorithm/data/csv_inputs` folder:
a. judges.csv
b. hackers.csv
c. rooms.csv

You can access templates to create these CSVs under the `/judging-algorithm/csv-templates` folder.

3) KICK OFF THE SORTING SCRIPT

Run our script that splits our judges and hackers in to the inputted rooms
by executing the following command:

`npx ts-node --experimental-specifier-resolution=node index.ts`

This outputs our results in to JSON files `hackerResults.json` and `judgeResults.json` which the site will read and upload!

--

IMPLEMENTATION STRATEGY:

1. Parse CSV files using `parser.ts`
2. Sort judges in to rooms in `formSchedule.ts` in order provided in CSV
3. Sort hackers in to rooms in `formSchedule.ts` in order provided in CSV
4. Produce judge and hacker output tables to render in `formJsonOutput.ts`
5. Convert tabular data in to JSON that the front-end can consume in `live-site` folder

FUTURE EXTENSIONS:

1. Accomodate remote judges by adding a bias that sorts Zoom judges in to same room
2. Room capacities filter based on (hackerCount + judgeCount) not just judgeCount
   (just filtering by judgeCount does not really ensure we automate capacity constraint)