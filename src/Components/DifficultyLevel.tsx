import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { setGroup } from '../modules/getLocal';
import { getKey } from '../modules/getRandom';
import groups from '../modules/groups';

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
