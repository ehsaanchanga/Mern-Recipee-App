# MERN Recipe App

A full-stack recipe management application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The app includes JWT authentication and allows users to create and save recipes.

## Features
- **User Authentication**: Secure login and registration using JWT authentication.
- **Create Recipes**: Users can add new recipes with ingredients, steps, and images.
- **Save Recipes**: Users can save their favorite recipes to their profile.
- **View All Recipes**: Browse and search through a collection of recipes.

## Tech Stack
- **Frontend**: React.js, React Router, Tailwind CSS (or your preferred styling framework)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ORM)
- **Authentication**: JSON Web Token (JWT), bcrypt for password hashing

## Installation & Setup

### 1. Clone the Repository
```sh
git clone [your-repo-link]
cd mern-recipe-app
```

### 2. Install Dependencies
#### Backend
```sh
cd server
npm install
```
#### Frontend
```sh
cd client
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the **server** folder and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Start the Application
#### Start Backend Server
```sh
cd server
npm start
```
#### Start Frontend Client
```sh
cd client
npm start
```
---
Enjoy cooking with **MERN Recipe App**! 🍽️

