import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePath } from '../../enums/enums';

export default function SprintResults({ score }: { score: number }) {
  return (
    <div className="container">
      <div className="sprint">
        <div className="sprint-result">
          <div className="sprint-result__score">
            Your score:
            <span className="score">{ score }</span>
          </div>
          <button type="button" className="results__button button sprint-result__button">
            <NavLink className="results__link" to={RoutePath.games}>Go Back</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
