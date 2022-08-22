import { ChangeEvent, useCallback } from 'react';

const ScaleDict = {
  c: 'Celsius',
  f: 'Fahrenheit',
} as const;

type ScaleDict = typeof ScaleDict[keyof typeof ScaleDict];

type TemperatureInputProps = {
  scale: 'c' | 'f';
  temperature: string;
  onTemperatureChange: (temperature: string) => void;
};

export function TemperatureInput(props: TemperatureInputProps) {
  const handleChange = useCallback(
    ($event: ChangeEvent<HTMLInputElement>) => {
      props.onTemperatureChange($event.target.value);
    },
    [props.onTemperatureChange]
  );

  return (
    <fieldset>
      <legend>Enter temperature in {ScaleDict[props.scale]}:</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}
