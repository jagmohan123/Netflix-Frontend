# Netflix Clone

This project is a Netflix clone built using modern web technologies. It includes features for user authentication, movie search, and categorizing movies by genre.
The goal of this project is to provide a seamless user experience similar to the original Netflix interface.

## Features

- **User Authentication**: Sign up, login, and secure user sessions.
- **Movie Search**: Search for movies by title.
- **Movie Categories**: Browse movies by categories/genres.
- **Responsive Design**: Mobile-first approach ensuring compatibility across different devices.

## Tech Stack

- **Frontend**: React, Redux, HTML5, CSS3, Tailwind CSS.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB, for connectivity with MongoDB use mongoose.
- **Authentication**: JSON Web Tokens (JWT)
- **API**: The Movie Database (TMDb) API

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- TMDb API key

## Usage
# Authentication
Sign Up: Create a new account using your email and password.
Login: Access your account with your credentials.
Logout: Securely log out of your account.

# Movie Search
Use the search bar to find movies by their title.
Results will be displayed in real-time as you type.

# Movie Categories
Browse movies categorized by genres.
Select a category to view movies belonging to that genre.


# Netflix Clone folder structure.

├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── config/
|   └──.env

├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── mainContent/
│   │   ├── reducers/
│   │   ├── services/
│   │   ├── slice/
│   │   ├── utils/
│   │   ├── usable_hooks/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tailwind.config.js


# Acknowledgments
The Movie Database (TMDb) API for movie data.
React
Node.js
Express.js
MongoDB
