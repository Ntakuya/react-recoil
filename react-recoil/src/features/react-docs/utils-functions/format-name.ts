import { User } from "../types";

export function formatName(user: User) {
  return user.firstName + ' ' + user.lastName;
}