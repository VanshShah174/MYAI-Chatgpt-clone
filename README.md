# MYAI - ChatGPT Clone Project

This repository contains the code for a ChatGPT clone with both backend and client components. The project is structured into two parts: the backend server and the frontend client. This document will guide you through setting up and running both components.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [Environment Variables](#environment-variables)

## Project Structure

- **/backend**: Contains the server-side code for managing API requests, user authentication, and database interactions.
- **/client**: Contains the frontend code built with a modern web framework.

### Backend
The backend of this project is built with Node.js and uses the following dependencies:

- Express.js (API framework)
- MongoDB (Database)

### Client
The client is built with modern frontend tools and frameworks such as:

- Vite (Build tool)
- React.js (Frontend framework)
- ESLint (Code linting)

## Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [MongoDB](https://www.mongodb.com/) (for backend database)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for package management)

## Installation

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/your-repo-url.git
   cd chatgpt-clone
   \`\`\`

2. **Install dependencies for the backend**:
   \`\`\`bash
   cd backend
   npm install
   \`\`\`

3. **Install dependencies for the client**:
   \`\`\`bash
   cd ../client
   npm install
   \`\`\`

## Running the Project

### Backend

1. Ensure MongoDB is running on your machine or in the cloud.
2. Start the backend server:
   \`\`\`bash
   cd backend
   npm start
   \`\`\`
   The backend server should now be running on \`http://localhost:5000\`.

### Client

1. Start the frontend server:
   \`\`\`bash
   cd client
   npm run dev
   \`\`\`
   The client should now be running on \`http://localhost:3000\`.

## Environment Variables

Both the backend and client require \`.env\` files for configuration.

### Backend
Create a \`.env\` file in the \`backend/\` directory with the following variables:

\`\`\`
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
\`\`\`

### Client
The \`.env\` file in the \`client/\` directory might require additional variables, depending on external services like API keys.
