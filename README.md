# 🎬 CineTime

![React](https://img.shields.io/badge/Frontend-React-blue)
![Tailwind](https://img.shields.io/badge/UI-TailwindCSS-38bdf8)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Server-Express.js-black)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Mongoose](https://img.shields.io/badge/ODM-Mongoose-red)

A **full-stack movie ticket booking web application** inspired by BookMyShow, built with a strong focus on **real-world system design, concurrency handling, and seamless booking experience**.

This project simulates a complete ticket booking system with **interactive seat selection, time-based seat locking, and secure booking flow**, solving real backend challenges like **race conditions and double booking**.

---

# 🌐 Deployment

Frontend  
https://your-frontend-url.vercel.app

Backend API  
https://your-backend-url.onrender.com

---

# 📦 Features

## 👤 User Features

- Browse movies and show timings  
- JWT Authentication
- Email OTP verification
- View movie details  
- Select show and theater  
- Interactive seat selection  
- Real-time seat status (Available / Locked / Booked)  
- Secure booking flow  
- Booking confirmation  

---

## 🪑 Seat Selection System

- Dynamic seat grid layout  
- Visual seat states:
  - 🟢 Available  
  - 🟡 Locked  
  - 🔴 Booked  
- Toggle seat selection  
- Prevents selecting unavailable seats  

---

## 🔒 Seat Locking System (Core Feature)

- Seats are **locked for 2 minutes** when selected  
- Locked seats are **temporarily unavailable to other users**  
- Lock expires automatically if booking is not completed  
- Only the locking user can confirm the booking  
- Prevents **double booking and race conditions**  

---

## 📦 Booking System

- Backend validation before booking  
- Ensures seats are still locked by the same user  
- Converts locked seats → booked seats  
- Maintains data consistency under concurrent requests  

---

# 🧠 Tech Stack

## Frontend

- React.js  
- Tailwind CSS  

## Backend

- Node.js  
- Express.js  
- TypeScript  

## Database

- MongoDB Atlas  
- Mongoose  

---

# 🏗 Architecture

```
Browser
│
▼
Frontend (React + Tailwind)
│
▼
Backend API (Node + Express + TypeScript)
│
▼
MongoDB Atlas
```

---

# 📁 Project Structure

```
CineTime
├── client
│   ├── src
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── utils/
│
└── server
    ├── src
    │   ├── controllers/
    │   ├── routes/
    │   ├── models/
    │   ├── services/
    │   ├── middleware/
    │   └── config/
    ├── index.ts
    └── package.json
```

---

# ⚙️ Installation (Run Locally)

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Anubhav-S04/CineTime-movie-ticket-booking
```

---

## 2️⃣ Install dependencies

```bash
# frontend
cd client
npm install

# backend
cd ../server
npm install
```

---

## 3️⃣ Create `.env` file

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 4️⃣ Start backend server

```bash
npm run dev
```

---

## 5️⃣ Start frontend

```bash
cd ../client
npm run dev
```

---

# 🔐 Backend Logic Highlights

- Time-based seat locking using timestamps  
- Lock ownership validation (`lockedBy`)  
- Expiry-based unlocking (no cron required)  
- Atomic updates to reduce race conditions  
- Clean architecture (Controller → Service → Model)  

---

# 🔄 Booking Flow

1. User selects seats  
2. Backend validates availability  
3. Seats are locked for 2 minutes  
4. Frontend timer starts  
5. User confirms booking within time  
6. Seats are marked as booked  
7. Expired locks are automatically released  

---

# ⚠️ Problems Solved

- Preventing **double booking**  
- Handling **simultaneous seat requests**  
- Managing **time-based seat states**  
- Maintaining **consistent data under concurrency**  

---

# 📸 Screenshots (Optional)

_Add your UI screenshots here_

---

# 🚀 Project Significance

This project is not just a UI clone but a **system design-focused application** that demonstrates:

- Real-world backend problem solving  
- Scalable architecture design  
- Concurrency handling techniques  
- Practical implementation of booking systems  

---

**Anubhav Saha**

GitHub  
https://github.com/Anubhav-S04

