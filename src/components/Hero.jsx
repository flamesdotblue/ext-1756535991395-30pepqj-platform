import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/30 to-zinc-950/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
          Glimmer
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-zinc-200/90">
          Games made with heart
        </p>
        <p className="mt-6 max-w-2xl text-sm sm:text-base text-zinc-300/80">
          An invite-only nook for independent game makers. Cozy, hand-built, and just a little bit magical.
        </p>
      </div>
    </section>
  );
}
