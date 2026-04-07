/**
 * BuildSpace – Users/Developers API Routes
 * GET    /api/users          – List all developers
 * GET    /api/users/:id      – Get a specific developer
 * POST   /api/users          – Create a developer profile
 * PUT    /api/users/:id      – Update a developer profile
 * GET    /api/users/search   – Search developers by skill/name/role
 */

const express = require('express');
const router = express.Router();

// In-memory store (replace with DB in production)
let users = [
  {
    id: 1, name: 'Arjun Mehta', role: 'Full Stack Developer', location: 'Chennai, India',
    email: 'arjun@buildspace.dev',
    bio: 'Building scalable web apps with React & Node.js. Open source enthusiast. Love hackathons!',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Docker'],
    interests: ['Open Source', 'Hackathons', 'System Design'],
    openToWork: true, followers: 142, following: 89, createdAt: new Date('2024-01-15')
  },
  {
    id: 2, name: 'Priya Sharma', role: 'ML/AI Engineer', location: 'Bangalore, India',
    email: 'priya@buildspace.dev',
    bio: 'Turning data into intelligence. Working on NLP models and computer vision solutions.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'FastAPI', 'Scikit-learn'],
    interests: ['AI Research', 'Computer Vision', 'NLP'],
    openToWork: true, followers: 238, following: 64, createdAt: new Date('2024-02-01')
  },
  {
    id: 3, name: 'Rahul Kumar', role: 'Frontend Developer', location: 'Mumbai, India',
    email: 'rahul@buildspace.dev',
    bio: 'Pixel-perfect UI/UX with React and Vue.js. Passionate about animations and accessibility.',
    skills: ['React', 'Vue.js', 'Figma', 'CSS/SASS', 'Next.js'],
    interests: ['UI/UX Design', 'Animations', 'Web Performance'],
    openToWork: false, followers: 95, following: 52, createdAt: new Date('2024-02-20')
  },
  {
    id: 4, name: 'Sneha Patel', role: 'DevOps Engineer', location: 'Hyderabad, India',
    email: 'sneha@buildspace.dev',
    bio: 'Bridging dev and ops. Kubernetes, CI/CD, and cloud infrastructure are my playground.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins'],
    interests: ['Cloud Native', 'Site Reliability', 'Automation'],
    openToWork: true, followers: 178, following: 73, createdAt: new Date('2024-03-10')
  },
  {
    id: 5, name: 'Vikram Singh', role: 'Backend Developer', location: 'Delhi, India',
    email: 'vikram@buildspace.dev',
    bio: 'APIs, databases, and microservices. Currently building fintech solutions with Node.js.',
    skills: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Express'],
    interests: ['Fintech', 'Distributed Systems', 'API Design'],
    openToWork: false, followers: 112, following: 41, createdAt: new Date('2024-03-22')
  },
  {
    id: 6, name: 'Anika Roy', role: 'UI/UX Designer & Developer', location: 'Kolkata, India',
    email: 'anika@buildspace.dev',
    bio: 'Where design meets code. Figma to React, I bridge the gap between design and engineering.',
    skills: ['Figma', 'React', 'Framer', 'HTML/CSS', 'Flutter'],
    interests: ['Design Systems', 'User Research', 'Accessibility'],
    openToWork: true, followers: 203, following: 98, createdAt: new Date('2024-04-05')
  }
];

let nextId = 7;

// GET /api/users – List all (with optional filters)
router.get('/', (req, res) => {
  let result = [...users];
  const { skill, role, openToWork, q } = req.query;

  if (q) {
    const q_ = q.toLowerCase();
    result = result.filter(u =>
      u.name.toLowerCase().includes(q_) ||
      u.role.toLowerCase().includes(q_) ||
      u.skills.some(s => s.toLowerCase().includes(q_)) ||
      u.bio.toLowerCase().includes(q_)
    );
  }
  if (skill) result = result.filter(u => u.skills.some(s => s.toLowerCase() === skill.toLowerCase()));
  if (role) result = result.filter(u => u.role.toLowerCase().includes(role.toLowerCase()));
  if (openToWork !== undefined) result = result.filter(u => u.openToWork === (openToWork === 'true'));

  res.json({ data: result, count: result.length });
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ data: user });
});

// POST /api/users – Create profile
router.post('/', (req, res) => {
  const { name, role, location, bio, skills, interests, email } = req.body;
  if (!name || !role || !email) {
    return res.status(400).json({ error: 'name, role, and email are required' });
  }

  const newUser = {
    id: nextId++, name, role, location: location || '',
    email, bio: bio || '', skills: skills || [], interests: interests || [],
    openToWork: true, followers: 0, following: 0, createdAt: new Date()
  };
  users.push(newUser);
  res.status(201).json({ data: newUser, message: 'Profile created successfully' });
});

// PUT /api/users/:id – Update profile
router.put('/:id', (req, res) => {
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'User not found' });

  const allowed = ['name', 'role', 'location', 'bio', 'skills', 'interests', 'openToWork'];
  allowed.forEach(field => {
    if (req.body[field] !== undefined) users[idx][field] = req.body[field];
  });

  res.json({ data: users[idx], message: 'Profile updated' });
});

// GET /api/users/search?q=react – quick search alias
router.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) return res.json({ data: users });
  const q_ = q.toLowerCase();
  const result = users.filter(u =>
    u.name.toLowerCase().includes(q_) ||
    u.skills.some(s => s.toLowerCase().includes(q_))
  );
  res.json({ data: result, count: result.length });
});

module.exports = router;