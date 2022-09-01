import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import routesArray from '../modules/routesArray';
import Tutorial from "./Tutorial";


function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        { routesArray.map((item) => (
          <Route
            path={item.route}
            element={item.component}
          />
        )) }
      </Routes>
      {/*<Main />*/}
      <Footer />
    </>
  );
}

export default App;
