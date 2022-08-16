import { formatName } from "../../utils-functions";
import { User } from "../../types";

const user: User = {
  firstName: "Harper",
  lastName: "Perez",
};

export const Element = <h1>Hello, {formatName(user)}!</h1>;
