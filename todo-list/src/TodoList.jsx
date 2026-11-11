
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CommentIcon from '@mui/icons-material/Comment';

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

    return (
        <div>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper'
                }}
            >
                {todos.map((todo) => {
                    const labelId = `checkbox-list-label-${todo.id}`;
                    const isChecked = todo.completed;
                    const SelectionIcon = isChecked
                        ? CheckBoxIcon
                        : CheckBoxOutlineBlankIcon;

                    return (
                        <ListItem
                            key={todo.id}
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label={`see comments for ${todo.text}`}
                                >
                                    <CommentIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton
                                role="checkbox"
                                aria-checked={isChecked}
                                aria-labelledby={labelId}
                                onClick={() => handleToggle(todo.id)}
                                dense
                            >
                                <ListItemIcon>
                                    <SelectionIcon
                                        sx={{
                                            color: isChecked
                                                ? 'primary.main'
                                                : 'text.secondary',
                                            padding: '9px',
                                            marginLeft: '-12px',
                                            boxSizing: 'content-box',
                                        }}
                                    />
                                </ListItemIcon>

                                <ListItemText
                                    id={labelId}
                                    primary={todo.text}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}

export default TodoList;
