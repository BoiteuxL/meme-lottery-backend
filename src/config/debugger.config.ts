"use strict";

import dotenv from 'dotenv';
dotenv.config();


interface DebuggerConfig {
    logger: {
        enabled: boolean;
        specific: boolean;
        timestamp: boolean;
    }
}

const debuggerConfig: DebuggerConfig = {
    logger: {
        enabled: Boolean(process.env.DEBUG_LOGGER_ENABLED) || true,
        specific: Boolean(process.env.DEBUG_LOGGER_SPECIFIC) || true,
        timestamp: Boolean(process.env.DEBUG_LOGGER_TIMESTAMP) || true,
    }
};

export default debuggerConfig;