import React from 'react';
import Header from './Header';
import BreakPicker from '../Containers/BreakPicker';
import SessionPicker from '../Containers/SessionPicker';
import Timer from '../Containers/Timer';

const App = () => {
  return (
    <div>
      <Header />
      <BreakPicker />
      <SessionPicker />
      <Timer />
    </div>
  );
};

export default App;
