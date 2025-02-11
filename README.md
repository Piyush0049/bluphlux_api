# Interview Scheduling Application - Backend

Hi, I'm Piyush Joshi. This project is the backend for the Interview Scheduling application, responsible for handling API requests, scheduling logic, and email notifications. The backend is built with Node.js, Express, and TypeScript, providing a reliable and efficient service for managing interviews.

## Assignment Overview

This project was developed as part of an assignment with the following requirements:

### Interview Scheduling
- Display a list of available time slots.
- Allow users to schedule an interview by selecting:
  - Candidate name.
  - Interviewer name.
  - Date and time slot.
  - Interview type (e.g., Technical, HR, Behavioral).
- Validate for conflicts (e.g., overlapping interviews for the same interviewer or candidate).

### Interview Dashboard
- Provide API endpoints for retrieving scheduled interviews.
- Enable filtering by date, interviewer, or candidate.

### Rescheduling/Editing Interviews
- Allow updates to an interview’s details (e.g., time or interviewer).
- Persist changes seamlessly.

### Deleting Interviews
- Enable deleting scheduled interviews with confirmation.

### Notifications
- Integrate Nodemailer to send email notifications upon scheduling, updating, or deleting interviews.

## Features
- **RESTful API:** Provides endpoints for managing interviews.
- **Conflict Validation:** Ensures no overlapping schedules.
- **Email Notifications:** Uses Nodemailer for sending interview-related emails.
- **Environment-Based Configuration:** Supports both development and production setups.
- **TypeScript Support:** Ensures type safety and maintainability.

## Technologies Used

### Backend:
- Node.js
- Express.js
- TypeScript
- Nodemailer
- CORS
- dotenv

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Piyush0049/bluphlux_api.git
cd bluphlux_api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add the required environment variables:
```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
CLIENT_URL="https://bluphlux-ui.vercel.app"
```

### 4. Run the Server

#### For development:
```bash
npm run dev
```

#### For production:
```bash
npm run build
npm start
```

## Scripts Overview

- `npm run dev` - Runs the server in development mode with Nodemon.
- `npm run build` - Compiles TypeScript files into JavaScript.
- `npm start` - Runs the compiled JavaScript server in production mode.


