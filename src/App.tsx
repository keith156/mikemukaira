/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
