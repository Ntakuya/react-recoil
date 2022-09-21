import ArtistForm from "../components/artist-form";
import Person from "../components/person";
import { SquarePointerView } from "../components/square-pointer-view";

export function UpdatingObjectsInStatePage() {
  return (
    <div>
      <SquarePointerView />
      <Person />
      <ArtistForm />
    </div>
  );
}
