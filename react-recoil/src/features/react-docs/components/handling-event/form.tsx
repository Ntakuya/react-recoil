import { SyntheticEvent } from 'react';

export function Form() {
  function handleSubmit($event: SyntheticEvent) {
    $event.stopPropagation();
    $event.preventDefault();
    console.log('You clicked submit.');
  }

  return <form onSubmit={handleSubmit}></form>;
}
