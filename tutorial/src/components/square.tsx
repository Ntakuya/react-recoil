import { FC } from "react";

export type SquareProps = {
    value: number
    selectValue: (value: number) => void,
    displayValue: number | string
}

export const Square: FC<SquareProps> = ({
    value,
    selectValue,
    displayValue
}) => {
    return (
        <button className="square" onClick={() => selectValue(value)}>{ displayValue }</button>
    )
}

export { Square as default }