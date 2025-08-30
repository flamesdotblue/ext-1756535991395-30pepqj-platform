import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/70 bg-zinc-950/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-zinc-400">
            9 {new Date().getFullYear()} Glimmer. Invite-only. If you know, you know.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#members" className="text-zinc-300 hover:text-white transition-colors">Crew</a>
          <a href="#reels" className="text-zinc-300 hover:text-white transition-colors">Reels</a>
          <span className="text-zinc-700">|</span>
          <a
            href="mailto:hello@glimmer.dev"
            className="inline-flex items-center rounded-md bg-zinc-800 px-3 py-2 hover:bg-zinc-700 text-zinc-100"
          >
            Say hi
          </a>
        </div>
      </div>
    </footer>
  );
}
