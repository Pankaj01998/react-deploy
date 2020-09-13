import React from 'react';
import './App.css';
import Helo from './component/hello'
import CounterExample from './component/counterExample'
import ParticlesRender from './component/Particles';
import Name from './component/Name';


function App() {
  return (
    <div>
        <Name />
       <ParticlesRender/>
    </div>

  );
}

export default App;
