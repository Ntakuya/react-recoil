import { User } from "../../types";
import { formatName } from "../../utils-functions";

export function getGreeting(user?: User) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}