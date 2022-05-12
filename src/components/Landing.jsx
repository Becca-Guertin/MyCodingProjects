import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import Modal1 from "../components/Modals/Modal1";
import helloText from "../assets/images/HelloWorldIMG.png";
import greenBG from "../assets/images/GreenBannerIMG.png";
import bioIMG from "../assets/images/BeccaBioIMG.png";
// import img1 from "../assets/images/SunPopShop logo.png";
import img2 from "../assets/images/ClownBabeTexture-min.png";
import img3 from "../assets/images/PlantAlienBabeTex_colors.png";
// import img4 from "../assets/images/WipHHpoisonVialAmpBgTex (1).png";
import img5 from "../assets/images/EverythingMeansNothing.PNG";
import img6 from "../assets/images/Modern-Pulp-celebrateNewChallenges.PNG";
// import img7 from "../assets/images/Bending backwards_NoBckg2.jpg";
import img8 from "../assets/images/DE0A4174-6922-4D78-97C8-D40DB7961115.JPG";
import img9 from "../assets/images/SurprisedAlienBabe_redTex.png";
// import img10 from "../assets/images/PleatherGalaxyBabe_tex.png";
// import img11 from "../assets/images/PoisonHHampNoBG1.png";
import img12 from "../assets/images/Modern-Pulp-myHeartRevamp.PNG";
import img13 from "../assets/images/TransparentBannerCrop_h&h.png";
import img14 from "../assets/images/Sunpoplogostamp.png";
import img15 from "../assets/images/HostAFanLogo1.png";
import purpleBGimg from "../assets/images/SiteBackGroundHorizontal.PNG";
import myProjectText from "../assets/images/RecentProjectsIMJ (1).png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/style.css";

const Landing = () => {
  const carouselImgs = [img2, img12, img5, img6, img8, img9];

  const [isModalOpen8, setIsModalOpen2] = useState(false);

  const handleClick = () => {
    setIsModalOpen2(true);
    // alert("Press Esc to return to About");
  };

  return (
    <React.Fragment>
      <div className="container">
        <Grid
          container
          direction="column"
          spacing={4}
          justify="center"
          alignItems="center"
          style={{
            backgroundImage: "url(" + greenBG + ")",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid item xs={2}></Grid>
          <Grid item>
            <img
              className="logo fullyRound shadow zoom hoverHand"
              style={{ maxHeight: 300, maxWidth: 200 }}
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
                src={helloText}
                style={{
                  height: "50%",
                  width: "50%",
                }}
              ></img>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Grid item></Grid>
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
                    alt="becca is an artist and software engineer based out of the greater seattle area"
                    style={{ height: 400, width: 500 }}
                  ></img>
                </Link>
              </Grid>
              <Grid item>
                <img
                  className="roundCorners"
                  alt=""
                  src={img3}
                  style={{ maxHeight: 300, maxWidth: 300 }}
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
                <Grid item className="justify-content-center">
                  <img
                    alt="resume"
                    className="round hoverHand2"
                    src={
                      "https://sunpopbucket.s3-us-west-1.amazonaws.com/images/checkOutResume.png"
                    }
                    style={{ maxHeight: 150, maxWidth: 150 }}
                    onClick={handleClick}
                  />
                  <Modal1
                    open={isModalOpen8}
                    setIsModalOpen={setIsModalOpen2}
                  ></Modal1>
                </Grid>
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
                paddingBottom: 75,
                backgroundImage: "url(" + purpleBGimg + ")",
                backgroundSize: "100%",
              }}
            >
              <Grid item>
                <img
                  className=""
                  alt="multi-colored flower icon"
                  src="https://sunpopbucket.s3.us-west-1.amazonaws.com/images/MultiColorFlowerStamp1.png"
                  style={{
                    maxHeight: 175,
                    maxWidth: 175,
                    padding: 50,
                  }}
                />
              </Grid>
              <Grid item>
                <div className="shadow">
                  <SimpleImageSlider
                    width={600}
                    height={600}
                    images={carouselImgs}
                    showBullets={true}
                    showNavs={true}
                  />
                </div>
              </Grid>
              <Grid item>
                <img
                  className=""
                  alt="multi-colored flower icon"
                  src="https://sunpopbucket.s3.us-west-1.amazonaws.com/images/MultiColorFlowerStamp1.png"
                  style={{
                    maxHeight: 300,
                    maxWidth: 300,
                    padding: 75,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <img
                  alt="my recent projects"
                  src={myProjectText}
                  style={{ maxHeight: 100, maxWidth: 300, padding: 75 }}
                />
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={3}>
                <a
                  title="Hazards and Hijinks"
                  href="https://dev.d1wehpq1tr8ee4.amplifyapp.com/"
                >
                  <img
                    src={img13}
                    alt=""
                    style={{
                      height: "auto",
                      width: "auto",
                      maxHeight: 300,
                      maxWidth: 400,
                    }}
                    className="shadow rounded"
                  ></img>
                </a>
                {/* <tt style={{ fontSize: 30 }}>Hazards and Hijinks</tt> */}
              </Grid>
              <Grid item xs={3}>
                <a title="sunpopshop.com" href="https://sunpopshop.com">
                  <img
                    src={img14}
                    alt="sunpopshop.com"
                    style={{
                      height: "auto",
                      width: "auto",
                      maxHeight: 300,
                      maxWidth: 300,
                    }}
                    className="shadow rounded"
                  ></img>
                </a>
                {/* <tt style={{ fontSize: 30 }}>sunpopshop.com</tt> */}
              </Grid>
              <Grid item xs={3}>
                <a
                  title="Host a Fan"
                  href="https://hostafan.azurewebsites.net/"
                >
                  <img
                    src={img15}
                    alt=""
                    style={{
                      height: "auto",
                      width: "auto",
                      maxHeight: 300,
                      maxWidth: 300,
                    }}
                    className="shadow rounded"
                  ></img>
                </a>
                {/* <tt style={{ fontSize: 30 }}>Host a Fan</tt> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Landing;
