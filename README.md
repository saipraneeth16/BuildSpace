# BuildSpace – Developer Collaboration Platform
> SDC Hack Week Day 1 Submission | IIT Madras

A unified platform where student developers find teammates, collaborate on projects, and discover opportunities — all in one place.

---

## Quick Start

### Option A: Open the frontend directly (no backend needed)
```bash
# Just open frontend/index.html in any browser — works out of the box!
open frontend/index.html
```

### Option B: Run with the Express backend
```bash
cd backend
npm install
npm start
# Visit http://localhost:3001
```

---

## Features

### Core Features
| Feature | Description |
|---|---|
| Developer Profiles | Create profiles with skills, bio, interests, and projects |
| Project Board | Browse and create projects with tech stacks and open roles |
| Opportunity Board | Post and browse hackathon openings, hiring calls, and team requests |
| Interactive Feed | Dynamic, filterable community feed with likes and sharing |

### Bonus Features
| Feature | Description |
|---|---|
| Dark/Light Mode | One-click theme toggle with smooth transitions |
| Search & Filter | Global search + per-section skill/role/status filters |
| Profile Sharing | Copy shareable profile links with URL-based deep linking |

---

## Tech Stack

**Frontend:** HTML5, CSS3 (custom properties, CSS Grid, Flexbox), Vanilla JavaScript
**Backend:** Node.js, Express.js
**Data:** In-memory store (easily swappable with MongoDB/PostgreSQL)

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | List developers (filter by skill, role, openToWork) |
| GET | `/api/users/:id` | Get developer profile |
| POST | `/api/users` | Create new profile |
| PUT | `/api/users/:id` | Update profile |
| GET | `/api/projects` | List projects (filter by status, stack) |
| POST | `/api/projects` | Create project |
| POST | `/api/projects/:id/join` | Request to join project |
| GET | `/api/opportunities` | List opportunities (filter by type, skill) |
| POST | `/api/opportunities` | Post new opportunity |
| POST | `/api/opportunities/:id/express` | Express interest |
| GET | `/api/feed` | Get paginated feed (filter by type) |
| POST | `/api/feed` | Create a post |
| POST | `/api/feed/:id/like` | Like a post |
| GET | `/api/health` | Health check |

---

## Project Structure

```
buildspace/
├── frontend/
│   ├── index.html     # Single-page app shell
│   ├── style.css      # All styles (dark/light, responsive)
│   └── app.js         # Frontend logic (routing, rendering, filters)
├── backend/
│   ├── server.js      # Express entry point
│   ├── package.json
│   └── routes/
│       ├── users.js         # Developer profile routes
│       ├── projects.js      # Project routes
│       ├── opportunities.js # Opportunity routes
│       └── feed.js          # Feed routes
└── README.md
```


