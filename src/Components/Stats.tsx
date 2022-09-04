import React from 'react';

export default function Stats() {
  return (
    <div className="stats">
      <div className="container">
        <div className="stats__wrapper">
          <h1 className="stats__title">Статистика</h1>
          <div className="stats__day">
            <h3 className="day__title">Статистика за день</h3>
            <div className="stats__card stats__card-day">
              <div className="stats__card__wrapper">
                <p className="stats__game">Количество сыгранных игр:</p>
                <p className="stats__learning">Количество изученных слов:</p>
                <p className="stats__percent">Процент правильных ответов:</p>
                <p className="stats__series">Самая длинная серия правильных ответов:</p>
              </div>
            </div>
          </div>
          <h3 className="game__title">Статистика по мини-играм</h3>
          <div className="game-stats__wrapper">
            <div className="stats__card">
              <h5 className="game__name">Аудиовызов</h5>
              <div className="stats__card__wrapper">
                <p className="stats__game">Количество сыгранных игр:</p>
                <p className="stats__learning">Количество изученных слов:</p>
                <p className="stats__percent">Процент правильных ответов:</p>
                <p className="stats__series">Самая длинная серия правильных ответов:</p>
              </div>
            </div>
            <div className="stats__card">
              <h5 className="game__name">Спринт</h5>
              <div className="stats__card__wrapper">
                <p className="stats__game">Количество сыгранных игр:</p>
                <p className="stats__learning">Количество изученных слов:</p>
                <p className="stats__percent">Процент правильных ответов:</p>
                <p className="stats__series">Самая длинная серия правильных ответов:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
