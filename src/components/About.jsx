import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Modal8 from "../components/Modals/Modal8";
import img1 from "../assets/images/Contact-aboutMe.png";
import img3 from "../assets/images/About me-cosmoQuiz.png";
import img4 from "../assets/images/Hi, how are you-img-about.png";
import img5 from "../assets/images/Let’s stay in touch-about.png";
import pageBackGround from "../assets/images/Website-swirlyPink-background .png";
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
      <div
        className="container flex-extend"
        style={{
          padding: 100,
          backgroundImage: "url(" + cloud + ")",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={4}
        >
            <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <img
              className="zoom"
              style={{ maxHeight: 500, maxWidth: 400 }}
              src={img4}
              alt="Hi, How are you?"
            />
          </Grid>
          <Grid item>
            <img
              className="zoom" //roundCorners
              src={img1}
              style={{ maxHeight: 300, maxWidth: 300 }}
              alt="contact information listed"
            ></img>
          </Grid>
          
          <Grid item>
            <img
              className="zoom" //roundCorners
              src={img5}
              style={{
                height: "auto",
                width: "auto",
                maxHeight: 600,
                maxWidth: 400,
              }}
              alt="Let's keep in touch!"
            ></img>
          </Grid>
        </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
            spacing={4}
          >
          </Grid>
          <Grid item>
            <img
              className="image zoom"
              src={img3}
              style={{
                height: "auto",
                width: "auto",
                maxHeight: 900,
                maxWidth: 600,
              }}
              alt="About me quiz"
            ></img>
          </Grid>
         
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item></Grid>
            <Grid item className="justify-content-center">
            <Modal8
              open={isModalOpen8}
              setIsModalOpen={setIsModalOpen2}
            ></Modal8>
            <img
              className="round hoverHand2"
              src={
                "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/checkOutResume.png"
              }
              style={{ maxHeight: 200, maxWidth: 200 }}
              onClick={handleClick2}
              alt=""
            ></img>
          </Grid>
            <Grid item></Grid>
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item xs={6}></Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default About;
