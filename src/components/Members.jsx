import React from 'react';

function PixelAvatar({ size = 72, pixels = [] }) {
  const cols = 8;
  const rows = 8;
  const cell = Math.floor(size / cols);
  const grid = Array.from({ length: rows * cols }, (_, i) => pixels[i] || 'transparent');

  return (
    <div
      className="rounded-md overflow-hidden"
      style={{
        width: cols * cell,
        height: rows * cell,
        imageRendering: 'pixelated',
      }}
    >
      <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {grid.map((color, i) => (
          <div key={i} style={{ width: cell, height: cell, background: color }} />
        ))}
      </div>
    </div>
  );
}

const palettes = {
  dusk: ['#0f0f1a', '#1a1a2e', '#e43f5a', '#f7f7ff', '#ffdd57', '#2b2b40', '#7e57c2'],
  moss: ['#0b1d13', '#1f4037', '#99f2c8', '#e5f7ef', '#4caf50', '#2e7d32', '#225f47'],
  ember: ['#1a0b0b', '#3b1f1f', '#ff7043', '#ffd180', '#ffe0b2', '#8d6e63', '#4e342e'],
};

function makeFace(palette) {
  const [bg, shade, accent, eye, cheek, hair, mouth] = palette;
  const grid = new Array(64).fill(bg);
  // Hair/top
  [0,1,2,5,6,7,8,15].forEach(i => grid[i] = hair);
  // Face base
  for (let r = 2; r <= 5; r++) {
    for (let c = 2; c <= 5; c++) {
      grid[r*8 + c] = shade;
    }
  }
  // Eyes
  grid[3*8 + 3] = eye; grid[3*8 + 4] = eye;
  // Cheeks
  grid[4*8 + 2] = cheek; grid[4*8 + 5] = cheek;
  // Mouth
  grid[5*8 + 3] = mouth; grid[5*8 + 4] = mouth;
  // Accent shirt
  for (let c = 1; c <= 6; c++) grid[6*8 + c] = accent;
  for (let c = 2; c <= 5; c++) grid[7*8 + c] = accent;
  return grid;
}

const members = [
  {
    name: 'Ari “Lumen” Soto',
    role: 'Pixel artist / animator',
    bio: 'Makes tiny characters with big feelings. Coffee-fueled frame nerd.',
    palette: palettes.dusk,
  },
  {
    name: 'Kai Rivers',
    role: 'Design & code',
    bio: 'Builds toys that accidentally become games. Loves crunchy movement.',
    palette: palettes.moss,
  },
  {
    name: 'Mina Park',
    role: 'Composer / sound',
    bio: 'Writes melodies that feel like home. Chiptune, lofi, and late-night pianos.',
    palette: palettes.ember,
  },
];

function MemberCard({ member }) {
  return (
    <div className="group rounded-xl border border-zinc-800/70 bg-zinc-900/50 backdrop-blur-sm p-5 hover:border-zinc-700 transition-colors">
      <div className="flex items-start gap-4">
        <PixelAvatar size={72} pixels={makeFace(member.palette)} />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-zinc-50 leading-tight">{member.name}</h3>
          <p className="text-sm text-zinc-400">{member.role}</p>
          <p className="mt-3 text-sm text-zinc-200/90">{member.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <section id="members" className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold">Crew</h2>
        <p className="text-zinc-400 text-sm">A tiny circle of makers who care a lot.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {members.map((m) => (
          <MemberCard key={m.name} member={m} />
        ))}
      </div>
    </section>
  );
}
