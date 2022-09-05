enum URL {
  start = 'https://react-rslang-learnwords.herokuapp.com',
}

enum UrlPath {
  words = '/words',
  users = '/users',
  signin = '/signin',
}

enum RoutePath {
  main = '',
  games = 'games',
  sprintGame = 'sprint',
  challengeGame = 'challenge',
  tutorial = 'tutorial',
  dictionary = 'dictionary',
  stats = 'stats',
  level = 'level',
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

enum HTTPMethod {
  get = 'GET',
  post = 'POST',
}

export {
  URL, UrlPath, RoutePath, Numbers, Arrow, HTTPMethod,
};
