import React from 'react';
import Navbar from './Components/Navbar';
import Path from './Components/Path';
import QuestionScreen from './Components/QuestionScreen';
import Footer from './Components/Footer';
import DisplayFaq from './Components/DisplayFaq';


function App() {
  return (
    <div>
      <Navbar />
      <Path />
      <QuestionScreen />
      <Footer />
      <DisplayFaq />
    </div>
  );
}

export default App;
