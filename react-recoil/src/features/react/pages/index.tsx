import type { FC } from "react";
import { HelloMessage } from "../components/hello-messagae";
import { Timer } from "../components/timer";
import { TodoApp } from "../components/todo-app";

export const IndexPage: FC = () => {
  return (
    <div>
      <HelloMessage name="World" />
      <Timer />
      <TodoApp />
    </div>
  );
};
