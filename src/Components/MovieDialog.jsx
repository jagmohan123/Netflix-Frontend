import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setOpenMovieDialog } from "../slice/movieSlice";
import BackgroundVideo from "../mainContent/BackgroundVideo";

export default function MovieDialog() {
  const { openMovieDialog, movieID } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setOpenMovieDialog(false));
  };
  // console.log("inside dialog box", movieID);
  return (
    <React.Fragment>
      <Dialog
        open={openMovieDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <BackgroundVideo movieId={movieID} poPubVide={true} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
