import React, { Fragment } from 'react';
import './App.css';

import ActivePlayer from './components/ActivePlayer';
import Board from './components/Board';

function App() {
  return (
    <Fragment>
      <ActivePlayer />
      <Board />
    </Fragment>

  );
}

export default App;
