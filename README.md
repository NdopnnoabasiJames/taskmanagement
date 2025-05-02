# Task Manager API

## Table of Contents

- [Project Overview](#project-overview)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Authentication Routes](#authentication-routes)
- [Task Routes](#task-routes)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Testing Instructions](#testing-instructions)
- [Contributing](#contributing)
- [Stay in Touch](#stay-in-touch)

## Project Overview

The **Task Manager API** is a backend service built using **NestJS** that allows users to manage their tasks. It provides features such as user authentication, task creation, updating, deletion, and retrieval[ ](https://github.com/nestjs/nest)

## Project setup

### Prerequisities

Ensure you have the following installed:

* [Node.js](https://nodejs.org/ "Node.js Official Website") (v16 or higher)
* [MongoDB](https://www.mongodb.com/try/download/community "Get MongoDB")

### Setup

Clone the repository

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

Install dependencies

```bash
npm install
```

Create a **.env** file and configure environment variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

Start the development server

```bash
npm run start:dev
```

### Authentication Routes

| Method | Endpoint                        | Description            |
| ------ | ------------------------------- | ---------------------- |
| POST   | `api/v1/auth/register`        | Register a new user    |
| POST   | `<span>/api/v1/auth/login`    | Login a user           |
| POST   | `api/v1/auth/forgot-password` | Request password reset |
| POST   | `api/v1/auth/reset-password`  | Reset password         |

### Task Routes

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `api/v1/tasks`     | Create a new task       |
| GET    | `api/v1/tasks`     | Get all user tasks      |
| GET    | `api/v1/tasks/:id` | Get a single task by ID |
| PATCH  | `api/v1/tasks/:id` | Update a task           |
| DELETE | `api/v1/tasks/:id` | Delete a task           |

## Features

* User authentication (register, login, password reset)
* CRUD operations for tasks
* Secure API endpoints using JWT authentication
* Data validation and error handling

## Technologies Used

* **NestJS** (Node.js framework)
* **MongoDB** (Database)
* **Mongoose** (ODM for MongoDB)
* **JWT** (Authentication)
* **Postman** (API documentation & testing)

## API Documentation

The full API documentation is available on Postman:
[View Documentation](https://documenter.getpostman.com/view/32988679/2sAYX8Gznx " Taskmanager documentation")

## Deployment

The API is deployed on **Render**. You can access it here:
[Task Manager API](https://taskmanager-cwnq.onrender.com "Task Manager")

### Testing Instructions

To run tests, use the following command:

```bash
npm run test
```

Ensure that your test database is configured in the `.env` file.

### Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

Please ensure your code follows the project's coding standards and includes tests for new features.

## Stay in touch

- Author - [Ndopnnoabasi James](https://www.linkedin.com/in/ndopnnoabasi "Author on LinkedIn")
- GitHub - [Ndopnnoabasi James](https://github.com/NdopnnoabasiJames "Author on Github")
- Email - [Send mail](ndopnnoabasijames@gmail.com "Send Email")
