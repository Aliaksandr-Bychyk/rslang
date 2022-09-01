import React from 'react';
import {IWord} from "../Interfaces/gameInterfaces";
import {URL} from "../enums/enums";

const Word = (word: IWord) => {
    return (
        <div className="word__wrapper">
            <div className="word__content">
                <img src={`${URL.start}/${word.image}`} alt="word__image" className="word__img"/>
                <div className="word__description">
                    <div className="word__header">
                        <p className="word__title">
                            <span className="word__name">{word.word}</span>
                            <span className="word__transcription">{word.transcription}</span>
                            <span className="word__translate">{word.wordTranslate}</span>
                        </p>
                        <audio controls src={`${URL.start}/${word.audio}`}></audio>
                    </div>
                    <div className="word__meaning__wrapper">
                        <p className="word__meaning">{word.textMeaning}</p>
                        <p className="word__meaning__translate">{word.textMeaningTranslate}</p>
                    </div>
                    <div className="word__example__wrapper">
                        <p className="word__example">{word.textExample}</p>
                        <p className="word__example__translate">{word.textExampleTranslate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Word;
