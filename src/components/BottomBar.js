import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "'Kaushan Script', cursive",
    fontSize: "28px",
  },
  btn: {
    backgroundColor: "black",
    marginRight: theme.spacing(2),
    color: "white",
  },
  bar: {
    position: "absolute",
    bottom: "0px",
    backgroundColor: "#116466",
    color: "white",
  },
}));

function BottomBar(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Visualize
          </Typography>
          <Button
            color="inherit"
            className={classes.btn}
            onClick={() => props.clickMerge()}
          >
            Merge Sort
          </Button>
          <Button color="inherit" className={classes.btn}>
            Quick Sort
          </Button>
          <Button color="inherit" className={classes.btn}>
            Bubble Sort
          </Button>
          <Button
            color="inherit"
            className={classes.btn}
            onClick={() => props.clickReset()}
          >
            Reset Array
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default BottomBar;
