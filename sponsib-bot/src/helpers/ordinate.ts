import a from 'axios';
import { createLogger } from "./logging";

type CompanyScrapeInit = {};

type CompanyScrapeResult = {}

const logger = createLogger('ORDINATE_SDK');

const http = a.create({ 
    baseURL: "https://ordinate.ai/api/v1",
    headers: {
        Authorization: `Bearer ${process.env.ORDINATE_API_KEY}`
    }
});


const MAX_RETRIES = 12;
const MAX_RETRY_DELAY = 5_000; // 5 seconds


export class OrdinateSDK {
    static requestCompanyDetails = async (companyName: string) => {
        // TODO query mongo for existing company details

        logger.debug(`Scraping company details for ${companyName}`);
        
        const initReq = await http.post('/company/init', {
            name: companyName
        });

        const { jobId } = initReq.data as any;

        logger.debug(`Initialized scrape job with id ${jobId} for company ${companyName}...`);

        return await this.pollForJobResult(jobId, MAX_RETRIES);
    }
    
    private static pollForJobResult = async (jobId: string, retries: number = 0): Promise<CompanyScrapeResult> => {
        for (let i = 0; i < retries; i++) {
            const resultReq = await http.get(`/company/result/${jobId}`);
            const { status, result } = resultReq.data as any;

            switch (status) {
                case "error": {
                    logger.error(`Scrape job ${jobId} errored out with message: ${result.message}`);
                    throw new Error(result.message);
                }

                case "pending": {
                    logger.debug(`Scrape job ${jobId} is still pending...`);

                    // Sleep for X seconds
                    await new Promise(resolve => setTimeout(resolve, MAX_RETRY_DELAY));
                    break;
                }

                case "completed": {
                    return result;
                }
            }
        }

        throw new Error(`Scrape job ${jobId} took too long to complete`);
    }
}