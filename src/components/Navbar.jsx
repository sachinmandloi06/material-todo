import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";

const Navbar = ({ changeTheme }) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h5">
          Material Todo App
        </Typography>
        <Button
          startIcon={<ColorLensIcon />}
          variant="contained"
          color="secondary"
          size="small"
          onClick={changeTheme}
        >
          Change Theme
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
