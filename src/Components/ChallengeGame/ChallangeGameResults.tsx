import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePath } from '../../enums/enums';
import { IResult } from '../../Interfaces/gameInterfaces';
import { getSound } from '../../modules/challengeGameFunctions';
import { getKey } from '../../modules/getRandom';

export default function ChallangeGameResults({ results }: { results: IResult[] }) {
  return (
    <div className="container challenge-results">
      <div className="results">
        <table className="results__table">
          <caption className="results__title">Results</caption>
          <thead>
            <tr>
              <th>Audio</th>
              <th>Englich word</th>
              <th>Translate</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            { results.map((item, ind) => (
              <tr key={getKey(ind)}>
                <td>
                  <button className="results__audio button" type="button" onClick={() => getSound(item.audio)}>
                    <img className="results__image" src="../images/sound.svg" alt="audio" />
                  </button>
                </td>
                <td><p>{item.word}</p></td>
                <td><p>{item.translate}</p></td>
                <td><span>{String(item.answer)}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" className="results__button button">
        <NavLink className="results__link" to={RoutePath.games}>Go Back</NavLink>
      </button>
    </div>
  );
}
