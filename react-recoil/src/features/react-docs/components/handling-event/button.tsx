import { useCallback, useEffect } from 'react';

export function Button() {
  const activateLasers = useCallback(() => {
    console.log('called activateLasers');
  }, []);
  return <button onClick={activateLasers}>Activate Lasers</button>;
}
