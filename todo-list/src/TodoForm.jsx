import TextField from '@mui/material/TextField';
import Create from '@mui/icons-material/Create';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';

function TodoForm({ createTodo }) {
    const [text, setText] = useState("");

    const handleFormChange = (evt) => {
        setText(evt.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(text);
        setText("");
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Add a todo"
                    variant="outlined"
                    onChange={handleFormChange}
                    value={text}

                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        type="submit"
                                        edge="end"
                                        color="primary"
                                        aria-label="Add todo"
                                    >
                                        <Create />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }}

                />
            </form>
        </ListItem >
    );
}

export default TodoForm;
