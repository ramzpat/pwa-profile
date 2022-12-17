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
      <div className="App-header">

        <div id="p-name" className='container' >
          <input type="button" value="Click me!" onClick={() => {addMessage("B")}} />
          <input type="button" value="Send msg!" onClick={() => {
            navigator.serviceWorker.controller?.postMessage({
              "Hello":"Hello"
            })
          }} />
          <span id="name_show">{profile.name}</span>
        </div>      
        <div id="console">
          Log messages:
          <LogConsole logMessages={logMessages} setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
}

export default App;
