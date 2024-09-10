import { Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit ? dispatch(updateTodo({_id : edit.todo._id, title , description})) : dispatch(addTodo({title,description}))

    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        label="Enter Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={{ margin: "10px 0px" }}
        variant="outlined"
        label="Enter Description"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        type="submit"
        endIcon={<SaveIcon />}
        variant="contained"
        color="success"
        fullWidth
      >
        Save
      </Button>
    </form>
  );
};

export default Form;
