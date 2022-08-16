import { useEffect, useState } from 'react';

export function Clock() {
  const [timerId, setTimerId] = useState<NodeJS.Timer | null>(null);
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    setTimerId(
      setInterval(() => {
        setDate(new Date());
      }, 1000)
    );
    return () => {
      if (!timerId) {
        return;
      }
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
