import dotenv from "dotenv";
dotenv.config();

import { initDb } from "./db/database.js";
import { createApp } from "./app.js";

const PORT = process.env.PORT || 5000;
const DB_FILE = process.env.DATABASE_FILE || "./contacts.db";

const db = initDb(DB_FILE);
const app = createApp(db);

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
