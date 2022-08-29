import React, { useEffect, useState } from 'react';
import { URL } from '../enums/enums';
import { IWord } from '../Interfaces/gameInterfaces';

interface challangeProps {
  word: IWord
}

const ChallengeGameWords = ({word}:challangeProps) => {
  return (
    <div className="container">
      <div className="challenge__container">
        <img src={`${URL.start}/${word.image}`} alt="" />
        <span className="challenge__eng-word">{word.word}</span>
        <div className="translate">
          <span className="translate__item">{word.wordTranslate}</span>
          <span className="translate__item">{word.wordTranslate}</span>
          <span className="translate__item">{word.wordTranslate}</span>
          <span className="translate__item">{word.wordTranslate}</span>
          <span className="translate__item">{word.wordTranslate}</span>
        </div>
      </div>
    </div>
  );
}

export default ChallengeGameWords;