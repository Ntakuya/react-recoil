const numbers = [1, 2, 3, 4, 5];

export const listItems = numbers.map((number) => (
  <li key={number.toString()}>{number}</li>
));

export const List = () => {
  return <ul>{listItems}</ul>;
};
