/**
 * BuildSpace – Opportunities API Routes
 * GET  /api/opportunities         – List all opportunities
 * GET  /api/opportunities/:id     – Get a specific opportunity
 * POST /api/opportunities         – Post an opportunity
 * PUT  /api/opportunities/:id     – Update an opportunity
 * DEL  /api/opportunities/:id     – Close/remove an opportunity
 * POST /api/opportunities/:id/express – Express interest
 */

const express = require('express');
const router = express.Router();

let opportunities = [
  {
    id: 1, type: 'Looking for Teammates',
    title: 'Need a React dev for SDC Hack Week!',
    desc: 'Building a mental health platform for Day 1 hackathon. Have a strong backend but need frontend help. Fun team, free snacks!',
    skills: ['React', 'CSS', 'REST APIs'],
    posterId: 3, poster: 'Rahul Kumar', active: true,
    interests: 0, createdAt: new Date(Date.now() - 30 * 60000)
  },
  {
    id: 2, type: 'Hackathon Opening',
    title: 'Team of 3 looking for ML engineer – SIH 2025',
    desc: 'We have a healthcare problem statement for Smart India Hackathon. Need someone with experience in image classification or NLP.',
    skills: ['Python', 'TensorFlow', 'Computer Vision'],
    posterId: 4, poster: 'Sneha Patel', active: true,
    interests: 2, createdAt: new Date(Date.now() - 120 * 60000)
  },
  {
    id: 3, type: 'Hiring for Project',
    title: 'Backend developer for open-source EdTech tool',
    desc: 'EduTrack is growing! Looking for a Node.js/Express developer to help build out the analytics and reporting features.',
    skills: ['Node.js', 'MongoDB', 'REST APIs', 'Express'],
    posterId: 1, poster: 'Arjun Mehta', active: true,
    interests: 5, createdAt: new Date(Date.now() - 360 * 60000)
  },
  {
    id: 4, type: 'Open Source',
    title: 'Contributors wanted for CampusConnect',
    desc: 'CampusConnect is going open source! Looking for React, Node.js, and UI/UX contributors to help expand the platform to 10+ colleges.',
    skills: ['React', 'Next.js', 'Supabase', 'UI/UX'],
    posterId: 6, poster: 'Anika Roy', active: true,
    interests: 8, createdAt: new Date(Date.now() - 1440 * 60000)
  },
  {
    id: 5, type: 'Looking for Teammates',
    title: 'Blockchain hackathon team — 1 spot left',
    desc: 'Participating in a blockchain + web3 hackathon next week. Need a smart contract dev (Solidity/Hardhat). Great problem statement!',
    skills: ['Solidity', 'Web3.js', 'Ethereum', 'Hardhat'],
    posterId: 5, poster: 'Vikram Singh', active: true,
    interests: 3, createdAt: new Date(Date.now() - 2880 * 60000)
  }
];

let nextId = 6;

// GET /api/opportunities
router.get('/', (req, res) => {
  let result = opportunities.filter(o => o.active);
  const { type, skill, q } = req.query;

  if (q) {
    const q_ = q.toLowerCase();
    result = result.filter(o =>
      o.title.toLowerCase().includes(q_) ||
      o.desc.toLowerCase().includes(q_) ||
      o.skills.some(s => s.toLowerCase().includes(q_))
    );
  }
  if (type) result = result.filter(o => o.type === type);
  if (skill) result = result.filter(o => o.skills.some(s => s.toLowerCase() === skill.toLowerCase()));

  result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  res.json({ data: result, count: result.length });
});

// GET /api/opportunities/:id
router.get('/:id', (req, res) => {
  const opp = opportunities.find(o => o.id === parseInt(req.params.id));
  if (!opp) return res.status(404).json({ error: 'Opportunity not found' });
  res.json({ data: opp });
});

// POST /api/opportunities – Create
router.post('/', (req, res) => {
  const { type, title, desc, skills, posterId, poster } = req.body;
  if (!type || !title || !desc || !posterId) {
    return res.status(400).json({ error: 'type, title, desc, and posterId are required' });
  }

  const types = ['Looking for Teammates', 'Hiring for Project', 'Hackathon Opening', 'Open Source'];
  if (!types.includes(type)) {
    return res.status(400).json({ error: `type must be one of: ${types.join(', ')}` });
  }

  const newOpp = {
    id: nextId++, type, title, desc, posterId,
    poster: poster || 'Unknown',
    skills: Array.isArray(skills) ? skills : (skills || '').split(',').map(s => s.trim()).filter(Boolean),
    active: true, interests: 0, createdAt: new Date()
  };
  opportunities.push(newOpp);
  res.status(201).json({ data: newOpp, message: 'Opportunity posted successfully' });
});

// PUT /api/opportunities/:id
router.put('/:id', (req, res) => {
  const idx = opportunities.findIndex(o => o.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Opportunity not found' });

  const allowed = ['title', 'desc', 'skills', 'type', 'active'];
  allowed.forEach(field => {
    if (req.body[field] !== undefined) opportunities[idx][field] = req.body[field];
  });

  res.json({ data: opportunities[idx], message: 'Opportunity updated' });
});

// DELETE /api/opportunities/:id
router.delete('/:id', (req, res) => {
  const idx = opportunities.findIndex(o => o.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Opportunity not found' });
  opportunities[idx].active = false;
  res.json({ message: 'Opportunity closed' });
});

// POST /api/opportunities/:id/express
router.post('/:id/express', (req, res) => {
  const opp = opportunities.find(o => o.id === parseInt(req.params.id));
  if (!opp) return res.status(404).json({ error: 'Opportunity not found' });
  opp.interests++;
  res.json({ interests: opp.interests, message: 'Interest expressed!' });
});

module.exports = router;