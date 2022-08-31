import React from 'react';
import { URL } from '../enums/enums';
import { ChallangeProps } from '../Interfaces/gameInterfaces';

function ChallengeGameWords({ data }: ChallangeProps) {
  return (
    <div className="container">
      <div className="challenge__container">
        <img src={`${URL.start}/${data[0].image}`} alt="" />
        <span className="challenge__eng-word">{data.pop().word}</span>
        <div className="translate">
          <span className="translate__item">{data[0].wordTranslate}</span>
          <span className="translate__item">{data[0].wordTranslate}</span>
          <span className="translate__item">{data[0].wordTranslate}</span>
          <span className="translate__item">{data[0].wordTranslate}</span>
          <span className="translate__item">{data[0].wordTranslate}</span>
        </div>
      </div>
    </div>
  );
}

export default ChallengeGameWords;
