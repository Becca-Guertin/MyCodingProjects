import React from "react";
import { Grid, Box } from "@material-ui/core";
import img1 from "../assets/images/Contact-aboutMe.png";
import img3 from "../assets/images/About me-cosmoQuiz.png";
import img4 from "../assets/images/Hi, how are you-img-about.png";
import img5 from "../assets/images/Let’s stay in touch-about.png";
import "../assets/css/style.css";

const About = () => {
  const cloud =
    "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-cloudBG.PNG";

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundImage: `url(${cloud})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
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
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <Box>
              <img
                className="zoom about-img1"
                src={img4}
                alt="Hi, How are you?"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <img
                className="zoom about-img2"
                src={img1}
                alt="contact information listed"
              ></img>
            </Box>
          </Grid>

          <Grid item>
            <Box>
              <img
                className="zoom about-img3"
                src={img5}
                alt="Let's keep in touch!"
              ></img>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default About;
