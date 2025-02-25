import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import { ProjectCardInfo } from './ProjectCardInfo'
import Projects from './Projects'
import Resume from './Resume';
import Background from './Background';
import AboutMeBox from './AboutMeBox';

function App() {
  return (
    <BrowserRouter>
      <div className="view">
        <NavBar />
        <Background />
        
 
        <div className="mobile-aboutmebox-container">
          <AboutMeBox />
        </div>

        <div className="content-container">
          <Routes>
            <Route path="/" element={<AboutMe/>} />
            <Route path="/OmMeg" element={<AboutMe />} />
            <Route path="/CV" element={<Resume />} />
            <Route path="/Prosjekter" element={<Projects ProjectCardInfo={ProjectCardInfo} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

