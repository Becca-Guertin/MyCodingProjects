import React from "react";
import "../../assets/css/modal.css";
import { Modal } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const Modal1 = ({ setIsModalOpen, open }) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <Grid container direction="row" justifyContent="center" spacing={4}>
        <Grid item xs={4}>
          <Modal open={open} onClose={handleClose}>
            <embed
              src={
                "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/GuertinRebeccaResumeNov2021.pdf"
              }
              width="800px"
              height="1100px"
            />
          </Modal>
          </Grid>
      </Grid>
    </React.Fragment>
  );
};

Modal1.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Modal1;