import {
  LinearProgress,
  List,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ListItemDetail from "./ListItemDetail";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../features/todo/todoSlice";

const ListGroup = () => {
  const { allTodos, isLoading, isError } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }
  if (isError) {
    return (
      <Typography
        sx={{ margin: "50px" }}
        variant="h6"
        color={"error"}
        align="center"
      >
        Something Went Wrong...
      </Typography>
    );
  }

  if (allTodos.length === 0) {
    return (
      <Typography sx={{ margin: "50px" }} variant="h6" align="center">
        No Todos Yet..
      </Typography>
    );
  }

  return (
    <List>
      {allTodos.map((todo) => (
        <ListItemDetail key={todo._id} todo={todo} />
      ))}
    </List>
  );
};

export default ListGroup;