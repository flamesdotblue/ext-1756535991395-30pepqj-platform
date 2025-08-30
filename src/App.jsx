import React from 'react';
import Hero from './components/Hero';
import Members from './components/Members';
import Reels from './components/Reels';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-inter">
      <Hero />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-24 py-16">
        <Members />
        <Reels />
      </main>
      <Footer />
    </div>
  );
}

export default App;
