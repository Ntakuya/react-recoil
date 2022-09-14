export type ClockProps = {
  time: string;
};

export function Clock(props: ClockProps) {
  return (
    <>
      <h1>{props.time}</h1>
      <input type="text" />
    </>
  );
}
