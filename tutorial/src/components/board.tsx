import { FC, useCallback, useMemo, useState } from "react"
import Square from "./square"

function calculateWinner(squares: Array<number>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const Board: FC = () => {
    const [ squares, setSquares ] = useState(Array(9).fill(null))
    const [ xIsNext, setXIsNext] = useState<boolean>(false)

    const selectValue = useCallback((value: number) => {
        if (calculateWinner(squares)) {
            return
        }
        const newSquares = squares.slice();
        newSquares[value] = xIsNext ? 'X' : 'O';
        setSquares(newSquares)
        setXIsNext(!xIsNext)
    }, [xIsNext, setXIsNext, squares, setSquares])

    const renderSquare = (value: number) => {
        return <Square displayValue={squares[value] ?? value} value={value} selectValue={selectValue} />
    }

    const playerMessage = useMemo(() => {
        const winner = calculateWinner(squares);
        if (winner) {
        return 'Winner: ' + winner;
        } else {
        return 'Next player: ' + (xIsNext ? 'X' : 'O');
        }
    }, [xIsNext, squares])

    return (
        <div>
            <div>{ playerMessage }</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export { Board as default }