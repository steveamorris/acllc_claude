# ACLLC (Advantage Consulting LLC) Application

## Overview

This is a full-stack web application for Anything Concrete LLC (ACLLC). It provides a platform for managing and displaying information about the company's services, customer testimonials, FAQs, and more. The application includes both admin CRUD operations and public-facing pages.

## Technologies Used

- Frontend:
  - React.js
  - Material-UI
- Backend:
  - Python (Flask)
- Database:
  - SQLite
- Deployment:
  - Docker
  - Docker Compose

## Project Structure

The project is divided into two main parts:

- `frontend/`: Contains the React.js application
- `backend/`: Contains the Python Flask application

## Setup and Installation

### Prerequisites

- Node.js and npm
- Python 3.7+
- Docker and Docker Compose (for deployment)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd acllc-claude
   ```

2. Set up the backend:
   ```
   cd backend
   pip install -r requirements.txt
   ```

3. Set up the frontend:
   ```
   cd ../frontend
   npm install
   ```

## Running the Application

### Development Mode

1. Start the backend server:
   ```
   cd backend
   python application.py
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Production Mode (using Docker)

1. Build and run the Docker containers:
   ```
   docker-compose up --build
   ```

2. The application will be available at `http://localhost:3000`

## Features and Usage

- Public pages:
  - Home page with hero section, problem framing, and solution details
  - About page
  - Testimonials
  - FAQs
  - Contact information

- Admin CRUD operations:
  - Manage problem framings
  - Manage solution details
  - Manage alternatives
  - Manage customer types
  - Manage FAQs
  - Manage outcome framings
  - Manage service types

## API Endpoints

The backend provides RESTful API endpoints for CRUD operations on various entities. Refer to the `backend/application.py` file for specific routes and their functionality.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is proprietary and confidential. All rights reserved by Advantage Consulting LLC.

---

For more detailed information about the React frontend, please refer to the [frontend README](frontend/README.md).