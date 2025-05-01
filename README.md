# Bit Happens – Student Team Members Management Application

A full stack web application built for managing student team member details including image uploads, roles, and academic background.

---

## Project Description

This app allows users to:
- Add new student team members along with their profile photo.
- View all team members as a responsive card layout.
- View detailed information about each member on a dedicated page.

Built using:
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Image Handling:** Multer
- **Tools:** Axios, React Router, MongoDB Compass, VS Code

---

## ⚙Installation Steps

### 🖥1. Clone the Repository

```bash
git clone https://github.com/A-Singh-1754/bit-happens.git
cd bit-happens
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with this content:

```
MONGO_URI=mongodb://127.0.0.1:27017/teamDB
```

Then start the backend:

```bash
node server.js
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## 🔗 API Endpoints

| Method | Endpoint              | Description                         |
|--------|------------------------|-------------------------------------|
| POST   | `/api/members`         | Add a new member                    |
| GET    | `/api/members`         | Get all members                     |
| GET    | `/api/members/:id`     | Get details of a specific member    |

All uploaded images are stored in the `uploads/` directory and served statically.

---

## How to Run the App

### 1. Start MongoDB (locally or with Atlas)

### 2. Start the Backend
```bash
cd backend
node server.js
```

### 3. Start the Frontend
```bash
cd frontend
npm start
```
