import React, { ReactNode } from 'react';
import { URL } from '../../enums/enums';
import { ChallangeProps } from '../../Interfaces/gameInterfaces';
import { answerClickEvent, getImageComponent, getTrueValue } from '../../modules/challengeGameFunctions';
import { getKey } from '../../modules/getRandom';

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
        { randomNumbers.map((number, ind) => (
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
            key={getKey(ind)}
          >
            { data[number].wordTranslate }
          </button>
        ))}
      </div>
    </div>
  );
}
