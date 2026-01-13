import express from "express";
import { validateContactPayload } from "../utils/validators.js";

export function contactsRouter(db) {
  const router = express.Router();

  // GET list (supports ?q= search)
  router.get("/", (req, res) => {
    const q = (req.query.q || "").trim().toLowerCase();

    const sql = q
      ? `SELECT * FROM contacts
         WHERE LOWER(name) LIKE ? OR LOWER(email) LIKE ?
         ORDER BY created_at DESC`
      : `SELECT * FROM contacts ORDER BY created_at DESC`;

    const params = q ? [`%${q}%`, `%${q}%`] : [];

    db.all(sql, params, (err, rows) => {
      if (err) return res.status(500).json({ message: "Database error." });
      res.json(rows);
    });
  });

  // GET single
  router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.get("SELECT * FROM contacts WHERE id = ?", [id], (err, row) => {
      if (err) return res.status(500).json({ message: "Database error." });
      if (!row) return res.status(404).json({ message: "Contact not found." });
      res.json(row);
    });
  });

  // POST create
  router.post("/", (req, res) => {
    const { name, email, phone } = req.body;

    const errors = validateContactPayload({ name, email, phone });
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: "Validation failed.", errors });
    }

    const sql = `INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)`;
    db.run(sql, [name.trim(), email.trim().toLowerCase(), phone.trim()], function (err) {
      if (err) {
        if (err.message.includes("UNIQUE")) {
          return res.status(409).json({ message: "Email already exists." });
        }
        return res.status(500).json({ message: "Database error." });
      }

      db.get("SELECT * FROM contacts WHERE id = ?", [this.lastID], (e2, row) => {
        if (e2) return res.status(500).json({ message: "Database error." });
        return res.status(201).json(row);
      });
    });
  });

  // PUT update (full)
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const errors = validateContactPayload({ name, email, phone });
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: "Validation failed.", errors });
    }

    const sql = `
      UPDATE contacts
      SET name = ?, email = ?, phone = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    db.run(
      sql,
      [name.trim(), email.trim().toLowerCase(), phone.trim(), id],
      function (err) {
        if (err) {
          if (err.message.includes("UNIQUE")) {
            return res.status(409).json({ message: "Email already exists." });
          }
          return res.status(500).json({ message: "Database error." });
        }

        if (this.changes === 0) return res.status(404).json({ message: "Contact not found." });

        db.get("SELECT * FROM contacts WHERE id = ?", [id], (e2, row) => {
          if (e2) return res.status(500).json({ message: "Database error." });
          res.json(row);
        });
      }
    );
  });

  // DELETE
  router.delete("/:id", (req, res) => {
    const { id } = req.params;

    db.run("DELETE FROM contacts WHERE id = ?", [id], function (err) {
      if (err) return res.status(500).json({ message: "Database error." });
      if (this.changes === 0) return res.status(404).json({ message: "Contact not found." });

      res.json({ message: "Contact deleted successfully." });
    });
  });

  return router;
}
