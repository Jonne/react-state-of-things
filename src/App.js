import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

import TextResourceProvider from './TextResourceProvider';
import ResourcedText from './ResourcedText';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lear2n React
        </a>

        <ClassComponent />
        <FunctionComponent />

        <TextResourceProvider>
          <div>
            <ResourcedText resourceKey="hello" />

            <ResourcedText resourceKey="hello2" />
          </div>
        </TextResourceProvider>

      </header>
    </div>
  );
}

export default App;
