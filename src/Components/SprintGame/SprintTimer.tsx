import React, { useEffect, useState } from 'react';
import { ISprintTimer } from '../../Interfaces/gameInterfaces';
import { checkResult } from '../../modules/sprintGameFunctions';

export default function SprintTimer({ ...args }: ISprintTimer) {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const timeInterval = setInterval(
      () => setTimer((prev) => (prev >= 1 ? prev - 1 : 0)),
      1000,
    );
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    checkResult(
      timer === 0,
      args.score,
      args.setResultScore,
      args.setIsEndGame,
    );
  }, [timer]);

  return (
    <div className="timer">
      {timer}
    </div>
  );
}
