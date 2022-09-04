enum URL {
  start = 'https://react-rslang-learnwords.herokuapp.com',
}

enum UrlPath {
  words = '/words',
  users = '/users',
  singin = '/singin',
}

enum RoutePath {
  main = '/',
  games = '/games',
  sprintGame = '/sprint',
  challengeGame = '/challenge',
  tutorial = '/tutorial',
  dictionary = '/dictionary',
  stats = '/stats',
}

enum Numbers {
  zero = 0,
  lengthRandomArray = 4,
  groups,
  arraySize = 10,
  maxRandomNumber = 19,
  sprintTime,
  pages = 29,
  maxScoreCount = 80,
}

enum Arrow {
  rigth = 'ArrowRight',
  left = 'ArrowLeft',
}

export {
  URL, UrlPath, RoutePath, Numbers, Arrow,
};
