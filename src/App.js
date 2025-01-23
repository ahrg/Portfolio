import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Background from './Background';

function App() {
  return (
    <BrowserRouter>
      <div className ="view">
        {/* Include NavBar here */}
        <NavBar />
        <Background />
        {/* Define routes */}
        <Routes>
          {/* Set WorkoutProgram as the default route */}
          <Route path="/" element={<AboutMe/>} /> {/* Main Page */}
          <Route path="/AboutMe" element={<AboutMe />} />
          {/* Route for WorkoutProgram */}
          <Route path="/Resume" element={<Resume />} />

          <Route path="/Projects" element={<Projects />} />

          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

