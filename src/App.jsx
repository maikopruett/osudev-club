import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Main from './components/Pages/Main/Main'
import Joinus from './components/Pages/Joinus/Joinus'
import Members from "./components/Pages/Members/Members";
import Projects from "./components/Pages/Projects/Projects.jsx";
import Verification from "./components/Pages/Verification/Verification";

function App() {
  useEffect(() => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  return (
    <>
      <div className="text-container">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/join-us' element={<Joinus />}/>
            <Route path='/members' element={<Members />}/>
            <Route path='/verification' element={<Verification />}/>
          </Routes>
        </BrowserRouter>
      </div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix 
                in="blur" 
                mode="matrix" 
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" 
                result="goo" 
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </>
  )
}

export default App