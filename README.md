Mini Event Tracker

Mini Event Tracker is a full-stack web application that allows users to create an account, log in, create events, view and filter their events, and share events publicly using a unique link.

Features:

- User registration and login with JWT authentication
- Create events with title, date & time, location, and optional description
- View your events on a dashboard
- Filter events by upcoming or past
- Share events publicly via a unique link
- Responsive design using Bootstrap

Tech Stack:

Backend: Django + Django REST Framework - Quick REST API development with authentication
Frontend: React + Bootstrap - Responsive and beginner-friendly UI
Database: SQLite - Lightweight, no extra setup required
Authentication: JWT - Standard token-based authentication
HTTP Requests: Fetch API - Simple and easy to use

Setup Instructions:

1. Clone the repository:
   git clone https://github.com/formygithub9/Mini-Event-Tracker.git
   cd Mini-Event-Tracker

Backend Setup:

1. Go to backend folder:
   cd backend

2. Create and activate virtual environment:
   Windows:
      python -m venv venv
      venv\Scripts\activate
   Linux/MacOS:
      python -m venv venv
      source venv/bin/activate

3. Install dependencies:
   pip install -r requirements.txt

4. Apply migrations:
   python manage.py migrate

5. (Optional) Create superuser:
   python manage.py createsuperuser

6. Run the backend server:
   python manage.py runserver
   (Backend runs at http://127.0.0.1:8000/)

Frontend Setup:

1. Open a new terminal and go to frontend folder:
   cd frontend

2. Install dependencies:
   npm install

3. Start the frontend server:
   npm start
   (Frontend runs at http://localhost:3000/)

Usage:

- Sign up for a new account via /signup
- Log in using your credentials via /login
- Navbar displays username and options to create events, view dashboard, logout
- Create events via /create
- View events on the dashboard and filter by upcoming/past
- Copy share links for events to allow others to view without login

Project Structure:

Mini-Event-Tracker/
├─ backend/
│  ├─ accounts/          # User authentication app
│  ├─ events/            # Event management app
│  ├─ minieventtracker/  # Django project settings
│  ├─ db.sqlite3         # Database
│  ├─ manage.py
│  └─ requirements.txt
├─ frontend/
│  ├─ src/
│  │  ├─ pages/          # Signup, Login, Dashboard, CreateEvent, ShareEvent
│  │  ├─ components/     # Navbar, EventCard, etc.  
│  ├─ package.json
│  └─ public/
└─ readme.md

Notes:

- JWT token stored in localStorage for demo purposes
- Bootstrap used for responsive design
- SQLite chosen for simplicity
- Share link allows viewing only, no editing/deleting
- Backend provides basic validation and error handling
- Run backend first, then frontend

Backend API Endpoints:

- POST /api/accounts/signup/ → Create user
- POST /api/accounts/login/ → Login and receive JWT
- GET /api/accounts/me/ → Get current user info
- POST /api/events/ → Create event
- GET /api/events/?filter=upcoming|past → Get user events with filter
- GET /api/events/share/<token>/ → View public event

Frontend Pages:

- /signup → User registration
- /login → Login page
- /create → Create event
- / → Dashboard showing events
- /share/:token → Public share page

The project is now ready to be cloned and run locally.