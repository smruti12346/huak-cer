"use client";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useEffect, useState, forwardRef } from "react";
import { Button } from "@mui/material";
const Transition = forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  );
});
const Certificate = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log(props);
    props.count > 0 ? setOpen(true) : setOpen(false);
  }, [props.count]);
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              style={{ fontSize: "18px" }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              style={{ fontSize: "18px" }}
            >
              HUAK
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              style={{ fontSize: "18px" }}
            >
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <iframe
          src={`${props.url}?page=hsn#toolbar=0`}
          height="100%"
          width="100%"
        ></iframe>
      </Dialog>
    </div>
  );
};

export default Certificate;
