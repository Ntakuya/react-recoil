import { useCallback, useState } from 'react';
import type { FC } from 'react';

export const BuggyCounter: FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = useCallback(() => {
    setCounter(counter + 1);
  }, [counter, setCounter]);

  if (counter === 5) {
    // Simulate a JS error
    throw new Error('I crashed!');
  }
  return <h1 onClick={() => handleClick()}>{counter}</h1>;
};

export { BuggyCounter as default };
