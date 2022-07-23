import { createRef, FormEvent, useState } from "react"
import { Todo } from "../types/todo"

export function TodoApp(): JSX.Element {
    const [todos, setTodos] = useState<Todo[]>([])
    const ref = createRef<HTMLInputElement>()
    
    const handleSubmit = ($event: FormEvent) => {
        $event.preventDefault()
        const value = ref.current?.value
        if (!value) return
        const newItem = {
            text: value,
            id: Date.now()
        };
        setTodos([...todos, newItem])
        ref.current.value = ""
    }
    return (
    <div>
        <h3>TODO</h3>
        <TodoList items={todos} />
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">
                What needs to be done?
            </label>
            <input
                id="new-todo"
                ref={ref}
            />
            <button type="submit">
                Add #{todos.length + 1}
            </button>
        </form>
      </div>
    )
}

export interface TodoListProps {
    items: Todo[]
}

export function TodoList(props: TodoListProps): JSX.Element {
    return <ul>
        { props.items.map(todo => <li key={todo.id}>{todo.text}</li>) }
    </ul>
}