import React from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <main>
        <Header/>
        <MainContent/>
        <Footer/>
      </main>
    );
  }
}

export default App;
