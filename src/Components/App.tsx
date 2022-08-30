import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Tutorial from "./Tutorial";

function App(): JSX.Element {
  return (
    <>
      <Header />
      {/*<Main />*/}
      <Tutorial />
      <Footer />
    </>
  );
}

export default App;
