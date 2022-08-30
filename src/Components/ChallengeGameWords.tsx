import React from 'react';
import { URL } from '../enums/enums';
import { ChallangeProps } from '../Interfaces/gameInterfaces';

function ChallengeGameWords({ data }: ChallangeProps) {
  const array = data;
  return (
    <div className="container">
      <div className="challenge__container">
        <img src={`${URL.start}/${array[0].image}`} alt="" />
        <span className="challenge__eng-word">{array.pop().word}</span>
        <div className="translate">
          <span className="translate__item">{array[0].wordTranslate}</span>
          <span className="translate__item">{array[0].wordTranslate}</span>
          <span className="translate__item">{array[0].wordTranslate}</span>
          <span className="translate__item">{array[0].wordTranslate}</span>
          <span className="translate__item">{array[0].wordTranslate}</span>
        </div>
      </div>
    </div>
  );
}

export default ChallengeGameWords;
