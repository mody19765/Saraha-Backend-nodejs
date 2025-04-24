# 🕵️‍♂️ Saraha – Anonymous Messaging App (Backend)

Saraha is a backend system for an anonymous messaging platform where users can register, create shareable chat links, and receive anonymous feedback. It was initially built to allow employees to provide candid feedback to employers and has gained popularity for anonymous communication among individuals.

## 🚀 Key Features

- 🧑‍💻 **User Registration & Login**: Users can sign up and securely log in using JWT-based authentication.
- 🔗 **Public Shareable Links**: Each user receives a unique link they can share publicly to collect anonymous messages.
- 📨 **Anonymous Messaging**: Anyone with the link can send a message without logging in.
- 🛡️ **Token-Based Authentication**: Ensures secure user sessions and prevents unauthorized access.
- 📄 **Message Management**: Authenticated users can view messages received on their profiles.

## ⚙️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API Architecture**: RESTful APIs
- **Environment Management**: dotenv

## 📁 Folder Structure
Saraha-Backend-nodejs/ 
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── .env.example
└── server.js

## 🧪 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mody19765/Saraha-Backend-nodejs.git
cd Saraha-Backend-nodejs
```

 ## 📌 API Endpoints

   - ** POST /register** – Register a new user

   - ** POST /login** – Login and receive token

  - **  POST /send/:username **– Send anonymous message to a user

  - **  GET /messages ** – Get all messages for the logged-in user (auth required)


MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the “Software”), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.

