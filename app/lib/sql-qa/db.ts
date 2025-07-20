import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { SqlDatabase } from "langchain/sql_db";

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

/* ------------------------------------------------------------------*
 * 3. Initialise once and wrap with LangChain                        *
 * ------------------------------------------------------------------*/
const init = async () => {
  if (!dataSource.isInitialized) await dataSource.initialize();
  return SqlDatabase.fromDataSourceParams({ appDataSource: dataSource });
};

/** Export a promise that resolves to an initialised SqlDatabase. */
export const db = init();
