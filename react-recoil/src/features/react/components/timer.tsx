import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Timer(): JSX.Element {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setSeconds((prevState) => prevState + 1);
  };

  return (
    <div>
      Seconds: {seconds}
      <Link to="/">Go to home</Link>
    </div>
  );
}
