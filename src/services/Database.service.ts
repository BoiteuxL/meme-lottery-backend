"use strict";
import * as mongoDB from "mongodb";
import databaseConfig from "@/config/database.config";

/**
 * The MongoDB database service. Manages the connection to the database and holds important attributs
 * @static
 */
export default class DatabaseService {
    private static _db?: mongoDB.Db;
    private static _client?: mongoDB.MongoClient;
    private static _collections: Record<string, mongoDB.Collection> = {};

    /**
     * The db object for the database.
     *
     * @readonly
     */
    public static get db() : Readonly<mongoDB.Db> | null {
        if (!DatabaseService._db) return null;
        return DatabaseService._db;
    }

    /**
     * The client object for the database connection.
     *
     * @readonly
     */
    public static get client() : Readonly<mongoDB.MongoClient> | null {
        if (!DatabaseService._client) return null;
        return DatabaseService._client;
    }

    /**
     * The different collections in the database.
     *
     * @readonly
     */
    public static get collections() : Readonly<Record<string, mongoDB.Collection>> {
        return DatabaseService._collections;
    }

    /**
     * Opens the connection to the MongoDB database.
     * This function sets the client, db and collection attributes.
     *
     * @public
     * @static
     * @async
     */
    static async open(): Promise<void> {
        DatabaseService._client = new mongoDB.MongoClient(databaseConfig.connectionString);
        await DatabaseService._client.connect();
        DatabaseService._db = DatabaseService._client.db(databaseConfig.databaseName);

        databaseConfig.collections.forEach((collectionName: string) => {
            DatabaseService._collections[collectionName] = DatabaseService._db!.collection(collectionName);
        });

        console.log(`Successfully connected to database: ${DatabaseService._db.databaseName}`);
    }

    /**
     * Close the current connection and resets every attribute.
     *
     * @public
     * @static
     * @async
     */
    static async close(): Promise<void> {
        await DatabaseService._client?.close();

        DatabaseService._db = undefined;
        DatabaseService._client = undefined;
        DatabaseService._collections = {};
    }
}

