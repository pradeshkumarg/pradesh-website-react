import './App.css';
import NavigationBar from './components/NavigationBar';
import Awards from './components/sections/Awards';
import EducationSection from './components/sections/Education';
import Experience from './components/sections/Experience';
import Interests from './components/sections/Interests';
import IntroSection from './components/sections/Introduction';
import Skills from './components/sections/Skills';

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <div className="container-fluid p-0">
        <IntroSection />
        <EducationSection />
        <Experience />
        <Skills />
        <Interests />
        <Awards />
      </div>
    </div>

  );
}

export default App;
