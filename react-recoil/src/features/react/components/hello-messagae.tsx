export interface HelloMessageProps {
  name: string;
}

export function HelloMessage(props: HelloMessageProps) {
  return <div>Hello {props.name}</div>;
}
