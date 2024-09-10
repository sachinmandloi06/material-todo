import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [color, setColor] = useState(false);

  const changeTheme = () => {
    setColor(color ? false : true);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: color ? "#7C00FE" : "#201E43",
      },
      secondary: {
        main: color ? "#EB3678" : "#4C3BCF",
      },
      success: {
        main: color ? "#399918" : "#088395",
      },
      error: {
        main: color ? "#F5004F" : "#EE4E4E",
      },
      warning: {
        main: color ? "#F9E400" : "#FFA62F",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar changeTheme={changeTheme} />
      <Container sx={{ padding: "80px 0px" }}>
        <Typography variant="h3" align="center" sx={{ margin: "5px 0px" }}>
          Todo App
        </Typography>
        <Form />
        <ListGroup />
      </Container>
    </ThemeProvider>
  );
};

export default App;
