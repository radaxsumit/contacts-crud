import sqlite3 from "sqlite3";
import fs from "fs";
import path from "path";

export function initDb(dbFilePath) {
  const db = new sqlite3.Database(dbFilePath);

  const schemaPath = path.resolve("src/db/schema.sql");
  const schemaSql = fs.readFileSync(schemaPath, "utf-8");

  db.exec(schemaSql, (err) => {
    if (err) console.error("DB Schema init error:", err.message);
  });

  return db;
}
