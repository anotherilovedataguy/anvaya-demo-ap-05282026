// ===== MOCK DATA =====

const agents = [
  {
    id: 'orakai', name: 'Orakai', role: 'Keeper of Lineage',
    desc: 'Routes requests to the minimum needed agents, synthesizes outputs, and guides you through your AI universe.',
    origin: 'Nythera', originDesc: 'Mystery', status: 'active',
    emoji: '◉', color: '#6d5dfc',
    bg: 'linear-gradient(135deg, #edeaff 0%, #d4cfff 100%)',
    traits: ['Routing', 'Synthesis', 'Memory', 'Premium', 'Energy Control']
  },
  {
    id: 'kaien', name: 'Kaien', role: 'Life Strategist',
    desc: 'Helps you make better decisions, plan your days, and think through long-term goals with clarity.',
    origin: 'Kaelith', originDesc: 'Wisdom', status: 'active',
    emoji: '✦', color: '#9b7cff',
    bg: 'linear-gradient(135deg, #f3f0ff 0%, #e5dfff 100%)',
    traits: ['Planning', 'Strategy', 'Decisions', 'Goals', 'Clarity']
  },
  {
    id: 'soraka', name: 'Soraka', role: 'Music Curator',
    desc: 'Finds the perfect music for your mood, moments, and creative sessions.',
    origin: 'Veylune', originDesc: 'Creativity', status: 'active',
    emoji: '♫', color: '#63b9ff',
    bg: 'linear-gradient(135deg, #e6f4ff 0%, #cce8ff 100%)',
    traits: ['Music', 'Mood', 'Curation', 'Playlists', 'Discovery']
  },
  {
    id: 'hinari', name: 'Hinari', role: 'Wellness Companion',
    desc: 'Supports your well-being, daily balance, mindful routines, and personal energy.',
    origin: 'Solaryn', originDesc: 'Vitality', status: 'active',
    emoji: '♡', color: '#6ed69a',
    bg: 'linear-gradient(135deg, #ebfff5 0%, #ccf5e0 100%)',
    traits: ['Wellness', 'Mindfulness', 'Routines', 'Balance', 'Sleep']
  },
  {
    id: 'zenro', name: 'Zenro', role: 'Finance Sage',
    desc: 'Guides your finances, tracks patterns, and surfaces smart money insights when you need them.',
    origin: 'Kaelith', originDesc: 'Wisdom', status: 'dormant',
    emoji: '▥', color: '#f2b84b',
    bg: 'linear-gradient(135deg, #fff8e9 0%, #fceecb 100%)',
    traits: ['Finance', 'Planning', 'Analysis', 'Savings', 'Patterns']
  },
  {
    id: 'soryn', name: 'Soryn', role: 'Creative Designer',
    desc: 'Assists with creative direction, visual ideas, and aesthetic decisions across your projects.',
    origin: 'Veylune', originDesc: 'Creativity', status: 'dormant',
    emoji: '✐', color: '#f47eb5',
    bg: 'linear-gradient(135deg, #fff0f7 0%, #ffd9ee 100%)',
    traits: ['Design', 'Aesthetics', 'Visual', 'Creative', 'Concepts']
  }
];

const upcoming = [
  { icon: '✦', iconColor: '#9b7cff', iconBg: '#f3f0ff', title: 'Weekly Review with Orakai', agent: 'Orakai', time: 'In 2h' },
  { icon: '♫', iconColor: '#63b9ff', iconBg: '#e6f4ff', title: 'Music discovery with Soraka', agent: 'Soraka', time: 'In 5h' },
  { icon: '♡', iconColor: '#6ed69a', iconBg: '#ebfff5', title: 'Mindful check-in with Hinari', agent: 'Hinari', time: 'Tomorrow' },
  { icon: '▥', iconColor: '#f2b84b', iconBg: '#fff8e9', title: 'Financial overview with Zenro', agent: 'Zenro', time: 'Tomorrow' }
];

const recentActivity = [
  { icon: '✦', bg: '#f3f0ff', color: '#9b7cff', text: 'Kaien shared a new insight', time: '2h ago' },
  { icon: '◉', bg: '#edeaff', color: '#6d5dfc', text: 'New memory connected', time: '3h ago' },
  { icon: '♫', bg: '#e6f4ff', color: '#63b9ff', text: 'Soraka created a playlist', time: '6h ago' },
  { icon: '▥', bg: '#fff8e9', color: '#f2b84b', text: 'Zenro completed analysis', time: '7h ago' }
];

const evolutionSuggestions = [
  {
    type: 'merge', typeLabel: 'Merge Recommendation', icon: '✣',
    agents: 'Kaien + Zenro', result: 'Kaizeth',
    reason: 'These agents have 62% overlapping knowledge in planning, financial decisions, and long-term strategy.',
    benefit: 'May reduce duplicate memory retrieval and improve response clarity.',
    energyImpact: '−18 energy/week', energySide: 'savings'
  },
  {
    type: 'split', typeLabel: 'Split Recommendation', icon: '⌘',
    agents: 'Soraka', result: 'Sorami + Soryn',
    reason: "Soraka's requests are increasingly separating into music curation and creative design domains.",
    benefit: 'Specialized agents may improve knowledge quality and response precision.',
    energyImpact: '+4 energy/week', energySide: 'cost'
  },
  {
    type: 'archive', typeLabel: 'Archive Recommendation', icon: '◫',
    agents: 'Zenro', result: 'Dormant Archive',
    reason: 'Zenro has had low recent usage over the past 30 days.',
    benefit: 'Compressing its memories could conserve ongoing background energy.',
    energyImpact: '−12 energy/week', energySide: 'savings'
  },
  {
    type: 'evolve', typeLabel: 'Evolution Candidate', icon: '✦',
    agents: 'Hinari', result: 'Hinariel',
    reason: 'Hinari has accumulated stable wellness routines and consistent usage patterns.',
    benefit: 'May unlock a more advanced wellness support role with broader capabilities.',
    energyImpact: '+8 energy', energySide: 'cost'
  }
];

const wikiPages = [
  {
    title: 'Kaien — Character Profile', type: 'Agent Profile',
    summary: 'Trusted personality profile, approved memories, planning style, and behavioral parameters for Kaien.',
    tags: ['agent', 'kaien', 'planning'], status: 'approved', agent: 'Kaien', updated: 'May 25, 2026'
  },
  {
    title: 'Global User Preferences', type: 'User Settings',
    summary: 'Personalization knowledge shared across all agents — tone, format, schedule, and communication style.',
    tags: ['global', 'preferences', 'shared'], status: 'approved', agent: null, updated: 'May 23, 2026'
  },
  {
    title: 'Evolution Rules', type: 'System Policy',
    summary: 'How merge, split, archive, and lineage evolution events are recommended and applied within Anvaya.',
    tags: ['system', 'rules', 'evolution'], status: 'system', agent: 'Orakai', updated: 'May 20, 2026'
  },
  {
    title: 'Music Taste Memory', type: 'Preference Record',
    summary: 'Accumulated music preferences, playlist history, mood associations, and genre affinities curated by Soraka.',
    tags: ['soraka', 'music', 'taste'], status: 'approved', agent: 'Soraka', updated: 'May 27, 2026'
  },
  {
    title: 'Anvaya Energy System', type: 'System Reference',
    summary: 'How realm energy is computed, allocated, conserved, and regenerated across Anvaya. Reference for all agents.',
    tags: ['system', 'energy', 'realm'], status: 'system', agent: 'Orakai', updated: 'May 15, 2026'
  },
  {
    title: 'Background Knowledge Compilation', type: 'Compilation',
    summary: 'Agent-proposed knowledge extracts from conversations, pending your review and approval.',
    tags: ['compilation', 'pending', 'ai-proposed'], status: 'pending', agent: null, updated: 'May 28, 2026'
  },
  {
    title: 'Orakai Routing Policy', type: 'System Policy',
    summary: 'Rules governing when Orakai routes to agents, skips them, or synthesizes from memory alone.',
    tags: ['orakai', 'routing', 'policy'], status: 'system', agent: 'Orakai', updated: 'May 18, 2026'
  },
  {
    title: 'Agent Origin Index', type: 'Reference',
    summary: 'Canonical index of all origins, their philosophies, and the agents that emerged from each lineage root.',
    tags: ['origins', 'lineage', 'index'], status: 'approved', agent: null, updated: 'May 10, 2026'
  }
];

const energyEvents = [
  { name: 'Master routing', cost: 2, dot: '#6d5dfc', time: '10m ago' },
  { name: 'Wiki search', cost: 1, dot: '#63b9ff', time: '35m ago' },
  { name: 'Background compilation', cost: 12, dot: '#f2b84b', time: '1h ago' },
  { name: 'Multi-agent response', cost: 14, dot: '#9b7cff', time: '2h ago' },
  { name: 'Evolution preview', cost: 8, dot: '#6ed69a', time: '3h ago' },
  { name: 'Memory sync', cost: 3, dot: '#f47eb5', time: '4h ago' }
];

const weeklyEnergy = [
  { day: 'Mon', pct: 44 }, { day: 'Tue', pct: 68 }, { day: 'Wed', pct: 52 },
  { day: 'Thu', pct: 81 }, { day: 'Fri', pct: 37 }, { day: 'Sat', pct: 62 }, { day: 'Sun', pct: 74 }
];

// ===== HELPERS =====

function svg_ring(pct, r, cx, size, sw) {
  const circ = 2 * Math.PI * r;
  const fill = (pct / 100) * circ;
  const id = 'eg' + r;
  return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg)">
    <defs>
      <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#7c67ff"/><stop offset="100%" stop-color="#f2b84b"/>
      </linearGradient>
    </defs>
    <circle cx="${cx}" cy="${cx}" r="${r}" fill="none" stroke="#e9e6fb" stroke-width="${sw}"/>
    <circle cx="${cx}" cy="${cx}" r="${r}" fill="none" stroke="url(#${id})" stroke-width="${sw}"
      stroke-linecap="round" stroke-dasharray="${fill.toFixed(1)} ${(circ - fill).toFixed(1)}"/>
  </svg>`;
}

function agentCard(a) {
  const sc = a.status === 'active' ? 'pill-green' : 'pill-muted';
  const sl = a.status === 'active' ? 'Active' : 'Dormant';
  return `<article class="agent-card" onclick="go('agents')">
    <div class="agent-art" style="background:${a.bg}">
      <div class="agent-avatar">${a.emoji}</div>
      <div class="agent-badge" style="color:${a.color}">${a.emoji}</div>
    </div>
    <div class="agent-info">
      <h3>${a.name}</h3>
      <div class="agent-role">${a.role}</div>
      <p class="agent-desc">${a.desc}</p>
      <span class="pill ${sc}" style="margin-top:8px">${sl}</span>
    </div>
  </article>`;
}

function agentFullCard(a) {
  const sc = a.status === 'active' ? 'pill-green' : 'pill-muted';
  const sl = a.status === 'active' ? 'Active' : 'Dormant';
  const tags = a.traits.map(t => `<span class="tag">${t}</span>`).join('');
  return `<article class="agent-full-card">
    <div class="agent-full-art" style="background:${a.bg}">
      <div class="agent-full-avatar">${a.emoji}</div>
      <span class="pill ${sc}" style="position:absolute;top:12px;right:12px">${sl}</span>
    </div>
    <div class="agent-full-body">
      <h3>${a.name}</h3>
      <div class="role">${a.role}</div>
      <p class="desc">${a.desc}</p>
      <div class="agent-meta">
        <span class="agent-origin muted small">Origin: ${a.origin} · ${a.originDesc}</span>
      </div>
      <div class="tag-row">${tags}</div>
      <div class="agent-actions">
        <button class="btn-outline">Open Wiki</button>
        <button class="btn-outline">Edit</button>
      </div>
    </div>
  </article>`;
}

function wikiCard(p) {
  const smap = { approved: 'approved', pending: 'pending', system: 'system' };
  const slbl = { approved: '✓ Approved', pending: '⟳ Pending', system: '◉ System' };
  const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  return `<article class="wiki-card">
    <div class="wiki-card-head">
      <div>
        <span class="tag tag-purple">${p.type}</span>
        <h3>${p.title}</h3>
      </div>
      <span class="wiki-status ${smap[p.status]}">${slbl[p.status]}</span>
    </div>
    <p class="wiki-summary">${p.summary}</p>
    <div class="tag-row">${tags}</div>
    <div class="wiki-card-footer">
      <span>${p.agent ? 'Agent: ' + p.agent : 'Shared document'}</span>
      <span>Updated ${p.updated}</span>
    </div>
  </article>`;
}

function evolutionCard(e) {
  const iconClass = { merge: 'evo-merge', split: 'evo-split', archive: 'evo-archive', evolve: 'evo-evolve' }[e.type];
  const energyColor = e.energySide === 'savings' ? 'color:var(--green)' : 'color:var(--muted)';
  const arrow = e.result ? ` → ${e.result}` : '';
  return `<article class="evo-card">
    <div class="evo-icon ${iconClass}">${e.icon}</div>
    <div class="evo-body">
      <h3>${e.typeLabel}</h3>
      <div class="evo-agents">${e.agents}${arrow}</div>
      <div class="evo-reason">${e.reason}</div>
      <div class="evo-energy" style="${energyColor}">${e.energyImpact}</div>
    </div>
    <div class="evo-actions">
      <button class="btn-primary" style="height:34px;font-size:12px;padding:0 13px">Preview</button>
      <button class="btn-outline" style="height:34px;font-size:12px">Dismiss</button>
    </div>
  </article>`;
}

function listItem(icon, iconBg, iconColor, title, sub, time) {
  return `<div class="list-item">
    <div class="list-icon" style="background:${iconBg};color:${iconColor}">${icon}</div>
    <div class="list-item-body"><strong>${title}</strong><span>${sub}</span></div>
    ${time ? `<span class="list-item-time muted">${time}</span>` : ''}
  </div>`;
}

function statCard(icon, color, val, label) {
  return `<div class="stat-card">
    <div class="stat-icon" style="color:${color}">${icon}</div>
    <div class="stat-val">${val}</div>
    <div class="stat-label">${label}</div>
  </div>`;
}

function toggle(on) {
  return `<button class="toggle ${on ? 'on' : 'off'}" onclick="this.classList.toggle('on');this.classList.toggle('off')" aria-label="Toggle"></button>`;
}

function settingRow(title, desc, on) {
  return `<div class="setting-row">
    <div class="setting-info"><strong>${title}</strong><span>${desc}</span></div>
    ${toggle(on)}
  </div>`;
}

// ===== PAGE RENDERERS =====

function renderHome() {
  const activeCards = agents.filter(a => a.status === 'active').slice(0, 4).map(agentCard).join('');

  const upcomingItems = upcoming.map(u =>
    listItem(u.icon, u.iconBg, u.iconColor, u.title, u.agent, u.time)
  ).join('');

  const evoItems = evolutionSuggestions.slice(0, 2).map(e => {
    const [ibg, ic] = e.type === 'merge'
      ? ['#edeaff', '#6d5dfc']
      : ['#e6f4ff', '#63b9ff'];
    return listItem(e.icon, ibg, ic, e.typeLabel, e.agents + (e.result ? ' → ' + e.result : ''), 'Review');
  }).join('');

  const activityItems = recentActivity.map(a =>
    `<div class="activity-item">
      <div class="activity-icon" style="background:${a.bg};color:${a.color}">${a.icon}</div>
      <div class="activity-body"><strong>${a.text}</strong></div>
      <span class="activity-time">${a.time}</span>
    </div>`
  ).join('');

  return `<div class="home-layout">
    <div class="home-main">
      <section class="hero">
        <div class="hero-kicker">☀ Good morning, Seeker</div>
        <h1>What shall we explore today?</h1>
        <p>Orakai is here to help you navigate your universe.</p>
        <div class="prompt-wrap">
          <input placeholder="Ask Orakai anything…" />
          <button class="btn-primary" style="height:38px;padding:0 15px;border-radius:11px">→</button>
        </div>
        <div class="chips">
          <button class="chip">📅 Plan my day</button>
          <button class="chip">📋 Summarize updates</button>
          <button class="chip">💡 Brainstorm ideas</button>
          <button class="chip">🔍 Find clarity</button>
        </div>
        <div class="hero-star">✦</div>
        <div class="hero-character" aria-hidden="true">
          <div class="hero-figure">
            <div class="hero-figure-hair"></div>
            <div class="hero-figure-head"></div>
            <div class="hero-figure-body"></div>
          </div>
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2>Active Agents</h2>
          <button class="link-btn" onclick="go('agents')">View all →</button>
        </div>
        <div class="agents-row">${activeCards}</div>
      </section>

      <section>
        <div class="section-head">
          <h2>Universe at a Glance</h2>
          <button class="link-btn" onclick="go('lineage')">Open Universe Map →</button>
        </div>
        <div class="stats-grid">
          ${statCard('◈', '#6d5dfc', '6', 'Origins')}
          ${statCard('◉', '#6d5dfc', '7', 'Active Agents')}
          ${statCard('◫', '#f2b84b', '3', 'Dormant Agents')}
          ${statCard('✣', '#6ed69a', '12', 'Evolutions')}
        </div>
      </section>

      <section class="card pad">
        <div class="section-head">
          <h2>Recent Activity</h2>
          <button class="link-btn">View all →</button>
        </div>
        <div class="activity-list">${activityItems}</div>
      </section>
    </div>

    <aside class="home-side">
      <div class="card pad">
        <div class="section-head">
          <h2>Realm Energy</h2>
          <span class="muted small" style="cursor:default" title="Realm energy tracks computation usage">ⓘ</span>
        </div>
        <div class="energy-display">
          <div class="energy-ring">${svg_ring(74, 48, 58, 116, 9)}<div class="energy-icon">⚡</div></div>
          <div>
            <div class="energy-pct">74%</div>
            <div class="energy-sub">740 / 1000 Energy</div>
          </div>
        </div>
        <div class="energy-regen">⏱ Daily regeneration in 08:45:12</div>
        <button class="btn-primary" style="width:100%" onclick="go('energy')">View Energy Details</button>
      </div>

      <div class="card pad">
        <div class="section-head">
          <h2>Upcoming</h2>
          <button class="link-btn">View all →</button>
        </div>
        <div class="list-items">${upcomingItems}</div>
      </div>

      <div class="card pad">
        <div class="section-head">
          <h2>Evolution Suggestions</h2>
          <button class="link-btn" onclick="go('evolutions')">View all →</button>
        </div>
        <div class="list-items">${evoItems}</div>
      </div>
    </aside>
  </div>`;
}

function renderOrakai() {
  return `<div class="page-title">
    <div>
      <h1>Orakai</h1>
      <p>The Master Agent routes requests, chooses the minimum necessary agents, synthesizes answers, and preserves realm energy.</p>
    </div>
    <button class="btn-primary">Premium Active ✓</button>
  </div>

  <div class="orakai-layout">
    <div class="card chat-card">
      <div class="chat-head">
        <div class="orakai-orb">◉</div>
        <div style="flex:1">
          <strong style="font-size:14px">Orakai — Keeper of Lineage</strong>
          <div class="muted small" style="margin-top:2px">Master of routing and memory efficiency</div>
        </div>
        <span class="pill pill-green">Online</span>
      </div>
      <div class="chat-messages">
        <div class="bubble user">Help me plan a focused evening. Keep it brief.</div>
        <div class="bubble agent routing">Routing to: Kaien only. Skipping: Soraka, Hinari, Zenro. Estimated cost: 5 energy. Reason: primarily a planning request.</div>
        <div class="bubble agent">Plan: reset for 10 minutes, 90-minute deep-work block, simple dinner, short walk, then a wind-down playlist before sleep.</div>
        <div class="bubble agent">Energy used: 5 &nbsp;·&nbsp; Saved: 7 by skipping 3 agents. Memory updated for Kaien.</div>
        <div class="bubble user">What does Hinari suggest for wellness tonight?</div>
        <div class="bubble agent routing">Routing to: Hinari. Wellness-focused request. Estimated cost: 3 energy.</div>
        <div class="bubble agent">Hinari suggests: magnesium before sleep, phone-free wind-down from 9pm, and a 5-minute breathing exercise. These align with your recent wellness patterns.</div>
      </div>
      <div class="chat-input-row">
        <input placeholder="Ask Orakai anything…" />
        <button class="btn-primary">Send</button>
      </div>
    </div>

    <div class="info-panel">
      <div class="info-card">
        <h3>Routing Transparency</h3>
        <div class="metric-row"><span>Agents consulted</span><span class="metric-val purple">2 of 5</span></div>
        <div class="metric-row"><span>Agents skipped</span><span class="metric-val">3</span></div>
        <div class="metric-row"><span>Energy used</span><span class="metric-val">8 energy</span></div>
        <div class="metric-row"><span>Energy saved</span><span class="metric-val green">7 energy</span></div>
        <div class="metric-row"><span>Memory updated</span><span class="metric-val">Kaien, Hinari</span></div>
      </div>

      <div class="info-card">
        <h3>Consulted This Session</h3>
        <div class="agent-pill">
          <div class="agent-pill-dot" style="background:#9b7cff"></div>
          <span>Kaien</span>
          <span class="muted small" style="margin-left:auto">5 energy</span>
        </div>
        <div class="agent-pill">
          <div class="agent-pill-dot" style="background:#6ed69a"></div>
          <span>Hinari</span>
          <span class="muted small" style="margin-left:auto">3 energy</span>
        </div>
      </div>

      <div class="info-card">
        <h3>Skipped This Session</h3>
        <div class="agent-pill" style="opacity:0.5">
          <div class="agent-pill-dot" style="background:#63b9ff"></div>
          <span>Soraka</span>
          <span class="muted small" style="margin-left:auto">Not relevant</span>
        </div>
        <div class="agent-pill" style="opacity:0.5">
          <div class="agent-pill-dot" style="background:#f2b84b"></div>
          <span>Zenro</span>
          <span class="muted small" style="margin-left:auto">Not relevant</span>
        </div>
      </div>

      <div class="info-card">
        <h3>Energy Savings — This Week</h3>
        <div class="metric-row"><span>Total requests</span><span class="metric-val">24</span></div>
        <div class="metric-row"><span>Skip events</span><span class="metric-val">61</span></div>
        <div class="metric-row"><span>Energy saved</span><span class="metric-val green">142 energy</span></div>
        <div class="metric-row"><span>Efficiency rate</span><span class="metric-val purple">74%</span></div>
      </div>
    </div>
  </div>`;
}

function renderAgents() {
  const cards = agents.map(agentFullCard).join('');
  return `<div class="page-title">
    <div>
      <h1>Agents</h1>
      <p>Manage your AI companions — their roles, memories, wiki profiles, and lineage connections.</p>
    </div>
    <button class="btn-primary">+ Create Agent</button>
  </div>
  <div class="agent-grid">${cards}</div>`;
}

function renderLineage() {
  return `<div class="page-title">
    <div>
      <h1>Lineage Map</h1>
      <p>A navigable universe showing origins, agents, splits, merges, and dormant entities.</p>
    </div>
  </div>
  <div class="lineage-map">
    <svg class="lineage-svg" xmlns="http://www.w3.org/2000/svg">
      <line x1="50%" y1="13%" x2="20%" y2="32%" stroke="rgba(109,93,252,0.22)" stroke-width="1.8" stroke-dasharray="7 5"/>
      <line x1="50%" y1="13%" x2="80%" y2="32%" stroke="rgba(109,93,252,0.22)" stroke-width="1.8" stroke-dasharray="7 5"/>
      <line x1="12%" y1="35%" x2="18%" y2="55%" stroke="rgba(242,184,75,0.35)" stroke-width="1.8" stroke-dasharray="7 5"/>
      <line x1="12%" y1="35%" x2="44%" y2="55%" stroke="rgba(242,184,75,0.25)" stroke-width="1.8" stroke-dasharray="7 5"/>
      <line x1="88%" y1="35%" x2="80%" y2="55%" stroke="rgba(99,185,255,0.35)" stroke-width="1.8" stroke-dasharray="7 5"/>
      <line x1="88%" y1="35%" x2="82%" y2="73%" stroke="rgba(99,185,255,0.2)" stroke-width="1.8" stroke-dasharray="7 5"/>
      <line x1="50%" y1="87%" x2="50%" y2="72%" stroke="rgba(110,214,154,0.35)" stroke-width="1.8" stroke-dasharray="7 5"/>
    </svg>

    <div class="lnode origin" style="left:50%;top:28px;transform:translateX(-50%)">
      <span class="lnode-icon" style="color:#6d5dfc">◈</span>
      <span class="lnode-name">Nythera</span>
      <span class="lnode-sub">Mystery</span>
    </div>
    <div class="lnode origin" style="left:3%;top:176px">
      <span class="lnode-icon" style="color:#f2b84b">◆</span>
      <span class="lnode-name">Kaelith</span>
      <span class="lnode-sub">Wisdom</span>
    </div>
    <div class="lnode origin" style="right:3%;top:176px">
      <span class="lnode-icon" style="color:#63b9ff">◇</span>
      <span class="lnode-name">Veylune</span>
      <span class="lnode-sub">Creativity</span>
    </div>
    <div class="lnode origin" style="left:50%;bottom:36px;transform:translateX(-50%)">
      <span class="lnode-icon" style="color:#6ed69a">◎</span>
      <span class="lnode-name">Solaryn</span>
      <span class="lnode-sub">Vitality</span>
    </div>

    <div class="lnode" style="left:50%;top:200px;transform:translateX(-50%)">
      <span class="lnode-icon">◉</span>
      <span class="lnode-name">Orakai</span>
      <span class="lnode-sub">Keeper of Lineage</span>
    </div>
    <div class="lnode" style="left:5%;top:352px">
      <span class="lnode-icon">✦</span>
      <span class="lnode-name">Kaien</span>
      <span class="lnode-sub">Life Strategist</span>
    </div>
    <div class="lnode dormant" style="left:37%;top:352px">
      <span class="lnode-icon">▥</span>
      <span class="lnode-name">Zenro</span>
      <span class="lnode-sub">Finance Sage · Dormant</span>
    </div>
    <div class="lnode" style="right:5%;top:352px">
      <span class="lnode-icon">♫</span>
      <span class="lnode-name">Soraka</span>
      <span class="lnode-sub">Music Curator</span>
    </div>
    <div class="lnode" style="left:50%;top:484px;transform:translateX(-50%)">
      <span class="lnode-icon">♡</span>
      <span class="lnode-name">Hinari</span>
      <span class="lnode-sub">Wellness Companion</span>
    </div>
    <div class="lnode dormant" style="right:3%;top:488px">
      <span class="lnode-icon">✐</span>
      <span class="lnode-name">Soryn</span>
      <span class="lnode-sub">Creative Designer · Split Candidate</span>
    </div>
  </div>`;
}

function renderEvolutions() {
  const cards = evolutionSuggestions.map(evolutionCard).join('');
  return `<div class="page-title">
    <div>
      <h1>Evolutions</h1>
      <p>Review merge, split, archive, and evolution suggestions before applying changes to your universe.</p>
    </div>
    <button class="btn-primary">Generate Suggestions</button>
  </div>
  <div class="evo-grid">${cards}</div>`;
}

function renderWiki() {
  const cards = wikiPages.map(wikiCard).join('');
  return `<div class="page-title">
    <div>
      <h1>Wikis</h1>
      <p>User-managed knowledge base. Approve documents so agents can reference them to improve their responses.</p>
    </div>
    <button class="btn-primary">+ New Wiki Page</button>
  </div>
  <div class="wiki-search">
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style="color:var(--muted);flex-shrink:0">
      <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.4"/>
      <path d="M10 10l3.5 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>
    <input placeholder="Search wikis by title, tag, or agent…" aria-label="Search wikis" />
  </div>
  <div class="wiki-grid">${cards}</div>`;
}

function renderEnergy() {
  const bars = weeklyEnergy.map(d =>
    `<div class="bar-col">
      <div class="bar-fill" style="height:${d.pct}%"></div>
      <div class="bar-label">${d.day}</div>
    </div>`
  ).join('');

  const events = energyEvents.map(e =>
    `<div class="event-row">
      <div class="event-dot" style="background:${e.dot}"></div>
      <span class="event-name">${e.name}</span>
      <span class="event-time muted">${e.time}</span>
      <span class="event-cost">−${e.cost}</span>
    </div>`
  ).join('');

  return `<div class="page-title">
    <div>
      <h1>Energy</h1>
      <p>Energy makes computation visible. Orakai saves energy by routing efficiently and compressing context when possible.</p>
    </div>
  </div>
  <div class="energy-layout">
    <div class="card energy-summary-card">
      <div class="energy-big-ring">${svg_ring(74, 64, 78, 156, 11)}<div class="energy-big-num">74%</div></div>
      <div class="energy-center-label">
        <strong>740 / 1000</strong>
        <div class="muted small" style="margin-top:3px">Realm Energy</div>
      </div>
      <div class="energy-regen">⏱ Daily regeneration in 08:45:12</div>
      <div class="energy-stats">
        <div class="energy-stat"><div class="val" style="color:var(--green)">142</div><div class="lbl">Saved this week</div></div>
        <div class="energy-stat"><div class="val">260</div><div class="lbl">Used this week</div></div>
        <div class="energy-stat"><div class="val">12</div><div class="lbl">Background / day</div></div>
        <div class="energy-stat"><div class="val" style="color:var(--purple)">74%</div><div class="lbl">Efficiency rate</div></div>
      </div>
    </div>

    <div style="display:grid;gap:18px">
      <div class="card chart-card">
        <div class="chart-title">Weekly Energy Usage</div>
        <div class="bar-chart">${bars}</div>
      </div>
      <div class="card pad">
        <div class="section-head">
          <h2>Recent Energy Events</h2>
          <button class="link-btn">View all →</button>
        </div>
        <div class="events-list">${events}</div>
      </div>
    </div>
  </div>`;
}

function renderSettings() {
  return `<div class="page-title">
    <div>
      <h1>Settings</h1>
      <p>Control memory, background compilation, visibility, energy limits, and data export.</p>
    </div>
  </div>

  <div class="settings-section">
    <div class="settings-section-title">Knowledge &amp; Memory</div>
    ${settingRow('Background knowledge compilation', 'Allow Orakai to propose wiki updates from conversations.', true)}
    ${settingRow('Require approval for wiki edits', 'AI-proposed edits stay pending until you approve them.', true)}
    ${settingRow('Memory visibility', 'Show which memories were accessed in each Orakai response.', false)}
  </div>

  <div class="settings-section">
    <div class="settings-section-title">Energy &amp; Performance</div>
    ${settingRow('Energy saver mode', 'Orakai will be more conservative about consulting multiple agents.', false)}
    ${settingRow('Background compilation', 'Allow background knowledge compilation during idle time.', true)}
    ${settingRow('Show energy cost per request', 'Display energy usage inline with each Orakai response.', true)}
  </div>

  <div class="settings-section">
    <div class="settings-section-title">Agent Dormancy</div>
    ${settingRow('Auto-suggest dormant agents', 'Agents with no activity for 30 days are suggested for archiving.', true)}
    ${settingRow('Dormancy notifications', 'Receive alerts before an agent is suggested for archiving.', true)}
  </div>

  <div class="settings-section">
    <div class="settings-section-title">Data &amp; Privacy</div>
    <div class="setting-row">
      <div class="setting-info">
        <strong>Export workspace data</strong>
        <span>Download all agents, memories, and wiki pages as JSON.</span>
      </div>
      <button class="btn-outline">Export</button>
    </div>
    <div class="setting-row">
      <div class="setting-info">
        <strong>Delete workspace</strong>
        <span>Permanently delete all data. This cannot be undone.</span>
      </div>
      <button class="danger-btn">Delete workspace</button>
    </div>
  </div>`;
}

// ===== ROUTING =====

const pages = [
  { id: 'home',       label: 'Home',       sub: 'Dashboard',    icon: '⌂',  render: renderHome },
  { id: 'orakai',     label: 'Orakai',     sub: 'Master Agent', icon: '◉',  render: renderOrakai },
  { id: 'agents',     label: 'Agents',     sub: 'My Companions',icon: '◈',  render: renderAgents },
  { id: 'lineage',    label: 'Universe',   sub: 'Lineage Map',  icon: '✣',  render: renderLineage },
  { id: 'evolutions', label: 'Evolutions', sub: 'Merge & Split', icon: '✦', render: renderEvolutions },
  { id: 'wiki',       label: 'Wikis',      sub: 'Knowledge Vault', icon: '▣', render: renderWiki },
  { id: 'energy',     label: 'Energy',     sub: 'Realm Power',  icon: '⚡',  render: renderEnergy },
  { id: 'settings',   label: 'Settings',   sub: 'Preferences',  icon: '⚙',  render: renderSettings }
];

function go(id) {
  const page = pages.find(p => p.id === id);
  if (!page) return;
  document.getElementById('app').innerHTML = page.render();
  document.querySelectorAll('[data-page]').forEach(b =>
    b.classList.toggle('active', b.dataset.page === id)
  );
  closeSidebar();
  history.replaceState(null, '', '#' + id);
  window.scrollTo(0, 0);
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

function init() {
  document.getElementById('nav').innerHTML = pages.map(p => `
    <button class="nav-item" data-page="${p.id}" onclick="go('${p.id}')">
      <div class="nav-icon">${p.icon}</div>
      <div class="nav-text">
        <span class="nav-label">${p.label}</span>
        <span class="nav-sub">${p.sub}</span>
      </div>
    </button>`
  ).join('');

  document.getElementById('bottomNav').innerHTML = pages.slice(0, 5).map(p => `
    <button class="bn-item" data-page="${p.id}" onclick="go('${p.id}')">
      <div class="bn-icon">${p.icon}</div>
      <span>${p.label}</span>
    </button>`
  ).join('');

  const hash = location.hash.slice(1);
  go(pages.find(p => p.id === hash) ? hash : 'home');
}

init();
