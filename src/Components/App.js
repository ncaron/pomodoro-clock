import React from 'react';
import Header from './Header';
import BreakPicker from '../Containers/BreakPicker';
import SessionPicker from '../Containers/SessionPicker';

const App = () => {
  return (
    <div>
      <Header />
      <BreakPicker />
      <SessionPicker />
    </div>
  );
};

export default App;
