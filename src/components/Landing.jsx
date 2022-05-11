import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
//import Carousel from "@brainhubeu/react-carousel";
//import { Carousel } from "react-responsive-carousel";
import helloText from "../assets/images/HelloWorldIMG.png";
import greenBG from "../assets/images/GreenBannerIMG.png";
import bioIMG from "../assets/images/BeccaBioIMG.png";
import img1 from "../assets/images/SunPopShop logo.png";
import img2 from "../assets/images/ClownBabeTexture-min.png";
import img3 from "../assets/images/PlantAlienBabeTex_colors.png";
import img4 from "../assets/images/WipHHpoisonVialAmpBgTex (1).png";
import img5 from "../assets/images/EverythingMeansNothing.PNG";
import img6 from "../assets/images/Modern-Pulp-celebrateNewChallenges.PNG";
import img7 from "../assets/images/Bending backwards_NoBckg2.jpg";
import img8 from "../assets/images/DE0A4174-6922-4D78-97C8-D40DB7961115.JPG";
import img9 from "../assets/images/SurprisedAlienBabe_redTex.png";
import img10 from "../assets/images/PleatherGalaxyBabe_tex.png";
import img11 from "../assets/images/PoisonHHampNoBG1.png";
import img12 from "../assets/images/Modern-Pulp-myHeartRevamp.PNG";
import purpleBGimg from "../assets/images/SiteBackGroundHorizontal.PNG";
// import "@brainhubeu/react-carousel/lib/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/style.css";

const Landing = () => {
  const carouselImgs = [img2, img12, img5, img6, img8, img9];
  // const background =
  //   "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/Modern-Pulp-cloudBG.PNG";

  return (
    <React.Fragment>
      <div
        className="container"
        // style={{
        //   padding: 50,
        //   backgroundImage: "url(" + greenBG + ")",
        //   backgroundSize: "100%",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <Grid
          container
          direction="column"
          spacing={4}
          justify="center"
          alignItems="center"
          style={{
            // paddingTop: 50,
            // padding: 50,
            backgroundImage: "url(" + greenBG + ")",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid item xs={2}></Grid>
          <Grid item>
            <img
              className="logo fullyRound shadow zoom hoverHand"
              style={{ maxHeight: 600, maxWidth: 500 }}
              src={
                "https://sunpopbucket.s3.us-west-1.amazonaws.com/images/SelfieBuddiesA.png"
              }
              alt="@sunflowerpopshop"
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item></Grid>
              <Grid item></Grid>
              <img
                alt="hello world"
                className="roundCorners  zoom"
                // title="click for more info"
                src={helloText}
                style={{
                  height: "60%",
                  width: "60%",
                  // paddingTop: 50,
                }}
              ></img>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Grid item></Grid>
          {/* <Grid item>
            <Link to="" title="click for more about me!">
              <img
                className="roundCorners shadow zoom"
                alt=""
                src={
                  "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/HelloMyNameIsTexture.png"
                }
                style={{
                  height: "auto",
                  width: "auto",
                  maxHeight: 300,
                  maxWidth: 300,
                }}
              ></img>
            </Link>
          </Grid> */}
          {/* <Grid item xs={4}></Grid> */}
        </Grid>
        <Grid
          container
          direction="column"
          spacing={4}
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Link to="" title="click for more about me!">
                  <img
                    src={bioIMG}
                    alt=""
                    style={{ height: 500, width: 600 }}
                  ></img>
                </Link>
              </Grid>
              <Grid item>
                <img
                  className="roundCorners"
                  alt=""
                  src={img3}
                  style={{ maxHeight: 400, maxWidth: 400 }}
                />
              </Grid>
              <Grid item xs={4} style={{ paddingLeft: 400 }}></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item></Grid>
              <Grid item>
                {/* <img
                  className=""
                  alt=""
                  src="https://sunpopbucket.s3.us-west-1.amazonaws.com/images/MultiColorFlowerStamp1.png"
                  style={{ maxHeight: 200, maxWidth: 200 }}
                /> */}
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
              style={{
                paddingTop: 100,
                paddingBottom: 100,
                // paddingRight: 350,
                // paddingLeft: 460,
                backgroundImage: "url(" + purpleBGimg + ")",
                backgroundSize: "100%",
                // backgroundRepeat: "repeat",
              }}
            >
              <Grid item>
                <img
                  className=""
                  alt=""
                  src="https://sunpopbucket.s3.us-west-1.amazonaws.com/images/MultiColorFlowerStamp1.png"
                  style={{
                    maxHeight: 300,
                    maxWidth: 300,
                    padding: 50
                    // paddingLeft: 15,
                    // paddingRight: 50,
                  }}
                />
              </Grid>
              <Grid item>
                <div className="shadow">
                  <SimpleImageSlider
                    width={800}
                    height={800}
                    images={carouselImgs}
                    showBullets={true}
                    showNavs={true}
                  />
                </div>
                {/* <Link to="" title="click for more about me!">
              <img
                className="roundCorners shadow zoom"
                alt=""
                src={
                  "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/HelloMyNameIsTexture.png"
                }
                style={{
                  height: "auto",
                  width: "auto",
                  maxHeight: 300,
                  maxWidth: 300,
                }}
              ></img>
            </Link> */}
              </Grid>
              <Grid item>
                {/* <div
                //className="text"
                > */}
                {/* <div className="box"> */}
                <img
                  className=""
                  alt=""
                  src="https://sunpopbucket.s3.us-west-1.amazonaws.com/images/MultiColorFlowerStamp1.png"
                  style={{
                    maxHeight: 300,
                    maxWidth: 300,
                    padding: 75
                    // // paddingLeft: 50,
                    // paddingRight: 90,
                  }}
                />
                {/* <div className="middle">
                      <div className="text">click me</div>
                    </div>
                  </div>
                </div> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Landing;
