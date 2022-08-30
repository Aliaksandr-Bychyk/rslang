import React from 'react';
import Main from '../Components/Main';
import Games from '../Components/Games';
import ChallengeGame from '../Components/ChallengeGame';
import { RoutePath } from '../enums/enums';
import SprintGame from '../Components/SprintGame';
import Tutorial from '../Components/Tutorial';
import Dictionary from '../Components/Dictionary';
import Stats from '../Components/Stats';

const routesArray = [
  {
    route: RoutePath.main,
    component: <Main />,
  },
  {
    route: RoutePath.tutorial,
    component: <Tutorial />,
  },
  {
    route: RoutePath.dictionary,
    component: <Dictionary />,
  },
  {
    route: RoutePath.stats,
    component: <Stats />,
  },
  {
    route: RoutePath.games,
    component: <Games />,
  },
  {
    route: RoutePath.sprintGame,
    component: <SprintGame />,
  },
  {
    route: RoutePath.challengeGame,
    component: <ChallengeGame />,
  },
];

export default routesArray;
