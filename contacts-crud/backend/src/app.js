import express from "express";
import cors from "cors";
import { contactsRouter } from "./routes/contacts.routes.js";

export function createApp(db) {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => res.json({ status: "OK", service: "contacts-api" }));

  app.use("/api/contacts", contactsRouter(db));

  app.use((req, res) => res.status(404).json({ message: "Route not found" }));

  return app;
}
