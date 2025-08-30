import React from 'react';

const reels = [
  {
    title: 'Glimmer Sampler 2025',
    url: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    note: 'WIP builds and experiments from the community.'
  },
  {
    title: 'Prototype: Cozy Platformer Feel Test',
    url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    note: 'Juice passes, coyote time, and soft landings.'
  },
  {
    title: 'Micro JRPG Combat Loop',
    url: 'https://www.youtube.com/embed/oHg5SJYRHA0',
    note: 'UI readability and snappy feedback.'
  }
];

function Reel({ title, url, note }) {
  return (
    <div className="rounded-xl overflow-hidden border border-zinc-800/70 bg-zinc-900/40">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold">{title}</h3>
        {note && <p className="mt-1 text-sm text-zinc-400">{note}</p>}
      </div>
    </div>
  );
}

export default function Reels() {
  return (
    <section id="reels" className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold">Demo reels</h2>
        <p className="text-zinc-400 text-sm">Peeks at things were tinkering with.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        {reels.map((r) => (
          <Reel key={r.title} {...r} />
        ))}
      </div>
    </section>
  );
}
