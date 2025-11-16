import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';
import { 
  personalInfo, 
  profile, 
  experience, 
  skills,
  projects,
  certifications,
  education,
  languages 
} from './data/resumeData';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header personalInfo={personalInfo} />
      
      <main className="main-content">
        <Profile profile={profile} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Certifications certifications={certifications} />
        <Education education={education} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
