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
```git clone https://github.com/echewisi/food-ordering-app.git``` 
cd food-ordering-app


2. **Install dependencies**:


3. **Set up environment variables**:
Create a `.env` file in the root directory with the following values:
DB_NAME=your_database_name 
DB_USERNAME=your_db_username 
DB_PASSWORD=your_db_password 
DB_HOST=localhost 
PORT=3000


5. **Start the server**:
```npx nodemon src/server.ts```


## API Endpoints
_note_: INSTALL REST CLIENT EXTENSTION ON VSCODE IF YOU WISH TO USE THE ```requests.http``` to test the endpoints
Here are the available API endpoints:

### Users
- `GET /users` - Fetch all users.
- `POST /users` - Create a new user.
- `DELETE /users/:id` - Delete a user by ID.

### Orders
- `GET /orders` - Fetch all orders.
- `POST /orders` - Create a new order.
- `PATCH /orders` - Cancel an order.
- `DELETE /orders/:id` - Delete an order by ID.

### Reports
- `GET /orders/end-of-day-report` - Fetch a report of the total number of orders and total amount at the end of the day.

## License

This project is licensed under the MIT License.
 ​​






