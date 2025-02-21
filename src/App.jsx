import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Main from './components/Pages/Main/Main'
import Joinus from './components/Pages/Joinus/Joinus'
import Projects from "./components/Pages/Projects/Projects.jsx";
import Verification from "./components/Pages/Verification/Verification";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/join-us' element={<Joinus />}/>
        <Route path='/verification' element={<Verification />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App