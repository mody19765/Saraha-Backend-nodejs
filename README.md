# 🕵️ Sarahah App (Anonymous Messaging Platform)

An anonymous messaging platform inspired by Sarahah, built with Node.js, Express, and PostgreSQL. Designed for users to receive honest anonymous feedback via shareable chat links. Originally intended for employee feedback, now used widely for fun and communication.

## 🚀 Features

- JWT Authentication (Signup / Login)
- Anonymous message sending
- User profile with shareable link
- Role-based: only registered users can view messages they receive
- PostgreSQL with Sequelize ORM
- Email verification
- Secure password hashing

## 📁 Project Structure

Sarahah-App/
├── config/         → PostgreSQL database connection  
├── controllers/    → Handles logic for auth, users, messages  
├── middlewares/    → Auth, validation, error handling  
├── models/         → Sequelize models (User, Message)  
├── routes/         → Express routes  
├── services/       → Core business logic (messaging, user)  
├── utils/          → Email, token, helpers  
└── index.js        → Entry point  

## 🔧 Installation

1. Clone the repository:  
   `git clone https://github.com/mody19765/sarahah-app.git`  
   `cd sarahah-app`

2. Install dependencies:  
   `npm install`

3. Create `.env` file:

4. Run the app:  
`npm start`

## 🔑 API Endpoints

### Auth
- `POST /signup` → Register new user  
- `POST /login` → User login  
- `POST /verify-email` → Email verification  
- `POST /forgot-password` → Request password reset  
- `POST /reset-password` → Reset password  

### Messages
- `POST /messages/:username` → Send anonymous message to user  
- `GET /messages` → Authenticated user retrieves their own messages  
- `DELETE /messages/:id` → Delete a specific message  

### User
- `GET /me` → Get authenticated user profile  
- `PATCH /me` → Update user profile  

## 📦 Database Models

**User**  
- id, username, email, password (hashed), verified (boolean)

**Message**  
- id, content, receiverId (user), createdAt

## ✅ Upcoming Features

- Reactions to messages  
- Block anonymous senders  
- Admin moderation tools  
- Mobile-friendly frontend  
- Real-time notifications

## 📫 Contact

Mostafa Mody  
Email: [mody.dev19765@gmail.com](mailto:mody.19765@gmail.com)  
GitHub: [https://github.com/mody19765](https://github.com/mody19765)

## ⭐️ Support

If you found this app useful, drop a ⭐️ and share it!
