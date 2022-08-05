export interface HelloMessageProps {
    name: string
}

export function HelloMessage(props: HelloMessageProps): JSX.Element {
    return (
        <div>Hello { props.name }</div>
    )
}