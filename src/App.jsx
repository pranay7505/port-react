import Skills from './components/Skillset'
import './App.css'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'

function App() {
  return ( <>
    <HashRouter>
      <Navbar/>

    <Aboutme/>
    <Skills />
    </HashRouter>
  </>
  )
};

export default App
