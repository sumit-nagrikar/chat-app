# Chat Now

Chat Now is a modern, real-time chat application built with **React**, **Node.js**, **MongoDB**, **Express** and **Socket.io**. It allows users to create accounts, sign in, and interact with each other in a seamless, chat environment. With features like real-time messaging and a clean, dark UI, this app provides an engaging user experience.

## Features
- **Real-Time Messaging**: Communicate instantly with others in a chat room.
- **User Authentication**: Secure sign-up, login, and logout functionality.
- **Responsive Design**: Mobile-first, adaptive layout using **Tailwind CSS**.
- **Dark Mode UI**: A stylish dark theme with blue and cyan accents inspired by popular messaging apps.
- **Message Management**: Send, receive, and manage messages efficiently.

## Technologies Used
- **Frontend**: 
  - React.js (for building the user interface)
  - Tailwind CSS (for styling and responsiveness)
  - Axios (for API calls)
- **Backend**:
  - Node.js (for server-side logic)
  - Express.js (for building the API)
  - MongoDB (for database management)
- **Authentication**: JWT (JSON Web Tokens) for secure user authentication
- **Real-Time Communication**: Socket.io (for real-time messaging)

## Setup

## Run the Application Locally

### Prerequisites

Before running the application locally, ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas for cloud database)
- **Git** (for cloning the repository)

### Steps to Run Locally

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/sumit-nagrikar/chat-app.git

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies for both the backend and frontend.

- For the **Backend**:

  ```bash
  cd chat-app/backend
  npm install

- For the **Frontend**:
  ```bash
  cd chat-app/frontend
  npm install

### 3. Set Up Environment Variables
  - Both the frontend and backend require environment variables for configuration. Create a .env file in both the frontend and backend folders.
  - In the backend .env, add the following:
    ```bash
    MONGO_URI=your_mongo_database_url
    JWT_SECRET=your_jwt_secret_key
### 4. Start the Backend Server
  - Navigate to the backend directory and start the server:
    ```bash
    cd we-chat/backend
    npm start
  - - The backend will be running on http://localhost:5000 by default.
### 5. Start the Frontend Server
  - Open another terminal window and navigate to the frontend directory. Start the React development server:
    ```bash
    cd chat-app/frontend
    npm start
  - The frontend will be running on http://localhost:3000 by default.
### 6. Access the Application
  - Open your web browser and go to:
    ```bash
    http://localhost:3000
  - You should now see the Chat Now app running locally.



