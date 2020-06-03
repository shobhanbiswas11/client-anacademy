import React, { useState } from "react";
import {
  Modal,
  Avatar,
  makeStyles,
  Grid,
  Box,
  Typography,
  Container,
  IconButton,
  Backdrop,
  Fade,
} from "@material-ui/core";
import Image from "../../assets/img/sudsipto.png";
import CloseIcon from "@material-ui/icons/Close";

export interface AboutYourTeacherProps {
  open: boolean;
  setOpen: any;
}

const useStyle = makeStyles((theme) => {
  return {
    conatine: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
    },
    modalBg: {
      backgroundColor: "rgba(0, 0, 0, .8)",
      color: "white",
    },
    avtr: {
      width: "10rem",
      height: "10rem",
      backgroundColor: "white",
      margin: theme.spacing(0, "auto", 4),
    },
    bold: {
      fontWeight: "bold",
    },
    closeIcon: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
    },
  };
});

const AboutYourTeacher: React.SFC<AboutYourTeacherProps> = ({
  open,
  setOpen,
}) => {
  const { avtr, modalBg, bold, conatine, closeIcon } = useStyle();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      className={modalBg}
      closeAfterTransition
      onClose={handleClose}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div>
          <Container className={conatine} component="div">
            <IconButton
              className={closeIcon}
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Grid container alignItems="center">
              <Grid item xs={12}>
                <Avatar src={Image} className={avtr}></Avatar>
              </Grid>
              <Grid item xs={12}>
                <Box textAlign="center" marginBottom={3}>
                  <Typography variant="h2" classes={{ root: bold }}>
                    Sudipto Biswas
                  </Typography>
                  <Typography variant="caption">Qualifiactions</Typography>
                </Box>
                <Typography variant="body2" align="center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  corrupti aut distinctio qui nostrum magni culpa esse quis enim
                  aliquam voluptate rerum! Error deleniti, itaque aperiam vero
                  quasi cumque consequuntur tenetur, illum assumenda nobis
                  fugiat unde porro voluptas qui voluptate?
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Fade>
    </Modal>
  );
};

export default AboutYourTeacher;
