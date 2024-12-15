# Task Manager

Task Manager is a full-stack web application designed to help users manage tasks efficiently. It allows users to create, update, view, and delete tasks while ensuring secure authentication and seamless user experience.

## Features

- **User Authentication**:

  - Register with email, password, phone number, and avatar upload.
  - Login and maintain sessions using cookies.
  - Logout securely.

- **Task Management**:

  - Create, view, update, and delete tasks.
  - Filter tasks by status (completed, incomplete, archived).
  - User-friendly UI with responsive design.

- **Profile Page**:

  - View user details, including avatar, name, email, and phone number.

- **Image Upload**:

  - Avatar images are uploaded and managed using Cloudinary.

- **Secure Backend**:
  - Password hashing with bcrypt.
  - Authentication with cookies and JWT.

## Technologies Used

### Frontend

- **React**: For building a dynamic and responsive UI.
- **React Bootstrap**: For styling and responsive design.
- **Axios**: For making HTTP requests to the backend.
- **CSS**: For custom styling.
- **Vite**: For a fast and efficient development environment.

### Backend

- **Node.js**: For server-side logic.
- **Express.js**: For handling API endpoints.
- **MongoDB**: As the database to store user and task data.
- **Cloudinary**: For secure and efficient image uploads.
- **Bcrypt**: For hashing user passwords.
- **Cookie-parser**: For managing cookies.

### Tools

- **Postman**: For testing APIs.
- **Mkcert**: For generating self-signed SSL certificates for HTTPS during development.

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB
- Mkcert (optional for HTTPS in development)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   cd client && npm install
   ```

3. Create environment variables:

   - Create a `.env` file in the root directory and add:
     ```env
     PORT=4000
     MONGO_URI=<your_mongo_uri>
     JWT_SECRET=<your_jwt_secret>
     CLOUDINARY_CLIENT_NAME=<your_cloudinary_name>
     CLOUDINARY_CLIENT_API=<your_cloudinary_api_key>
     CLOUDINARY_CLIENT_SECRET=<your_cloudinary_secret>
     FRONTEND_URL=http://localhost:5173
     ```

4. Run the app:

   - Start the backend:
     ```bash
     npm run dev
     ```
   - Start the frontend:
     ```bash
     cd client
     npm run dev
     ```

5. Access the app:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:4000`

## API Endpoints

### Authentication

- **POST** `/api/v1/user/register`: Register a new user.
- **POST** `/api/v1/user/login`: Login a user.
- **GET** `/api/v1/user/self`: Get logged-in user details.
- **GET** `/api/v1/user/logout`: Logout the user.

### Tasks

- **GET** `/api/v1/task/mytask`: Get all tasks for the logged-in user.
- **POST** `/api/v1/task/create`: Create a new task.
- **PUT** `/api/v1/task/update/:id`: Update a task by ID.
- **DELETE** `/api/v1/task/delete/:id`: Delete a task by ID.

## HTTPS Setup (Optional for Development)

1. Install `mkcert`:
   ```bash
   choco install mkcert -y
   ```
2. Create certificates:
   ```bash
   mkcert -install
   mkcert localhost
   ```
3. Update `vite.config.js`:

   ```javascript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import fs from "fs";

   export default defineConfig({
     plugins: [react()],
     server: {
       https: {
         key: fs.readFileSync("./cert/localhost-key.pem"),
         cert: fs.readFileSync("./cert/localhost.pem"),
       },
     },
   });
   ```

## Future Enhancements

- Add support for internationalization (multi-language).
- Implement real-time task updates with WebSockets.
- Develop a mobile application using the same API.
- Add a dark mode toggle for better accessibility.
- Scale the application for high availability with Docker and Kubernetes.
