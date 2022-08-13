import { Element, getGreeting } from "../components"
import { User } from "../types";

const user: User = {
  firstName: 'Harper',
  lastName: 'Perez'
};

export function IntroducingPage() {
    return (
        <>
            <div>{Element}</div>
            <div>{getGreeting(user)}</div>
        </>
    )
}