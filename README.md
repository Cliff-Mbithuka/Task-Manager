

# TASK MANAGER APPLICATION BY KIPRONO VINCENT. 

- A full-stack Task Manager application that allows users to create, update, read, and delete tasks. It features a React frontend and a Node.js/Express.js backend, with MongoDB as the database.

## Table of Contents

### Frontend

* Features
* Setup
* Technologies Used

### Backend

* Features
* Setup
* Technologies Used

### Folder Structure

## Frontend

### Features

- User-friendly task management interface.
- Create, view, edit, and delete tasks.
- Responsive design using PrimeReact components.
- Real-time updates with seamless integration to the backend.

## Setup

### Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependancies
   ```bash
   npm install
   ```
3. Run development Server
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser.

### Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependancies
   ```bash
   npm install
   ```
3. Configure your environment variables: Create a .env file in the backend folder with the following:
   ```bash
   PORT=2999
   MONGO_URI=mongodb://127.0.0.1:27017/task-manager
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Access Swagger API documentation: Open http://localhost:2999/api-docs in your browser.

## Summary of Approach
### Structure 
- The application follows an MVC (Model-View-Controller) architecture for code organization.
- Backend services are implemented using Node.js and Express for routing and API logic.
### Database
- MongoDB is used for data persistence.
- Mongoose is used for schema design and database interactions.
### Swagger Documentation
- Swagger UI is integrated for API documentation to provide clear instructions and testing capabilities.
## Assumptions
### Authentication
- The API currently does not include user authentication but can be extended with JWT for secured access.
### Data Validation
- Basic validation is assumed to be handled at the frontend. The backend implements additional validation with Mongoose schemas.
## Limitations
### Scalability
- The current implementation is designed for a single-user application. Multi-user functionality requires role-based access control (RBAC) and user authentication mechanisms.