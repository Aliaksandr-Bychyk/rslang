import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Games from './Games';
import ChallengeGame from './ChallengeGame';
import { routePath } from '../enums/enums';
import SprintGame from './SprintGame';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path={routePath.main} element={<Main />} />
        <Route path={routePath.games} element={<Games />} />
        <Route path={routePath.sprintGame} element={<SprintGame />}/>
        <Route path={routePath.challengeGame} element={<ChallengeGame />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
