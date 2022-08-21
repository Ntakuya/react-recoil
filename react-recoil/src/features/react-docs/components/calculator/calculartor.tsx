import { useCallback, useState, useMemo } from 'react';
import { toCelsius, toFahrenheit, tryConvert } from '../../utils-functions';
import BoilingVerdict from '../boling-verdict/boiling-verdict';
import { TemperatureInput } from '../tempature-input/tempature-input';

export function Calculator() {
  const [state, setState] = useState({ scale: '', temperature: '' });

  const handleCelsiusChange = useCallback(
    (tempature: string) => {
      setState({ scale: 'c', temperature: tempature });
    },
    [setState]
  );

  const handleFahrenheitChange = useCallback(
    (templature: string) => {
      setState({ scale: 'f', temperature: templature });
    },
    [setState]
  );

  const celsius = useMemo(() => {
    if (state.scale === 'f') {
      return tryConvert(state.temperature, toCelsius);
    }
    return state.temperature;
  }, [state]);

  const fahrenherit = useMemo(() => {
    if (state.scale === 'c') {
      return tryConvert(state.temperature, toFahrenheit);
    }
    return state.temperature;
  }, [state]);

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenherit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;
