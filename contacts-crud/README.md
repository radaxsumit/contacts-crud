# Contacts Manager CRUD App (React + Express + SQLite)

A simple full-stack CRUD (Create, Read, Update, Delete) Contacts Manager web application.

## ✅ Features (Must Have)
- Create a contact (name, email, phone)
- View all contacts (list/table)
- View single contact details
- Update contact
- Delete contact
- Validation (required fields, valid email format, phone digits 10–15)
- Unique email constraint with proper error message
- Clean UI using React + Tailwind CSS
- Persistent storage using SQLite

## ⭐ Bonus Features
- Search contacts by name or email
- Clear error handling (e.g., duplicate email)

---

## 🧰 Tech Stack
**Frontend:** React (Vite) + Tailwind CSS  
**Backend:** Node.js + Express  
**Database:** SQLite

---

## ⚙️ Setup Instructions

### 1) Clone the repository
```bash
git clone https://github.com/<your-username>/contacts-crud.git
cd contacts-crud


2) Backend Setup (Express + SQLite)
cd backend
npm install
node src/server.js

3) Frontend Setup (React + Tailwind)

Open a new terminal:

cd frontend
npm install
npm run dev

🔗 REST API Endpoints

Base URL: http://localhost:5000/api/contacts

GET /api/contacts → List all contacts (supports ?q= search)

GET /api/contacts/:id → Get one contact

POST /api/contacts → Create contact

PUT /api/contacts/:id → Update contact

DELETE /api/contacts/:id → Delete contact