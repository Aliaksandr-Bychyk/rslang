import React, { useEffect, useState } from 'react';
import { URL, urlPath } from '../enums/enums';

export default function SprintGame() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${URL.start}${urlPath.words}`)
    .then(res => res.json())
    .then((result) => {
      setIsLoaded(true);
      setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const audio = new Audio(`${URL.start}/${items[1].audio}`);
    audio.play();
    return (
      <div>
  
      </div>
    );
  }
}