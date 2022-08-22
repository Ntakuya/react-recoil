type BoilingVerdictProps = {
  celsius: number;
};

export function BoilingVerdict(props: BoilingVerdictProps) {
  if (props.celsius >= 100) {
    return <p>The water is boiled</p>;
  }
  return <p>This water is not boiled</p>;
}

export default BoilingVerdict;
