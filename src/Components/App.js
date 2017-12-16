import React from 'react';
import Header from './Header';
import BreakPicker from '../Containers/BreakPicker';
import SessionPicker from '../Containers/SessionPicker';
import Timer from '../Containers/Timer';
import Instructions from './Instructions';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <div className="pickers">
        <BreakPicker />
        <SessionPicker />
      </div>
      <Timer />
      <Instructions />
      <Footer />
    </div>
  );
};

export default App;
