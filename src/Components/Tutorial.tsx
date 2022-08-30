import React, {useEffect} from 'react';
import axios from "axios";
import { IWords } from "../Interfaces/wordsInterface"

const Tutorial = () => {
    async function fetchWords() {
        // const response =  await fetch(`https://react-rslang-learnwords.herokuapp.com/words?group=${2}&page=${3}`, );
        // const data = await response.json() as IWords[];
        // console.log(data)
        const data = await axios.get<IWords[]>(`https://react-rslang-learnwords.herokuapp.com/words?group=${2}&page=${3}`);
        console.log(data.data)
    }
    useEffect(() => {
        fetchWords()
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
        </div>
    );
};

export default Tutorial;
