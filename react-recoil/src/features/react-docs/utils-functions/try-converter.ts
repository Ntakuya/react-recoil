import { toCelsius } from './to-celsius';
import { toFahrenheit } from './to-fahrenheit';

export function tryConvert(
  temperature: string,
  convert: typeof toCelsius | typeof toFahrenheit
): string {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
