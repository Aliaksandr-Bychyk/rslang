import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePath, URL } from '../enums/enums';
import { IWord } from '../Interfaces/gameInterfaces';
import Word from './Word';

function Tutorial() {
  const [words, setWords] = useState([] as IWord[]);
  const [group, setGroup] = useState(() => JSON.parse(window.localStorage.getItem('group')) as number || 0);
  const [page, setPage] = useState(() => JSON.parse(window.localStorage.getItem('page')) as number || 0);

  function fetchWords(groupFetch: number, pageFetch: number) {
    fetch(`${URL.start}/words?group=${groupFetch}&page=${pageFetch}`)
      .then((res) => res.json())
      .then((array) => {
        setWords(array as IWord[]);
      });
    setGroup(groupFetch);
    setPage(pageFetch);
  }

  useEffect(() => {
    fetchWords(group, page);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('group', String(group));
    window.localStorage.setItem('page', String(page));
  }, [group, page]);

  return (
    <div className="tutorial">
      <h1 className="tutorial__title">Учебник</h1>
      <p className="group__offer">Выберите желаемый раздел</p>
      <div className="group__wrapper">
        <button type="button" className="button btn__group group1" datatype="1" onClick={() => { fetchWords(0, 0); }}>Раздел 1</button>
        <button type="button" className="button btn__group group2" datatype="2" onClick={() => { fetchWords(1, 0); }}>Раздел 2</button>
        <button type="button" className="button btn__group group3" datatype="3" onClick={() => { fetchWords(2, 0); }}>Раздел 3</button>
        <button type="button" className="button btn__group group4" datatype="4" onClick={() => { fetchWords(3, 0); }}>Раздел 4</button>
        <button type="button" className="button btn__group group5" datatype="5" onClick={() => { fetchWords(4, 0); }}>Раздел 5</button>
        <button type="button" className="button btn__group group6" datatype="6" onClick={() => { fetchWords(5, 0); }}>Раздел 6</button>
      </div>
      <div className="page__wrapper">
        <button
          type="button"
          className="button btn-prev"
          onClick={() => {
            if (page !== 0) {
              fetchWords(group, page - 1);
            }
          }}
        >
          &lt;
        </button>
        <span className="counter__page">{page + 1}</span>
        <button
          type="button"
          className="button next-btn"
          onClick={() => {
            if (page !== 29) {
              fetchWords(group, page + 1);
            }
          }}
        >
          &gt;
        </button>
      </div>
      <div className="game__wrapper">
        <p className="game__offer">
          У вас есть возможность сыграть в игры
        </p>
        <NavLink className="button game__btn" to={RoutePath.games}>Мини-игры</NavLink>
      </div>

      <div className="wrapper__words">
        {words.map((word) => (
          <Word
            id={word.id}
            group={word.group}
            page={word.page}
            word={word.word}
            image={word.image}
            audio={word.audio}
            audioMeaning={word.audioMeaning}
            audioExample={word.audioExample}
            textMeaning={word.textMeaning}
            textExample={word.textExample}
            transcription={word.transcription}
            wordTranslate={word.wordTranslate}
            textMeaningTranslate={word.textMeaningTranslate}
            textExampleTranslate={word.textExampleTranslate}
            key={word.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Tutorial;
