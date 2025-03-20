import Skills from './components/Skillset'
import './App.css'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'

function App() {
  return ( <div className='main-page' >
    <Navbar/>

    <Aboutme/>
    <Skills />
  </div>
    
  )
};

export default App