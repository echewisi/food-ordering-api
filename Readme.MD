# Food Ordering App

This is a simple backend API built using Node.js, Express, and PostgreSQL with Sequelize ORM. The application allows users to create and manage users and orders, as well as generate end-of-day reports.

## Features

- **User Management**:
  - `GET /users` - Fetch all users
  - `POST /users` - Create a new user
  - `DELETE /users/:id` - Delete a user by ID

- **Order Management**:
  - `GET /orders` - Fetch all orders
  - `POST /orders` - Create a new order
  - `PATCH /orders` - Cancel an order
  - `DELETE /orders/:id` - Delete an order by ID

- **Reports**:
  - `GET /orders/end-of-day-report` - Fetch a report of the total number of orders and total amount at the end of the day.

## Technologies Used

- Node.js
- Express
- PostgreSQL
- Sequelize
- TypeScript

## Setup Instructions

1. **Clone the repository**:
