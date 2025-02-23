import React, { useState } from "react";
import "../../assets/css/modal.css";
//import resume from "../../assets/images/GuertinRebeccaResume2024.png";
import { Modal, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";
import pdfUrl from "../../assets/images/RebeccaGuertinResume - 2025.pdf";
//import { Document, Page } from "react-pdf";
import "../../App.css";

const Modal8 = ({ open, onClose }) => {
  // const [open, setOpen] = useState("false");
  const [pageNumber, setPageNumber] = useState(1);

  //const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen("false");

  // Called when the document is loaded
  const onLoadSuccess = ({ numPages }) => {
    console.log("Loaded PDF with", numPages, "pages");
  };

  function onLoadError(error) {
    console.error("Error loading PDF: ", error);
  }

  // const pdfUrl =
  //   "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/RebeccaGuertinResume+-+2025.pdf";

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignContent="center"
        spacing={4}
      >
        <Grid item>
          <Modal
            open={open}
            onClose={onClose}
            height="1100px"
            aria-labelledby="pdf-modal-title"
            aria-describedby="pdf-modal-description"
          >
            {/* <embed
              src="https://sunpopbucket.s3.us-west-1.amazonaws.com/images/RebeccaGuertinResume+-+2025.pdf"
              style={{ height: "1000px", width: "850px" }}
            /> */}

            {/* <div
              style={{
                width: "80%",
                margin: "auto",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <Document
                file="https://sunpopbucket.s3.us-west-1.amazonaws.com/images/RebeccaGuertinResume+-+2025.pdf"
                onLoadSuccess={onLoadSuccess}
                loading="Loading PDF..."
              >
                <Page pageNumber={pageNumber} />
              </Document>

              <div> */}
            {/* Controls for pagination */}
            {/* <Button
                  disabled={pageNumber === 1}
                  onClick={() => setPageNumber(pageNumber - 1)}
                >
                  Previous
                </Button>
                <span>
                  Page {pageNumber} of {numPages}
                </span>
                <Button
                  disabled={pageNumber === numPages}
                  onClick={() => setPageNumber(pageNumber + 1)}
                >
                  Next
                </Button>
              </div>
            </div> */}

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 600,
                backgroundColor: "white",
                padding: 2,
              }}
            >
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer"></a>
            </Box>
          </Modal>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Modal8.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Modal8;
