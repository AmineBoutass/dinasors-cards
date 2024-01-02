import React from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, Grid } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrows for slick slider
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, right: "-20px" }} onClick={onClick}>
      <span>&#8594;</span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, left: "-20px" }} onClick={onClick}>
      <span>&#8592;</span>
    </div>
  );
};

function Home() {
  // Dummy dinosaur images
  const dinosaurImages = [
    "https://example.com/dinosaur1.jpg",
    "https://example.com/dinosaur2.jpg",
    "https://example.com/dinosaur3.jpg",
    // Add more dinosaur images as needed
  ];
  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      {/* Image Slider */}
      <Slider {...sliderSettings}>
        {dinosaurImages.map((image, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
            <img className="d-block w-75" src={image} alt={`Dinosaur ${index}`} />
          </div>
        ))}
      </Slider>

      {/* Card Section */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={4}>
          {/* <Card>
            <img
              src="https://placekitten.com/200/300"
              alt="Card 1"
              style={{ height: 200, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Card 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a description of Card 1. You can add more details here.
              </Typography>
            </CardContent>
          </Card>*/}
        </Grid>

        {/* Add more cards as needed */}
      </Grid>
    </div>
  );
}

export default Home;
