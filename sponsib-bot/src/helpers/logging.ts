import winston from "winston";

interface Metadata {
    [key: string]: any;
}

export const createLogger = (serviceName: string) => winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize({ level: true }),
        winston.format.printf(({ timestamp, level, message, metadata }) => {
            const metaString = Object.entries(metadata as Metadata).map(([key, val]) => `${key}: ${val}`).join(', ');
            return `${timestamp} [${serviceName}] ${level}: ${message} ${metaString ? '| ' + metaString : ''}`;
        }),
    ),
    transports: [new winston.transports.Console()],
});

/**
 * Example usage 
 * 
 * const logger = createLogger('ServiceName');

    // Logging without metadata
    logger.info('This is a simple log.');

    // Logging with metadata
    logger.info('This is a log with metadata.', { userId: 123, action: 'create' });
 *
 */