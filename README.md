
# 💸 Expense Tracker (MERN + MySQL)

A full-stack Expense Tracker web application that allows users to register, login, and manage their income and expenses. It uses React (Vite) on the frontend, Express and MySQL on the backend, with LocalStorage integration and API-based data management.

---

## 🧩 Features

- 🔐 **User Authentication** (Register & Login)
- 💾 **MySQL Database Integration**
- ➕ **Add Income & Expenses**
- 📊 **Transaction Listing & Deletion**
- 💻 **LocalStorage** support to enhance user experience
- 📡 **RESTful APIs** to manage all transactions
- 🎨 **React Vite Frontend** with reusable components
- 🌐 **CORS Enabled for API Calls**

---

## 📁 Folder Structure

```
Expense-Tracker/
├── frontend/ # React Vite App
│   ├── src/
│   │   ├── components/       # UI components like Tracker, AddTransaction, etc.
│   │   ├── pages/            # Login, Register, Dashboard
│   │   ├── App.jsx           # App routes and structure
│   │   └── api.js            # Axios API connection
├── backend/  # Express + MySQL Backend
│   ├── controllers/          # auth and expense controllers
│   ├── routes/               # API route files
│   ├── models/               # MySQL models
│   ├── config/db.js          # MySQL connection config
│   └── server.js             # Main server entry
```

---

## 🛠️ Technologies Used

- **Frontend:** React.js, Vite, Axios, Tailwind CSS
- **Backend:** Express.js, MySQL, bcrypt, jsonwebtoken
- **Storage:** MySQL + LocalStorage

---

## 🧪 Example API Responses

### 🔐 Register

**POST** `/api/auth/register`
```json
{
  "username": "root",
  "email": "abc@example.com",
  "password": "root"
}
```
**Response:**
```json
{
  "message": "User registered successfully"
}
```

### 🔐 Login

**POST** `/api/auth/login`
```json
{
  "email": "shahzaib@example.com",
  "password": "123456"
}
```
**Response:**
```json
{
  "token": "eyJhbGciOi...",
  "user": {
    "id": 1,
    "username": "shahzaib"
  }
}
```

### 💰 Add Expense

**POST** `/api/expenses/`
```json
{
  "amount": 500,
  "description": "Grocery",
  "type": "expense",
  "userId": 1
}
```
**Response:**
```json
{
  "message": "Expense added successfully"
}
```

---

## 🧱 Database Schema (MySQL)

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    description TEXT,
    type ENUM('income', 'expense') NOT NULL,
    userId INT,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## 🚀 How to Run the Project

### 🔧 Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your `.env` file:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=expense_tracker
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### 🌐 Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Run the frontend development server:
   ```bash
   npm run dev
   ```

4. Visit: `http://localhost:5173`

---

## 📌 Tips

- Make sure MySQL server is running and the database is created.
