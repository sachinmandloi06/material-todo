import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTodo, edit, getTodos } from "../features/todo/todoSlice";
const ListItemDetail = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    dispatch(getTodos());
  };
  const handleEdit = (todo) => {
    dispatch((edit(todo)))
  };

  return (
    <>
      <ListItem>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">Title : {todo.title} </Typography>
          <Typography variant="body2">
            Description : {todo.description}
          </Typography>
        </Box>
        <Box>
          <Button
            endIcon={<EditIcon />}
            size="small"
            variant="contained"
            color="warning"
            onClick={() => handleEdit(todo)}
          >
            Edit
          </Button>
          <Button
            sx={{ margin: "0px 5px" }}
            size="small"
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(todo._id)}
          >
            Delete
          </Button>
        </Box>
      </ListItem>

      <Divider />
    </>
  );
};

export default ListItemDetail;
