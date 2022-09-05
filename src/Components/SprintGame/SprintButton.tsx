import React from 'react';
import { ISprintButton } from '../../Interfaces/gameInterfaces';
import { getClick } from '../../modules/sprintGameFunctions';

export default function SprintButton({ getButtonArgs, wordIndex, index }: ISprintButton) {
  return (
    <div className="sprint__buttons">
      <button
        className="sprint__false button"
        type="button"
        onClick={() => getClick(getButtonArgs(!(wordIndex === index)))}
      >
        False
      </button>
      <button
        className="sprint__true button"
        type="button"
        onClick={() => getClick(getButtonArgs(wordIndex === index))}
      >
        True
      </button>
    </div>
  );
}
