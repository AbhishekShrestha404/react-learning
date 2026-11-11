import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Delete from '@mui/icons-material/Delete';

function TodoItem({ todo, handleToggle, removeTodo }) {
    const labelId = `checkbox-list-label-${todo.id}`;
    const isChecked = todo.completed;
    const SelectionIcon = isChecked
        ? CheckBoxIcon
        : CheckBoxOutlineBlankIcon;

    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label='delete'
                    onClick={removeTodo}
                    color='error'
                >
                    <Delete />
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
}

export default TodoItem;