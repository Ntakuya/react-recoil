import Counter from "../components/counter";
import Form from "../components/form";
import SecondCounter from "../components/second-counter";
import { ThirdCounter } from "../components/third-counter";
import TrafficLight from "../components/traffic-light";

export function StateAsASnapshotPage() {
  return (
    <div>
      <Counter />
      <SecondCounter />
      <ThirdCounter />
      <Form />
      <TrafficLight />
    </div>
  );
}

export { StateAsASnapshotPage as default };
