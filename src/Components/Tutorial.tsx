import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IWord} from "../Interfaces/gameInterfaces";
import Word from "./Word";

const Tutorial = () => {
    const [words, setWords] = useState<IWord[]>([])

    async function fetchWords() {
        const response = await axios.get<IWord[]>(`https://react-rslang-learnwords.herokuapp.com/words?group=${2}&page=${3}`);
        setWords(response.data)
    }

    useEffect(() => {
        fetchWords()
        console.log(words);
    }, []);
    return (
        <div className='tutorial'>
            <h1 className="tutorial__title">Учебник</h1>
            <p className="group__offer">Выберите желаемый раздел</p>
            <div className="group__wrapper">
                <button className="button btn__group group1" datatype="1">Раздел 1</button>
                <button className="button btn__group group2" datatype="2">Раздел 2</button>
                <button className="button btn__group group3" datatype="3">Раздел 3</button>
                <button className="button btn__group group4" datatype="4">Раздел 4</button>
                <button className="button btn__group group5" datatype="5">Раздел 5</button>
                <button className="button btn__group group6" datatype="6">Раздел 6</button>
            </div>
            <div className="game__wrapper">
                <p className="game__offer">
                    У вас есть возможность сыграть в игры
                </p>
                <button className="button game__btn">Мини-игры</button>
            </div>

            <div className="wrapper__words">
                {words.map(word => <Word id={word.id} group={word.group} page={word.page} word={word.word}
                                         image={word.image} audio={word.audio} audioMeaning={word.audioMeaning}
                                         audioExample={word.audioExample} textMeaning={word.textMeaning}
                                         textExample={word.textExample} transcription={word.transcription}
                                         wordTranslate={word.wordTranslate}
                                         textMeaningTranslate={word.textMeaningTranslate}
                                         textExampleTranslate={word.textExampleTranslate}
                key={word.id}/>)}
            </div>
        </div>
    )
}
export default Tutorial;
