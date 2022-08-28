import React from 'react';

function Main() {
  return (
    <main className="main">
      <section className="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__content">
              <h1 className="title__about">RSLang</h1>
              <p className="about__description">
                Приложение для изучения иностранных слов, включающее
                электронный учебник с базой слов для изучения, мини-игры для их повторения, страницу
                статистики для отслеживания индивидуального прогресса.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="advantage">
        <div className="container">
          <div className="advantage__wrapper">
            <div className="advantage__item">
              <div className="advantage__title">
                <span className="advantage__number">01</span>
                <span className="advantage__name">Электронный учебник</span>
              </div>
              <p className="advantage__description">
                Электронный учебник позволит вам узнавать новые словы и
                повторять уже знакомые. Также вы можете добавлять сложные слова, которые вам тяжело
                запомнить.
              </p>
            </div>
            <div className="advantage__item">
              <div className="advantage__title">
                <span className="advantage__number">02</span>
                <span className="advantage__name">
                  Мини-игры &quot;Аудиовызов&quot;,
                  и &quot;Спринт&quot;,
                </span>
              </div>
              <p className="advantage__description">
                Чтобы интереснее было изучать иностранные слова, в
                приложении есть две мини-игры, которые позволят вам быстрее выучить язык.
              </p>
            </div>
          </div>
          <img src="images/advantage.png" alt="advantage" className="advantage__img" />
        </div>
      </section>
      <section className="team">
        <div className="team__cards">
          <div className="team__card">
            <img src="images/aleks.png" alt="aleks" className="card__img" />
          </div>
          <div className="team__card">
            <img src="images/igor.jpg" alt="igor" className="card__img" />
          </div>
          <div className="team__card">
            <img src="images/denis.jpeg" alt="denis" className="card__img" />
          </div>
        </div>
        <p className="team__description">
          Команда целеустремлённых студентов, которые хотят стать
          frontend-разработчиками. Приложение сделано с помщью библиотеки React.
          Каждые участник внёс
          значительный вклад в создание приложения.
        </p>
      </section>
    </main>
  );
}

export default Main;
