# ASTU Smart Complaint & Issue Tracking System

![ASTU Logo](frontend/assets/img/astu-logo.png)

A role-based complaint management system for Adama Science and Technology University (ASTU). The application provides distinct dashboards and workflows for **students**, **staff**, and **administrators**, enabling efficient submission, assignment, and resolution of campus-wide issues.

---

## Table of Contents

- [Features](#features)
- [User Roles](#user-roles)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Backend Integration](#backend-integration)
- [License](#license)

---

## Features

| Feature | Description |
|---------|-------------|
| **Role-based access** | Separate dashboards for Student, Staff, and Admin |
| **Complaint submission** | Students submit issues with title, description, category, priority, and optional file upload |
| **Ticket management** | Staff view assigned tickets, update status, add remarks, and reassign |
| **Analytics** | Admin views system-wide metrics, department breakdowns, and trends |
| **User management** | Admin adds/edits users and assigns roles/departments |
| **Category management** | Admin defines complaint categories and links them to departments |
| **Chatbot** | Interactive help bot for students (demo mode) |
| **Responsive UI** | Bootstrap 5 layout with mobile-friendly design |

---

## User Roles

### Student
- **Dashboard** – Overview of total, in-progress, and resolved complaints
- **Submit Complaint** – Create new tickets with category, priority, and attachments
- **My Complaints** – View, filter, and track all submitted complaints
- **Chatbot** – Get guidance on submitting complaints or describing issues

### Staff (Department)
- **Dashboard** – Summary of open, in-progress, and resolved tickets
- **Assigned Tickets** – List of tickets assigned to the department with filters
- **Update Ticket** – Change status, add internal notes, and student-visible remarks

### Admin
- **Dashboard** – System-wide complaint counts and department breakdowns
- **Manage Users** – Add, edit, and manage users (students, staff, admins)
- **Manage Categories** – Create and link complaint categories to departments
- **Analytics** – KPIs, resolution times, SLA metrics, and trends

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **UI Framework** | Bootstrap 5.3 |
| **Icons** | Bootstrap Icons |
| **Build** | None (static files) |

---

## Project Structure

```
ASTU/
├── README.md                 # This file
├── astu-dashboard.html       # Standalone dashboard (reference/single-file version)
│
└── frontend/
    ├── index.html            # Entry point – login, register, quick links
    │
    ├── auth/
    │   ├── login.html        # Login with role selection
    │   └── register.html     # User registration
    │
    ├── student/
    │   ├── student-dashboard.html
    │   ├── submit-complaint.html
    │   ├── my-complaints.html
    │   └── chatbot.html
    │
    ├── staff/
    │   ├── staff-dashboard.html
    │   ├── assigned-tickets.html
    │   └── update-ticket.html
    │
    ├── admin/
    │   ├── admin-dashboard.html
    │   ├── manage-users.html
    │   ├── manage-categories.html
    │   └── analytics.html
    │
    └── assets/
        ├── css/
        │   └── app.css       # Shared layout, sidebar, chat styles
        ├── js/
        │   └── app.js        # Nav highlighting, action handlers, chatbot demo
        └── img/
            └── astu-logo.png # ASTU logo (place the provided image here or use the attached logo file)
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Optional: a local HTTP server (recommended for best behavior)

### Option 1: Open Directly

1. Clone or download this repository.
2. Open `frontend/index.html` in your browser.
3. Use **Login** or **Register**, or jump directly to a dashboard via the quick links.

### Option 2: Local Server (Recommended)

Using a local server avoids CORS and path issues:

**VS Code Live Server:**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2. Right-click `frontend/index.html` → **Open with Live Server**.

**Python:**
```bash
cd frontend
python -m http.server 8080
# Open http://localhost:8080
```

**Node.js (npx):**
```bash
cd frontend
npx serve .
# Open the URL shown in the terminal
```

---

## Usage

1. **Start** – Open `frontend/index.html` (or serve it via a local server).
2. **Login** – Go to Login, enter email/password, select role (Student/Staff/Admin), then submit. You will be redirected to the matching dashboard.
3. **Register** – Create an account; the demo redirects to the login page.
4. **Navigate** – Use the sidebar in each dashboard to move between pages.
5. **Demo data** – All tables and stats use dummy data. Forms do not persist; they are UI placeholders for backend integration.

---

## Deployment

- Serve the `frontend/` directory as static files from any web server (Apache, Nginx, Netlify, Vercel, GitHub Pages, etc.).
- Ensure asset paths (`assets/css/app.css`, `assets/js/app.js`, `assets/img/`) resolve correctly.
- For production, configure the server to handle SPA-style routing if you add client-side routing later.

---

## Backend Integration

This is a **static frontend** with no backend. For a full system:

1. **Authentication** – Implement JWT or session-based auth; protect routes by role.
2. **API** – Create REST or GraphQL endpoints for:
   - Users (login, register, CRUD)
   - Complaints (create, list, filter, update status)
   - Categories (CRUD)
   - Analytics (aggregated data)
3. **Database** – Store users, complaints, categories, and ticket history.
4. **File upload** – Handle complaint attachments (e.g., S3, local storage).
5. **Chatbot** – Replace the demo with a real NLP/LLM service or rule-based bot.

---

## License

MIT License
