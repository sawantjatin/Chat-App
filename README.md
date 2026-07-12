# 💬 Real-Time Chat App

A modern real-time chat application built using the **MERN Stack** with **Socket.IO** for instant messaging. Users can securely sign up, log in, update their profile, and chat with others in real time.

## 🚀 Features

- 🔐 User Authentication (Signup, Login, Logout)
- 💬 Real-time messaging using Socket.IO
- 🟢 Online/Offline user status
- 🖼️ Profile picture upload with Cloudinary
- 🔒 JWT Authentication with HTTP-only Cookies
- 📱 Responsive UI
- 🎨 Modern interface built with React & Tailwind CSS
- ⚡ Fast frontend using Vite
- 🌐 REST API with Express.js
- 🗄️ MongoDB database with Mongoose

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- Zustand (State Management)
- React Router DOM
- Socket.IO Client

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- Bcrypt.js
- Cookie Parser
- Cloudinary
- Dotenv

## 📂 Project Structure

```
Chat-App/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── lib/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/sawantjatin/Chat-App.git
cd Chat-App
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 4. Create Environment Variables

Inside the **backend** folder, create a `.env` file.

```env
PORT=5001

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

## ▶️ Run the Application

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

## 📸 Screenshots

Add screenshots of your application here.

```
Home Page
Login
Signup
Chat Screen
Profile
```

## 📌 Future Improvements

- ✅ Group Chats
- ✅ Message Reactions
- ✅ Typing Indicators
- ✅ Read Receipts
- ✅ Voice Messages
- ✅ Video Calling
- ✅ File & Image Sharing
- ✅ Message Search
- ✅ Push Notifications
- ✅ Emoji Support

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

## 👨‍💻 Author

**Jatin Sawant**

- GitHub: https://github.com/sawantjatin
- LinkedIn: https://www.linkedin.com/in/jatin-sawant-b60331375/

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.

---

Made with ❤️ using the MERN Stack.
