// src/pages/Resume.jsx  ← create this new file at src/pages/Resume.jsx
// This is your existing CV — zero changes to any components below
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Languages from '../components/Languages';
import Footer from '../components/Footer';
import {
  personalInfo,
  profile,
  experience,
  skills,
  projects,
  certifications,
  education,
  languages,
} from '../data/resumeData';
import '../App.css';
import './Resume.css';

export default function Resume() {
  return (
    <div className="app">

      {/* ── Resume nav bar ── */}
      <nav className="rn-nav" aria-label="Resume navigation">
        <div className="rn-nav__inner">
          <Link to="/" className="rn-nav__back">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          <span className="rn-nav__logo">KH<span className="rn-accent">.</span></span>

          <button className="rn-nav__print" onClick={() => window.print()} aria-label="Print resume">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Print / Save PDF
          </button>
        </div>
      </nav>

      <Header personalInfo={personalInfo} />
      <main className="main-content">
        <Profile profile={profile} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Certifications certifications={certifications} />
        <Education education={education} />
        <Languages languages={languages} />
      </main>
      <Footer />
    </div>
  );
}
