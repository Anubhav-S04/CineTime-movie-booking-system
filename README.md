# 🎬 BookMyShow Clone

A fully functional, production-grade movie ticket booking platform inspired by BookMyShow, built with a strong focus on **real-world system design, concurrency handling, and seamless user experience**.

This application replicates the complete booking workflow—from browsing movies to selecting seats and completing bookings—while solving critical backend challenges like **seat locking, race conditions, and data consistency**.

---

## 🚀 Features

- 🎥 Movie browsing with show timings  
- 🪑 Interactive and responsive seat selection system  
- 🔒 **Time-based seat locking (2-minute window)**  
- ⏳ Live seat states: Available / Locked / Booked  
- 💳 Secure booking flow with backend validation  
- ⚠️ Robust prevention of double booking  
- 📱 Fully responsive modern UI  

---

## 🧠 Core System Design

At the heart of this application is a **time-based seat locking mechanism**, designed to handle concurrent users efficiently:

- Seats are locked for a fixed duration when selected  
- Locked seats are instantly unavailable to other users  
- Lock automatically expires if booking is not completed  
- Only the locking user can confirm the booking within the time window  
- Backend enforces strict validation to maintain consistency  

This ensures a **reliable and conflict-free booking experience**, similar to real-world ticketing systems.

---

## 🏗️ Tech Stack

### Frontend
- React.js  
- Tailwind CSS  

### Backend
- Node.js  
- Express.js  
- TypeScript  

### Database
- MongoDB with Mongoose  

---

## 🧩 Architecture

The project follows a clean and scalable architecture:

- **Models** → Database schemas and structure  
- **Controllers** → Request and response handling  
- **Services** → Core business logic and validation  

This separation ensures maintainability, readability, and scalability.

---

## 🔄 Booking Workflow

1. User selects a movie and show  
2. Seats are chosen via an interactive layout  
3. Backend validates availability  
4. Seats are locked for a limited time  
5. User completes booking within the time window  
6. Seats are permanently marked as booked  
7. Expired locks are automatically released  

---

## ⚙️ Key Concepts Implemented

- State-driven UI with React  
- RESTful API design  
- Scalable schema modeling with Mongoose  
- Time-based locking using timestamps  
- Concurrency handling and race condition prevention  
- Clean separation of concerns in backend architecture  

---

## 🛠️ Setup Instructions

### Clone repository
```bash
git clone https://github.com/your-username/bookmyshow-clone.git
cd bookmyshow-clone
```

### Install dependencies
```bash
# frontend
cd client
npm install

# backend
cd ../server
npm install
```

### Run the project
```bash
# start backend
cd server
npm run dev

# start frontend
cd ../client
npm run dev
```

---

## 💡 Project Significance

This project is not just a UI clone but a **complete system implementation** that addresses real-world challenges in booking platforms, particularly:

- Managing simultaneous user actions  
- Preventing conflicting transactions  
- Ensuring consistent and reliable data handling  

---

## 👨‍💻 Author

Developed to demonstrate strong understanding of **full-stack development, backend architecture, and system design principles**.

---

## ⭐ Support

If you find this project valuable, consider giving it a star ⭐