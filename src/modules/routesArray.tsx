import React from 'react';
import Main from '../Components/Main';
import Games from '../Components/Games';
import ChallengeGame from '../Components/ChallengeGame';
import { routePath } from '../enums/enums';
import SprintGame from '../Components/SprintGame';
import Tutorial from '../Components/Tutorial';
import Dictionary from '../Components/Dictionary';
import Stats from '../Components/Stats';

const routesArray = [
  {
    route: routePath.main,
    component: <Main />,
  },
  {
    route: routePath.tutorial,
    component: <Tutorial />,
  },
  {
    route: routePath.dictionary,
    component: <Dictionary />,
  },
  {
    route: routePath.stats,
    component: <Stats />,
  },
  {
    route: routePath.games,
    component: <Games />,
  },
  {
    route: routePath.sprintGame,
    component: <SprintGame />,
  },
  {
    route: routePath.challengeGame,
    component: <ChallengeGame />,
  },
];

export default routesArray;
