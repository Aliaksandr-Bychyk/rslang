import React, { ReactNode } from 'react';
import { URL } from '../../enums/enums';
import { ChallangeProps, IWord } from '../../Interfaces/gameInterfaces';
import { answerClickEvent, getSound, getTrueValue } from '../../modules/challengeGameFunctions';

const getImageComponent = (buttonState: boolean, value: IWord, src: string) => {
  if (!buttonState) {
    return (
      <div className="challenge__answer">
        <button className="sound-word" type="button" onClick={() => getSound(src)}>
          <img src="../images/volumeImage.webp" alt="" className="challenge__image" />
        </button>
        <span className="challenge__eng-word _disabled">{value.word}</span>
      </div>
    );
  }
  return (
    <div className="challenge__answer">
      <img src={`${URL.start}/${value.image}`} alt="" className="challenge__image" />
      <span className="challenge__eng-word">{value.word}</span>
    </div>
  );
};

export default function ChallengeGameWords(
  {
    data, words, setButtonState, buttonState, randomNumbers, setResults,
  }: ChallangeProps,
) {
  const { index, value } = getTrueValue(data, words);
  const audioStc = `${URL.start}/${value.audio}`;

  return (
    <div className="challenge__container">
      <div className="challenge__answer">
        { getImageComponent(buttonState, value, audioStc) as ReactNode }
      </div>
      <audio src={audioStc} autoPlay />
      <div className="translate">
        { randomNumbers.map((number) => (
          <button
            className={buttonState
              ? `translate__item button ${number === index ? 'true' : 'false'}`
              : 'translate__item button'}
            type="button"
            onClick={() => answerClickEvent(
              setButtonState,
              setResults,
              data[index],
              number === index,
            )}
            disabled={buttonState}
          >
            { data[number].wordTranslate }
          </button>
        ))}
      </div>
    </div>
  );
}
