Judging Algorithm Usage:

1) NAVIGATE TO THIS FOLDER

In your terminal, `cd` in to `/judging-algorithm` within this `mono-repo` repository.

Run `npm install` so that you can run the script.

2) UPLOAD YOUR CSV FILES

Upload the following 3 CSV files in to the `/judging-algorithm` folder:
a. judges.csv
b. hackers.csv
c. rooms.csv

You can access templates to create these CSVs under the `/csv-templates` folder.

3) KICK OFF THE SORTING SCRIPT

Run our script that splits our judges and hackers in to the inputted rooms
by executing the following command:

`ts-node index.ts`

This outputs our results in to a JSON file which the site will read and upload!
