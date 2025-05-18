"use strict"

import dotenv from 'dotenv';

dotenv.config();

interface AppConfig {
    port: number;
    nodeEnv: string;
    database: string | null;

}

const config: AppConfig = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    database: process.env.DATABASE || null,
};

export default config;