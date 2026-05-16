# Sales API

REST API built with Node.js, Express, and MongoDB.

## Requirements

- Node.js 18+
- MongoDB running locally on port 27017

## Setup

1. Clone the repository and install dependencies:
   npm install

2. Copy the example environment file and fill in your values:
   cp .env.example .env

3. The '.env' file should contain:
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/sales_db

## Run the project

npm run dev

Server starts at `http://localhost:3000`
