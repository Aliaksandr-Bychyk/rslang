interface IGame {
  name: string,
  image: string,
  path: string,
}

interface IWord {
  id: string,
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  wordTranslate: string,
  textMeaningTranslate: string,
  textExampleTranslate: string,
}

interface ChallangeProps {
  data: IWord[],
}

export { IGame, IWord, ChallangeProps };
