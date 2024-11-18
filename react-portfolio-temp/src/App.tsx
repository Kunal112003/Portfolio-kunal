import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import { Analytics } from "@vercel/analytics/react"

function App() {
    const [mode, setMode] = useState<string>('dark');

    

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container`}>
        
        <Navigation parentToChild = {mode} modeChange = {() => setMode(mode === 'dark' ? 'light' : 'dark')}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Timeline/>
            <Project/>
            <Expertise/>
            <Contact/>
        </FadeIn>
        <Footer />
        <Analytics/>
    </div>
    );
}

export default App;