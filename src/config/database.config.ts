"use strict";

import dotenv from 'dotenv';
dotenv.config();


interface DatabaseConfig {
    connectionString: string;
    databaseName: string;
    collections: string[];
}

const databaseConfig: DatabaseConfig = {
    connectionString: process.env.DATABASE_URL || 'unknown',
    databaseName: process.env.DATABASE_NAME || 'unknown',
    collections: [
        "gifMemes",
        "imageMemes",
        "videoMemes",
    ]
};

export default databaseConfig;