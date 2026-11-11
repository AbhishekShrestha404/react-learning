
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';

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
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            m: 3,

        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todo
            </Typography>
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
        </Box >
    );
}

export default TodoList;
