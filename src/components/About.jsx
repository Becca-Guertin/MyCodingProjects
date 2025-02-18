import React, { useState } from "react";
import { Grid, Container, Box } from "@material-ui/core";
import Modal8 from "../components/Modals/Modal8";
import img1 from "../assets/images/Contact-aboutMe.png";
import img3 from "../assets/images/About me-cosmoQuiz.png";
import img4 from "../assets/images/Hi, how are you-img-about.png";
import img5 from "../assets/images/Let’s stay in touch-about.png";
//import pageBackGround from "../assets/images/Website-sprinkles-background .png";
import "../assets/css/style.css";

const About = () => {
  const [isModalOpen8, setIsModalOpen2] = useState(false);

  const cloud =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-cloudBG.PNG";

  const handleClick2 = () => {
    setIsModalOpen2(true);
    // alert("Press Esc to return to About");
  };
  return (
    <React.Fragment>
      {/* <Page> */}

      <Box
        sx={{
          backgroundImage: `url(${cloud})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          // paddingBottom: 10,
        }}
      >
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid
              item
              sx={{
                alignSelf: "flex-end", // Overrides container's vertical alignment for this item
              }}
            >
              <Box>
                <img
                  className="image zoom about-img4"
                  src={img3}
                  alt="About me quiz"
                ></img>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid
              item
              sx={{
                alignSelf: "flex-end", // Overrides container's vertical alignment for this item
              }}
            >
              <Box>
                <Modal8
                  open={isModalOpen8}
                  setIsModalOpen={setIsModalOpen2}
                ></Modal8>

                <img
                  className="round hoverHand2"
                  src={
                    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/checkOutResume.png"
                  }
                  style={{ maxHeight: 200, maxWidth: 200, marginBottom: 30 }}
                  onClick={handleClick2}
                  alt=""
                ></img>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
        sx={{
          backgroundImage: `url(${cloud})`,
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Container>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid
              item
            >
              <Box>
                <img
                  className="zoom about-img1"
                  // style={{ maxHeight: 500, maxWidth: 400 }}
                  src={img4}
                  alt="Hi, How are you?"
                />
              </Box>
            </Grid>
            <Grid
              item
            >
              <Box>
                <img
                  className="zoom about-img2" //roundCorners
                  src={img1}
                  // style={{ maxHeight: 300, maxWidth: 300 }}
                  alt="contact information listed"
                ></img>
              </Box>
            </Grid>

            <Grid
              item
            >
              <Box>
                <img
                  className="zoom about-img3" //roundCorners
                  src={img5}
                  alt="Let's keep in touch!"
                ></img>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>F
      </Box>
    </React.Fragment>
  );
};

export default About;
