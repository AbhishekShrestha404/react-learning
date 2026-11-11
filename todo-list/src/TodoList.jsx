
import { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';

const initialTodos = [
    { id: 1, text: "walk the dog", completed: false },
    { id: 2, text: "walk the cat", completed: true },
    { id: 3, text: "walk the fish", completed: false },
    { id: 4, text: "walk the pig", completed: false },
];

function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const handleToggle = (id) => {
        setTodos(currentTodos =>
            currentTodos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(previousTodos => {
            return previousTodos.filter(t => t.id !== id)
        })
    }

    return (
        <div>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper'
                }}
            >
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} />

                ))}
            </List>
        </div>
    );
}

export default TodoList;
