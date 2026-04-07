/**
 * BuildSpace – Projects API Routes
 * GET    /api/projects          – List all projects
 * GET    /api/projects/:id      – Get a specific project
 * POST   /api/projects          – Create a project
 * PUT    /api/projects/:id      – Update a project
 * POST   /api/projects/:id/join – Request to join a project
 * POST   /api/projects/:id/like – Like a project
 */

const express = require('express');
const router = express.Router();

let projects = [
  {
    id: 1, name: 'EduTrack', ownerId: 1, owner: 'Arjun Mehta',
    desc: 'A student progress tracking platform for educators. Features analytics dashboards, assignment management, and parent-teacher communication tools.',
    stack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    status: 'Open', members: [1], rolesNeeded: ['Backend Dev', 'UI Designer'],
    likes: 24, views: 187, githubUrl: '', createdAt: new Date('2024-03-20')
  },
  {
    id: 2, name: 'GreenRoute', ownerId: 2, owner: 'Priya Sharma',
    desc: 'Eco-friendly route planner that optimizes for carbon footprint. Uses ML to suggest sustainable transport options and tracks personal CO2 savings.',
    stack: ['Flutter', 'Python', 'FastAPI', 'TensorFlow'],
    status: 'In Progress', members: [2, 3, 5], rolesNeeded: [],
    likes: 18, views: 143, githubUrl: '', createdAt: new Date('2024-04-01')
  },
  {
    id: 3, name: 'CampusConnect', ownerId: 6, owner: 'Anika Roy',
    desc: 'An intra-college social platform for clubs, events, and student communities. Better than generic social media for campus life.',
    stack: ['Next.js', 'Supabase', 'Tailwind', 'PostgreSQL'],
    status: 'Open', members: [6], rolesNeeded: ['React Dev', 'Backend Dev', 'Mobile Dev'],
    likes: 31, views: 256, githubUrl: '', createdAt: new Date('2024-04-10')
  },
  {
    id: 4, name: 'HireMe AI', ownerId: 5, owner: 'Vikram Singh',
    desc: 'AI-powered resume parser and job matching platform for fresh graduates. Connects students with startups looking for entry-level talent.',
    stack: ['React', 'FastAPI', 'GPT-4', 'PostgreSQL'],
    status: 'In Progress', members: [5, 1, 2], rolesNeeded: [],
    likes: 42, views: 312, githubUrl: '', createdAt: new Date('2024-04-15')
  },
  {
    id: 5, name: 'CodeBuddy', ownerId: 6, owner: 'Anika Roy',
    desc: 'Real-time collaborative code editor with video calling. Think Google Docs meets VS Code for pair programming sessions.',
    stack: ['React', 'Socket.io', 'Monaco Editor', 'WebRTC'],
    status: 'Open', members: [6, 3], rolesNeeded: ['Backend Dev', 'WebRTC Expert'],
    likes: 37, views: 289, githubUrl: '', createdAt: new Date('2024-04-18')
  },
  {
    id: 6, name: 'MindSpace', ownerId: 4, owner: 'Sneha Patel',
    desc: 'Mental wellness app for college students featuring mood tracking, guided meditations, and anonymous peer support communities.',
    stack: ['Flutter', 'Firebase', 'Node.js', 'Dialogflow'],
    status: 'Completed', members: [4, 3, 1], rolesNeeded: [],
    likes: 55, views: 401, githubUrl: '', createdAt: new Date('2024-02-10')
  }
];

let nextId = 7;

// GET /api/projects
router.get('/', (req, res) => {
  let result = [...projects];
  const { status, stack, q } = req.query;

  if (q) {
    const q_ = q.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q_) ||
      p.desc.toLowerCase().includes(q_) ||
      p.stack.some(s => s.toLowerCase().includes(q_))
    );
  }
  if (status) result = result.filter(p => p.status === status);
  if (stack) result = result.filter(p => p.stack.some(s => s.toLowerCase() === stack.toLowerCase()));

  // Sort by likes desc
  result.sort((a, b) => b.likes - a.likes);
  res.json({ data: result, count: result.length });
});

// GET /api/projects/:id
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: 'Project not found' });
  project.views++;
  res.json({ data: project });
});

// POST /api/projects – Create
router.post('/', (req, res) => {
  const { name, desc, stack, ownerId, owner, rolesNeeded } = req.body;
  if (!name || !desc || !ownerId) {
    return res.status(400).json({ error: 'name, desc, and ownerId are required' });
  }

  const newProject = {
    id: nextId++, name, desc, ownerId, owner: owner || 'Unknown',
    stack: Array.isArray(stack) ? stack : (stack || '').split(',').map(s => s.trim()).filter(Boolean),
    status: 'Open', members: [ownerId],
    rolesNeeded: Array.isArray(rolesNeeded) ? rolesNeeded : (rolesNeeded || '').split(',').map(s => s.trim()).filter(Boolean),
    likes: 0, views: 0, githubUrl: '', createdAt: new Date()
  };
  projects.push(newProject);
  res.status(201).json({ data: newProject, message: 'Project created successfully' });
});

// PUT /api/projects/:id
router.put('/:id', (req, res) => {
  const idx = projects.findIndex(p => p.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Project not found' });

  const allowed = ['name', 'desc', 'stack', 'status', 'rolesNeeded', 'githubUrl'];
  allowed.forEach(field => {
    if (req.body[field] !== undefined) projects[idx][field] = req.body[field];
  });

  res.json({ data: projects[idx], message: 'Project updated' });
});

// POST /api/projects/:id/join
router.post('/:id/join', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: 'Project not found' });

  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  if (project.members.includes(userId)) return res.status(409).json({ error: 'Already a member' });

  project.members.push(userId);
  res.json({ data: project, message: 'Join request submitted' });
});

// POST /api/projects/:id/like
router.post('/:id/like', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: 'Project not found' });
  project.likes++;
  res.json({ likes: project.likes });
});

module.exports = router;