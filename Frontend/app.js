
const AVATAR_COLORS = ['avatar-purple', 'avatar-blue', 'avatar-green', 'avatar-orange', 'avatar-pink', 'avatar-teal'];
const getAvatarColor = (name) => AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
const initials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
const timeAgo = (mins) => {
  if (mins < 60) return `${mins}m ago`;
  if (mins < 1440) return `${Math.floor(mins / 60)}h ago`;
  return `${Math.floor(mins / 1440)}d ago`;
};

let developers = [
  {
    id: 1, name: 'Arjun Mehta', role: 'Full Stack Developer', location: 'Chennai, India',
    bio: 'Building scalable web apps with React & Node.js. Open source enthusiast. Love hackathons!',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Docker'],
    interests: ['Open Source', 'Hackathons', 'System Design'],
    openToWork: true,
    projects: [
      { name: 'DevConnect', desc: 'A real-time developer collaboration tool built with Socket.io' },
      { name: 'CodeReview AI', desc: 'AI-powered code review assistant using OpenAI API' }
    ]
  },
  {
    id: 2, name: 'Priya Sharma', role: 'ML/AI Engineer', location: 'Bangalore, India',
    bio: 'Turning data into intelligence. Working on NLP models and computer vision solutions.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'FastAPI', 'Scikit-learn'],
    interests: ['AI Research', 'Computer Vision', 'NLP'],
    openToWork: true,
    projects: [
      { name: 'MediScan', desc: 'Medical image classification using CNN with 94% accuracy' },
      { name: 'SentimentIQ', desc: 'Real-time sentiment analysis for social media streams' }
    ]
  },
  {
    id: 3, name: 'Rahul Kumar', role: 'Frontend Developer', location: 'Mumbai, India',
    bio: 'Pixel-perfect UI/UX with React and Vue.js. Passionate about animations and accessibility.',
    skills: ['React', 'Vue.js', 'Figma', 'CSS/SASS', 'Next.js'],
    interests: ['UI/UX Design', 'Animations', 'Web Performance'],
    openToWork: false,
    projects: [
      { name: 'MotionKit', desc: 'A collection of React animation components and hooks' }
    ]
  },
  {
    id: 4, name: 'Sneha Patel', role: 'DevOps Engineer', location: 'Hyderabad, India',
    bio: 'Bridging dev and ops. Kubernetes, CI/CD, and cloud infrastructure are my playground.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins'],
    interests: ['Cloud Native', 'Site Reliability', 'Automation'],
    openToWork: true,
    projects: [
      { name: 'K8s Dashboard', desc: 'Lightweight Kubernetes monitoring dashboard in Go + React' }
    ]
  },
  {
    id: 5, name: 'Vikram Singh', role: 'Backend Developer', location: 'Delhi, India',
    bio: 'APIs, databases, and microservices. Currently building fintech solutions with Node.js.',
    skills: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Express'],
    interests: ['Fintech', 'Distributed Systems', 'API Design'],
    openToWork: false,
    projects: [
      { name: 'PayFlow', desc: 'Lightweight payment processing microservice with REST + GraphQL' }
    ]
  },
  {
    id: 6, name: 'Anika Roy', role: 'UI/UX Designer & Developer', location: 'Kolkata, India',
    bio: 'Where design meets code. Figma to React, I bridge the gap between design and engineering.',
    skills: ['Figma', 'React', 'Framer', 'HTML/CSS', 'Flutter'],
    interests: ['Design Systems', 'User Research', 'Accessibility'],
    openToWork: true,
    projects: [
      { name: 'DesignSync', desc: 'Design-to-code tool that converts Figma components to React' }
    ]
  }
];

let projects = [
  {
    id: 1, name: 'EduTrack', desc: 'A student progress tracking platform for educators. Features analytics dashboards, assignment management, and parent-teacher communication tools.',
    stack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    status: 'Open', members: ['AM', 'SR'], roles: ['Backend Dev', 'UI Designer'],
    owner: 'Arjun Mehta', likes: 24
  },
  {
    id: 2, name: 'GreenRoute', desc: 'Eco-friendly route planner that optimizes for carbon footprint. Uses ML to suggest sustainable transport options and tracks personal CO2 savings.',
    stack: ['Flutter', 'Python', 'FastAPI', 'TensorFlow'],
    status: 'In Progress', members: ['PS', 'RK', 'VR'],
    owner: 'Priya Sharma', likes: 18
  },
  {
    id: 3, name: 'CampusConnect', desc: 'An intra-college social platform for clubs, events, and student communities. Better than generic social media for campus life.',
    stack: ['Next.js', 'Supabase', 'Tailwind', 'PostgreSQL'],
    status: 'Open', members: ['NK'], roles: ['React Dev', 'Backend Dev', 'Mobile Dev'],
    owner: 'Nisha K', likes: 31
  },
  {
    id: 4, name: 'HireMe AI', desc: 'AI-powered resume parser and job matching platform for fresh graduates. Connects students with startups looking for entry-level talent.',
    stack: ['React', 'FastAPI', 'GPT-4', 'PostgreSQL'],
    status: 'In Progress', members: ['VS', 'AM', 'PS'],
    owner: 'Vikram Singh', likes: 42
  },
  {
    id: 5, name: 'CodeBuddy', desc: 'Real-time collaborative code editor with video calling. Think Google Docs meets VS Code for pair programming sessions.',
    stack: ['React', 'Socket.io', 'Monaco Editor', 'WebRTC'],
    status: 'Open', members: ['AR', 'RK'], roles: ['Backend Dev', 'WebRTC Expert'],
    owner: 'Anika Roy', likes: 37
  },
  {
    id: 6, name: 'MindSpace', desc: 'Mental wellness app for college students featuring mood tracking, guided meditations, and anonymous peer support communities.',
    stack: ['Flutter', 'Firebase', 'Node.js', 'Dialogflow'],
    status: 'Completed', members: ['SP', 'NK', 'AS'],
    owner: 'Sneha Patel', likes: 55
  }
];

let opportunities = [
  {
    id: 1, type: 'Looking for Teammates', title: 'Need a React dev for SDC Hack Week!',
    desc: 'Building a mental health platform for Day 1 hackathon. Have a strong backend but need frontend help. Fun team, free snacks!',
    skills: ['React', 'CSS', 'REST APIs'], poster: 'Rahul Kumar', time: 30, icon: '🤝'
  },
  {
    id: 2, type: 'Hackathon Opening', title: 'Team of 3 looking for ML engineer – SIH 2025',
    desc: 'We have a healthcare problem statement for Smart India Hackathon. Need someone with experience in image classification or NLP.',
    skills: ['Python', 'TensorFlow', 'Computer Vision'], poster: 'Sneha Patel', time: 120, icon: '🏆'
  },
  {
    id: 3, type: 'Hiring for Project', title: 'Backend developer for open-source EdTech tool',
    desc: 'EduTrack is growing! Looking for a Node.js/Express developer to help build out the analytics and reporting features.',
    skills: ['Node.js', 'MongoDB', 'REST APIs', 'Express'], poster: 'Arjun Mehta', time: 360, icon: '💼'
  },
  {
    id: 4, type: 'Open Source', title: 'Contributors wanted for CampusConnect',
    desc: 'CampusConnect is going open source! Looking for React, Node.js, and UI/UX contributors to help expand the platform to 10+ colleges.',
    skills: ['React', 'Next.js', 'Supabase', 'UI/UX'], poster: 'Nisha K', time: 1440, icon: '🌐'
  },
  {
    id: 5, type: 'Looking for Teammates', title: 'Blockchain hackathon team — 1 spot left',
    desc: 'Participating in a blockchain + web3 hackathon next week. Need a smart contract dev (Solidity/Hardhat). Great problem statement!',
    skills: ['Solidity', 'Web3.js', 'Ethereum', 'Hardhat'], poster: 'Vikram Singh', time: 2880, icon: '🔗'
  }
];

let feedItems = [
  {
    id: 1, author: 'Arjun Mehta', content: '🚀 Just launched EduTrack v1.0! A student progress tracking platform built with React + Node.js. Check it out and let me know what you think — looking for early feedback and contributors!',
    type: 'project', time: 15, likes: 28, comments: 7, liked: false
  },
  {
    id: 2, author: 'Priya Sharma', content: '💼 Our team is looking for a React developer for the SDC Hack Week Day 1 challenge. We have a great idea and a solid backend — just need that frontend magic. DM me!',
    type: 'opportunity', time: 45, likes: 14, comments: 3, liked: false
  },
  {
    id: 3, author: 'Rahul Kumar', content: '🎉 Big news! MotionKit just hit 200 GitHub stars! Thank you to everyone who contributed and gave feedback. Working on v2.0 with drag-and-drop support.',
    type: 'update', time: 120, likes: 62, comments: 15, liked: false
  },
  {
    id: 4, author: 'Sneha Patel', content: '📢 MindSpace just got selected for the national startup incubator program! 6 months of mentorship and funding. This is what happens when you build with purpose.',
    type: 'update', time: 300, likes: 91, comments: 22, liked: false
  },
  {
    id: 5, author: 'Anika Roy', content: '🆕 New project alert: CodeBuddy — a real-time collaborative code editor with WebRTC-based video calls. Open for contributors! Need a backend dev and WebRTC specialist.',
    type: 'project', time: 600, likes: 45, comments: 11, liked: false
  }
];

const trendingSkills = ['React', 'Python', 'Node.js', 'Flutter', 'ML/AI', 'Docker', 'Next.js', 'TypeScript'];

let currentFilter = 'all';
let isDark = false;
let myProfile = {
  name: 'Srinivas G', role: 'Full Stack Developer',
  bio: 'Passionate developer building products that matter. Love hackathons and open source!',
  skills: ['React', 'Node.js', 'Python', 'MongoDB'],
  interests: ['Hackathons', 'Open Source', 'AI'],
  projects: [{ name: 'BuildSpace', desc: 'Developer collaboration platform for IIT Madras SDC Hack Week' }]
};

function setupNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      navigateTo(page);
    });
  });

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  document.getElementById('profileBtn').addEventListener('click', () => {
    openProfileModal(myProfile, true);
  });
}

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');
  document.getElementById('navLinks').classList.remove('open');
}

function setupTheme() {
  document.getElementById('themeToggle').addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
  });
}

function setupSearch() {
  const input = document.getElementById('globalSearch');
  const results = document.getElementById('searchResults');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.style.display = 'none'; return; }

    const devMatches = developers
      .filter(d => d.name.toLowerCase().includes(q) || d.skills.some(s => s.toLowerCase().includes(q)) || d.role.toLowerCase().includes(q))
      .slice(0, 3)
      .map(d => `<div class="search-result-item" onclick="openDevProfile(${d.id}); document.getElementById('globalSearch').value=''; document.getElementById('searchResults').style.display='none';">
        <div class="feed-avatar ${getAvatarColor(d.name)}">${initials(d.name)}</div>
        <div><div style="font-weight:600;font-size:.875rem">${d.name}</div><div class="search-result-type">Developer · ${d.role}</div></div>
      </div>`);

    const projMatches = projects
      .filter(p => p.name.toLowerCase().includes(q) || p.stack.some(s => s.toLowerCase().includes(q)))
      .slice(0, 2)
      .map(p => `<div class="search-result-item" onclick="navigateTo('projects'); document.getElementById('globalSearch').value=''; document.getElementById('searchResults').style.display='none';">
        <div style="font-size:1.5rem">🚀</div>
        <div><div style="font-weight:600;font-size:.875rem">${p.name}</div><div class="search-result-type">Project · ${p.stack.slice(0,2).join(', ')}</div></div>
      </div>`);

    const all = [...devMatches, ...projMatches];
    if (!all.length) {
      results.innerHTML = `<div style="padding:16px;color:var(--text-muted);font-size:.875rem;text-align:center">No results for "${q}"</div>`;
    } else {
      results.innerHTML = all.join('');
    }
    results.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!results.contains(e.target) && e.target !== input) {
      results.style.display = 'none';
    }
  });
}

function renderFeed(filter = 'all') {
  const container = document.getElementById('feedContainer');
  const filtered = filter === 'all' ? feedItems : feedItems.filter(f => f.type === filter);

  container.innerHTML = filtered.map(item => `
    <div class="feed-card" id="feed-${item.id}">
      <div class="feed-card-header">
        <div class="feed-avatar ${getAvatarColor(item.author)}">${initials(item.author)}</div>
        <div class="feed-meta">
          <div class="feed-author">${item.author}</div>
          <div class="feed-time">${timeAgo(item.time)}</div>
        </div>
        <span class="feed-type-badge">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
      </div>
      <div class="feed-content">${item.content}</div>
      <div class="feed-card-footer">
        <button class="feed-action ${item.liked ? 'liked' : ''}" onclick="toggleLike(${item.id})">
          ${item.liked ? '❤️' : '🤍'} ${item.likes}
        </button>
        <button class="feed-action">💬 ${item.comments}</button>
        <button class="feed-action" onclick="showToast('🔗 Link copied to clipboard!')">🔗 Share</button>
      </div>
    </div>
  `).join('');
}

function toggleLike(id) {
  const item = feedItems.find(f => f.id === id);
  item.liked = !item.liked;
  item.likes += item.liked ? 1 : -1;

  setTimeout(() => {
    const btn = document.querySelector(`#feed-${id} .feed-action`);
    if (btn) {
      btn.classList.add("liked");
      setTimeout(() => btn.classList.remove("liked"), 300);
    }
  }, 0);

  renderFeed(currentFilter);
}

function setupFilterTabs() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      renderFeed(currentFilter);
    });
  });
}

function renderTrendingSkills() {
  document.getElementById('trendingSkills').innerHTML = trendingSkills.map(s =>
    `<span class="tag" onclick="document.getElementById('globalSearch').value='${s}'; document.getElementById('globalSearch').dispatchEvent(new Event('input'))">${s}</span>`
  ).join('');
}

function renderSuggestedDevs() {
  const devs = developers.slice(0, 3);
  document.getElementById('suggestedDevs').innerHTML = devs.map(d => `
    <div class="suggested-dev" onclick="openDevProfile(${d.id})">
      <div class="feed-avatar ${getAvatarColor(d.name)}" style="width:34px;height:34px;font-size:.75rem">${initials(d.name)}</div>
      <div class="suggested-dev-info">
        <div class="suggested-dev-name">${d.name}</div>
        <div class="suggested-dev-role">${d.role}</div>
      </div>
      <button class="btn btn-ghost" style="font-size:.75rem;padding:4px 10px">Follow</button>
    </div>
  `).join('');
}

function submitPost() {
  const input = document.getElementById('postInput');
  const text = input.value.trim();
  if (!text) return;

  feedItems.unshift({
    id: Date.now(), author: myProfile.name, content: text,
    type: 'update', time: 0, likes: 0, comments: 0, liked: false
  });
  input.value = '';
  renderFeed(currentFilter);
  showToast('✅ Post published!');
}

function openPostModal(type) {
  const input = document.getElementById('postInput');
  if (type === 'project') {
    input.placeholder = '🚀 Describe your project — what are you building?';
  } else {
    input.placeholder = '💼 Describe the opportunity — what are you looking for?';
  }
  input.focus();
}

function renderProfiles(data = developers) {
  document.getElementById('profilesGrid').innerHTML = data.map(d => `
    <div class="profile-card" onclick="openDevProfile(${d.id})">
      <div class="profile-card-top">
        <div class="profile-card-avatar ${getAvatarColor(d.name)}">${initials(d.name)}</div>
        <div>
          <div class="profile-card-name">${d.name}</div>
          <div class="profile-card-role">${d.role}</div>
          <div class="profile-card-location">📍 ${d.location}</div>
        </div>
      </div>
      <div class="profile-card-bio">${d.bio}</div>
      <div class="profile-card-skills">
        ${d.skills.slice(0, 4).map(s => `<span class="skill-tag">${s}</span>`).join('')}
        ${d.skills.length > 4 ? `<span class="skill-tag">+${d.skills.length - 4}</span>` : ''}
      </div>
      <div class="profile-card-footer">
        ${d.openToWork ? '<span class="open-to-work">Open to work</span>' : '<span style="font-size:.78rem;color:var(--text-muted)">Not available</span>'}
        <button class="btn btn-outline" style="font-size:.8rem;padding:5px 12px">Connect</button>
      </div>
    </div>
  `).join('');
}

function filterProfiles() {
  const search = document.getElementById('profileSearch').value.toLowerCase();
  const role = document.getElementById('roleFilter').value;
  const skill = document.getElementById('skillFilter').value;

  const filtered = developers.filter(d => {
    const matchSearch = !search || d.name.toLowerCase().includes(search) || d.skills.some(s => s.toLowerCase().includes(search));
    const matchRole = !role || d.role.includes(role);
    const matchSkill = !skill || d.skills.includes(skill);
    return matchSearch && matchRole && matchSkill;
  });

  renderProfiles(filtered);
  if (!filtered.length) {
    document.getElementById('profilesGrid').innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)">No developers match your filters.</div>';
  }
}

function openDevProfile(id) {
  const dev = developers.find(d => d.id === id);
  if (!dev) return;

  document.getElementById('devProfileHero').innerHTML = `
    <div class="profile-avatar-lg ${getAvatarColor(dev.name)}">${initials(dev.name)}</div>
    <div>
      <h2>${dev.name}</h2>
      <p class="profile-role-label">${dev.role} · ${dev.location}</p>
      <div class="profile-actions">
        <button class="btn btn-primary" onclick="showToast('📨 Connection request sent!')">Connect</button>
        <button class="btn btn-outline" onclick="shareDevProfile(${dev.id})">🔗 Share Profile</button>
      </div>
    </div>
  `;
  document.getElementById('devProfileBody').innerHTML = `
    <div class="profile-section"><h4>About</h4><p>${dev.bio}</p></div>
    <div class="profile-section"><h4>Skills</h4><div class="tags">${dev.skills.map(s => `<span class="tag">${s}</span>`).join('')}</div></div>
    <div class="profile-section"><h4>Projects</h4>${dev.projects.map(p => `<div class="project-mini"><div class="project-mini-title">🚀 ${p.name}</div><div class="project-mini-desc">${p.desc}</div></div>`).join('')}</div>
    <div class="profile-section"><h4>Interests</h4><div class="tags">${dev.interests.map(i => `<span class="tag">${i}</span>`).join('')}</div></div>
    ${dev.openToWork ? '<div style="padding:10px 14px;background:var(--accent-soft);border-radius:var(--radius-sm);color:var(--accent);font-size:.875rem;font-weight:600">✅ Open to Work – Available for projects & hackathons</div>' : ''}
  `;
  openModal('devProfileModal');
}

function shareDevProfile(id) {
  const dev = developers.find(d => d.id === id);
  const link = `${window.location.href.split('?')[0]}?profile=${id}&name=${encodeURIComponent(dev.name)}`;
  navigator.clipboard.writeText(link).then(() => showToast(`🔗 ${dev.name}'s profile link copied!`)).catch(() => showToast('🔗 Profile link ready to share!'));
}

function renderProjects(data = projects) {
  document.getElementById('projectsGrid').innerHTML = data.map(p => `
    <div class="project-card">
      <div class="project-card-header">
        <div class="project-title">${p.name}</div>
        <span class="project-status status-${p.status === 'Open' ? 'open' : p.status === 'In Progress' ? 'progress' : 'completed'}">${p.status}</span>
      </div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-stack">
        ${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
      </div>
      <div class="project-card-footer">
        <div class="project-members">
          <div class="member-avatars">
            ${p.members.map(m => `<div class="member-avatar-sm">${m}</div>`).join('')}
          </div>
          <span>${p.members.length} member${p.members.length !== 1 ? 's' : ''}</span>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost" style="font-size:.8rem;padding:5px 10px" onclick="showToast('❤️ Project liked!')">❤️ ${p.likes}</button>
          ${p.status === 'Open' ? `<button class="btn btn-primary" style="font-size:.8rem;padding:5px 12px" onclick="showToast('✅ Request to join sent!')">Join</button>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function filterProjects() {
  const search = document.getElementById('projectSearch').value.toLowerCase();
  const status = document.getElementById('projectStatusFilter').value;

  const filtered = projects.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search) || p.stack.some(s => s.toLowerCase().includes(search));
    const matchStatus = !status || p.status === status;
    return matchSearch && matchStatus;
  });

  renderProjects(filtered);
  if (!filtered.length) {
    document.getElementById('projectsGrid').innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)">No projects match your filters.</div>';
  }
}

function createProject() {
  const name = document.getElementById('newProjectName').value.trim();
  const desc = document.getElementById('newProjectDesc').value.trim();
  const stack = document.getElementById('newProjectStack').value.split(',').map(s => s.trim()).filter(Boolean);
  const roles = document.getElementById('newProjectRoles').value.split(',').map(s => s.trim()).filter(Boolean);

  if (!name || !desc) { showToast('⚠️ Name and description are required'); return; }

  projects.unshift({
    id: Date.now(), name, desc, stack, status: 'Open',
    members: [initials(myProfile.name)], roles, owner: myProfile.name, likes: 0
  });

  feedItems.unshift({
    id: Date.now(), author: myProfile.name,
    content: `🚀 Just created a new project: **${name}**! ${stack.length ? 'Built with ' + stack.join(', ') + '.' : ''} ${roles.length ? 'Looking for: ' + roles.join(', ') + '.' : ''}`,
    type: 'project', time: 0, likes: 0, comments: 0, liked: false
  });

  closeModal('createProjectModal');
  document.getElementById('newProjectName').value = '';
  document.getElementById('newProjectDesc').value = '';
  document.getElementById('newProjectStack').value = '';
  document.getElementById('newProjectRoles').value = '';
  renderProjects();
  showToast('🚀 Project created!');
}
const OPP_ICONS = {
  'Looking for Teammates': '🤝',
  'Hiring for Project': '💼',
  'Hackathon Opening': '🏆',
  'Open Source': '🌐'
};

function renderOpportunities(data = opportunities) {
  document.getElementById('opportunitiesList').innerHTML = data.map(o => `
    <div class="opp-card">
      <div class="opp-icon">${OPP_ICONS[o.type] || '💡'}</div>
      <div class="opp-body">
        <div class="opp-type">${o.type}</div>
        <div class="opp-title">${o.title}</div>
        <div class="opp-desc">${o.desc}</div>
        <div class="opp-skills">
          ${o.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>
      <div class="opp-meta">
        <span class="opp-time">${timeAgo(o.time)}</span>
        <div style="display:flex;align-items:center;gap:6px;margin-top:4px">
          <div class="feed-avatar ${getAvatarColor(o.poster)}" style="width:28px;height:28px;font-size:.65rem">${initials(o.poster)}</div>
          <span style="font-size:.8rem;color:var(--text-secondary)">${o.poster}</span>
        </div>
        <button class="btn btn-primary" style="font-size:.8rem;padding:6px 14px;margin-top:6px" onclick="showToast('📨 Interest expressed! ${o.poster} will reach out.')">Express Interest</button>
      </div>
    </div>
  `).join('');
}

function filterOpportunities() {
  const search = document.getElementById('oppSearch').value.toLowerCase();
  const type = document.getElementById('oppTypeFilter').value;

  const filtered = opportunities.filter(o => {
    const matchSearch = !search || o.title.toLowerCase().includes(search) || o.desc.toLowerCase().includes(search) || o.skills.some(s => s.toLowerCase().includes(search));
    const matchType = !type || o.type === type;
    return matchSearch && matchType;
  });

  renderOpportunities(filtered);
  if (!filtered.length) {
    document.getElementById('opportunitiesList').innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">No opportunities match your filters.</div>';
  }
}

function createOpportunity() {
  const title = document.getElementById('newOppTitle').value.trim();
  const type = document.getElementById('newOppType').value;
  const desc = document.getElementById('newOppDesc').value.trim();
  const skills = document.getElementById('newOppSkills').value.split(',').map(s => s.trim()).filter(Boolean);

  if (!title || !desc) { showToast('⚠️ Title and description are required'); return; }

  opportunities.unshift({
    id: Date.now(), type, title, desc, skills,
    poster: myProfile.name, time: 0, icon: OPP_ICONS[type] || '💡'
  });

  feedItems.unshift({
    id: Date.now(), author: myProfile.name,
    content: `💼 ${title} — ${desc}`,
    type: 'opportunity', time: 0, likes: 0, comments: 0, liked: false
  });

  closeModal('createOpportunityModal');
  document.getElementById('newOppTitle').value = '';
  document.getElementById('newOppDesc').value = '';
  document.getElementById('newOppSkills').value = '';
  renderOpportunities();
  showToast('📢 Opportunity posted!');
}

function openProfileModal(profile, isMe = false) {
  document.getElementById('modalAvatar').textContent = initials(profile.name);
  document.getElementById('modalAvatar').className = `profile-avatar-lg ${getAvatarColor(profile.name)}`;
  document.getElementById('modalName').textContent = profile.name;
  document.getElementById('modalRole').textContent = profile.role;
  document.getElementById('modalBio').textContent = profile.bio;
  document.getElementById('modalSkills').innerHTML = profile.skills.map(s => `<span class="tag">${s}</span>`).join('');
  document.getElementById('modalInterests').innerHTML = profile.interests.map(i => `<span class="tag">${i}</span>`).join('');
  document.getElementById('modalProjects').innerHTML = profile.projects.map(p =>
    `<div class="project-mini"><div class="project-mini-title">🚀 ${p.name}</div><div class="project-mini-desc">${p.desc}</div></div>`
  ).join('');
  openModal('profileModal');
}

function shareProfile() {
  const link = `${window.location.href.split('?')[0]}?profile=me&name=${encodeURIComponent(myProfile.name)}`;
  navigator.clipboard.writeText(link).then(() => showToast('🔗 Profile link copied!')).catch(() => showToast('🔗 Profile link ready to share!'));
}

function editProfile() {
  showToast('✏️ Profile editing coming soon!');
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function checkUrlProfile() {
  const params = new URLSearchParams(window.location.search);
  const profileId = params.get('profile');
  if (profileId && profileId !== 'me') {
    const id = parseInt(profileId);
    const dev = developers.find(d => d.id === id);
    if (dev) {
      setTimeout(() => openDevProfile(id), 500);
    }
  }
}

function init() {
  setupNav();
  setupTheme();
  setupSearch();
  setupFilterTabs();
  renderFeed();
  renderTrendingSkills();
  renderSuggestedDevs();
  renderProfiles();
  renderProjects();
  renderOpportunities();
  checkUrlProfile();
}

document.addEventListener('DOMContentLoaded', init);

function showToast(message) {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}