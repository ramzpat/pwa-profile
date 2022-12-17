import React, { useState } from 'react';
import logo from './logo.svg';
import LogConsole from './components/LogConsole';
import './App.css';
import profile from './assets/profile.json'

const App:React.FC = () => {
  const [logMessages, setMessages] = useState<string[]>([]);  
  const addMessage = (s:string) => {
    if (s) {
      setMessages([...logMessages, s]);
      // navigator.serviceWorker.controller?.postMessage({
      //   "Hello":"Hello"
      // })
    }
  }
  // navigator.serviceWorker.onmessage = (ev) => {
  //   addMessage("Test2")
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div id="p-name" onClick={() => {addMessage("A")}} >{profile.name}</div>      
        
        Log messages:
        <LogConsole logMessages={logMessages} setMessages={setMessages} />
      </header>
    </div>
  );
}

export default App;
