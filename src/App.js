import NavBar from './components/NavBar';
import CardIntro from './components/Intro';
import TechStack from './components/techntools';
import Hobbies from './components/Hobbies';
import ProjectsTab from './components/ProjectTabs'
import Contact from './components/Contact';
import './components/custom.css'

function App() {
  return (
    <>
      <body>
      <NavBar />
      <h1>Welcome!</h1>
      <div id='card-Intro'>
        <CardIntro />
      </div>
      <div id='card-Intro'>  
      <h1>Skills</h1>
      <TechStack/>
      </div>
      <h1>Projects</h1>
      <div id='card-Intro'>  
      <ProjectsTab />
      </div>
      <h1>Hobbies</h1>
      <div id='card-Intro'>  
      <Hobbies />
      </div>
      <h1>Contact</h1>
      <div id='card-Intro'>  
      <Contact />
      </div>

</body>
    </>
  );
}

export default App;
