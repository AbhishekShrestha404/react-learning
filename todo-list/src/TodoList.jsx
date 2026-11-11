
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    return !data ? [] : data;
}

function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

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
            return previousTodos.filter(t => t.id !== id);
        })
    }

    const createTodo = (text) => {
        setTodos(previousTodos => {
            return [...previousTodos, { text: text, id: crypto.randomUUID(), completed: false }]
        });
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
                    <TodoItem todo={todo}
                        key={todo.id}
                        handleToggle={handleToggle}
                        removeTodo={() => removeTodo(todo.id)}
                    />

                ))}
                <TodoForm createTodo={createTodo} />
            </List>
        </div>
    );
}

export default TodoList;
