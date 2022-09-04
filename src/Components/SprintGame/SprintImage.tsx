import React from 'react';
import { Numbers } from '../../enums/enums';
import { ISprintImage } from '../../Interfaces/gameInterfaces';
import { getKey } from '../../modules/getRandom';

export default function SprintImage({ scoreCount, imageArray }: ISprintImage) {
  return (
    <div className="sprint__answers">
      <div className={scoreCount === Numbers.maxScoreCount
        ? 'sprint__images _none'
        : 'sprint__images'}
      >
        {imageArray.map((image, ind) => (
          <img
            className="sprint__image"
            src={image
              ? '../images/circle-filled.svg'
              : '../images/circle-empty.svg'}
            alt=""
            key={getKey(ind)}
          />
        ))}
      </div>
      <span className="sprint__score-number">
        +
        {scoreCount}
      </span>
    </div>
  );
}
