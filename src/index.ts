"use strict";

import app from './App';
import appConfig from './config/app.config';
import DatabaseService from "./services/Database.service";

app.listen(appConfig.port, async () => {
    console.log(`Server running on port ${appConfig.port}`);
    await DatabaseService.open();
});

