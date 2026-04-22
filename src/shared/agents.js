// agents.js — TEV Artists registry
// 3 research personas (Nigo, Takashi Murakami, Quiccs) + CHIEF + DEPUTY.

const AGENTS = [
  { id: 'NIGO', name: 'Nigo', type: 'research', company: 'HUMAN MADE / Kenzo' },
  { id: 'MURAKAMI', name: 'Takashi Murakami', type: 'research', company: 'Kaikai Kiki' },
  { id: 'QUICCS', name: 'Quiccs', type: 'research', company: 'Quiccs Studio' },
  { id: 'CHIEF', name: 'Chief', type: 'chief', company: 'TEV Artists' },
  { id: 'DEPUTY', name: 'Deputy', type: 'tension', company: 'TEV Artists' }
];

const RESEARCH_IDS = AGENTS.filter((a) => a.type === 'research').map((a) => a.id);

module.exports = { AGENTS, RESEARCH_IDS };
