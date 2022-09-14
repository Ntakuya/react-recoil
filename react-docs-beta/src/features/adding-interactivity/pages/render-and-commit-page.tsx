import { useEffect, useState } from "react";
import { Clock } from "../components/clock";
import Gallary from "../components/gallary";

export function RenderAndCommitPage() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const timer = new Date();
      setTime(
        `${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Gallary />
      <Clock time={time} />
    </div>
  );
}

export { RenderAndCommitPage as default };
