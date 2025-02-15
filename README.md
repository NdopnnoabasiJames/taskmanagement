Task Manager API

Overview

The Task Manager API is a backend service built using NestJS that allows users to manage their tasks. It provides features such as user authentication, task creation, updating, deletion, and retrieval.

Features

User authentication (register, login, password reset)

CRUD operations for tasks

Secure API endpoints using JWT authentication

Data validation and error handling

Technologies Used

NestJS (Node.js framework)

MongoDB (Database)

Mongoose (ODM for MongoDB)

JWT (Authentication)

Postman (API documentation & testing)

Installation

Prerequisites

Ensure you have the following installed:

Node.js (v16 or higher)

MongoDB

Setup

Clone the repository:

git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api

Install dependencies:

npm install

Create a .env file and configure environment variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000

Start the development server:

npm run start:dev

API Endpoints

Authentication Routes

Method

Endpoint

Description

POST

/api/v1/auth/register

Register a new user

POST

/api/v1/auth/login

Login a user

POST

/api/v1/auth/forgot-password

Request password reset

POST

/api/v1/auth/reset-password

Reset password

Task Routes

Method

Endpoint

Description

POST

/api/v1/tasks

Create a new task

GET

/api/v1/tasks

Get all user tasks

GET

/api/v1/tasks/:id

Get a single task by ID

PATCH

/api/v1/tasks/:id

Update a task

DELETE

/api/v1/tasks/:id

Delete a task

API Documentation

The full API documentation is available on Postman:View Documentation

Deployment

The API is deployed on Render. You can access it here:Task Manager API

License

This project is open-source and available under the MIT License.

Note: Update your-username in the GitHub link with your actual GitHub username if needed.



Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Ndopnnoabasi James
- LinkedIn - [Ndopnnoabasi James](https://www.linkedin.com/in/ndopnnoabasi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
