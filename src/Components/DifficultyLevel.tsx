import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { setGroup } from '../modules/getLocal';
import { getKey } from '../modules/getRandom';

const groups = [
  {
    value: 1,
    color: 'rgb(4, 255, 0)',
  },
  {
    value: 2,
    color: 'rgb(183, 228, 0)',
  },
  {
    value: 3,
    color: 'rgb(228, 213, 0)',
  },
  {
    value: 4,
    color: 'rgb(228, 129, 0)',
  },
  {
    value: 5,
    color: 'rgb(228, 53, 0)',
  },
  {
    value: 6,
    color: 'rgb(249, 0, 0)',
  },
];

export default function DifficultyLevel() {
  const location = useLocation();
  const { path } = location.state as { path: string };

  return (
    <div className="container">
      <div className="level">
        { groups.map((item, index) => (
          <Link
            className="level__link"
            to={path}
            onClick={() => setGroup(index)}
            key={getKey(index)}
            style={{ backgroundColor: `${item.color}` }}
          >
            {item.value}
          </Link>
        ))}
      </div>
    </div>
  );
}
