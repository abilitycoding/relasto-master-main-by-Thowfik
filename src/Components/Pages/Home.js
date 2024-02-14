import React, { Profiler, useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import "../Styles/Home.css";
import { MdLocationOn } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { FaShower, FaBed } from "react-icons/fa";
import { BsArrowsAngleContract } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const propDetails = [
    {
      img: "/assets/sec4/1.png",
      location: "2861 62nd Ave, Oakland, CA 94605",
      room: "3 Bed Room",
      bath: "1 Bath",
      area: "1,032 sqft",
      family: "Family",
      price: "$649,900",
      id: "1"
    },
    {
      img: "/assets/sec4/2.png",
      location: "2861 62nd Ave, Oakland, CA 94605",
      room: "3 Bed Room",
      bath: "1 Bath",
      area: "1,032 sqft",
      family: "Family",
      price: "$649,900",
      id: "2"
    },
    {
      img: "/assets/sec4/3.png",
      location: "2861 62nd Ave, Oakland, CA 94605",
      room: "3 Bed Room",
      bath: "1 Bath",
      area: "1,032 sqft",
      family: "Family",
      price: "$649,900",
      id: "3"
    },
    {
      img: "/assets/sec4/4.png",
      location: "2861 62nd Ave, Oakland, CA 94605",
      room: "3 Bed Room",
      bath: "1 Bath",
      area: "1,032 sqft",
      family: "Family",
      price: "$649,900",
      id: "4"
    },
    {
      img: "/assets/sec4/5.png",
      location: "2861 62nd Ave, Oakland, CA 94605",
      room: "3 Bed Room",
      bath: "1 Bath",
      area: "1,032 sqft",
      family: "Family",
      price: "$649,900",
      id: "5"
    },
    {
      img: "/assets/sec4/6.png",
      location: "2861 62nd Ave, Oakland, CA 94605",
      room: "3 Bed Room",
      bath: "1 Bath",
      area: "1,032 sqft",
      family: "Family",
      price: "$649,900",
      id: "6"
    }
  ];
  const sliderArr = [
    {
      img: "/assets/women.png",
      head: "Taylor Wilson",
      p1: "Product Manager - Static Mania",
      p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "/assets/women.png",
      head: "Taylor Wilson",
      p1: "Product Manager - Static Mania",
      p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "/assets/women.png",
      head: "Taylor Wilson",
      p1: "Product Manager - Static Mania",
      p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "/assets/women.png",
      head: "Taylor Wilson",
      p1: "Product Manager - Static Mania",
      p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className=" overflow-hidden">
      <section className="section1 py-5">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className="p-0">
              <div className="p-3">
                <h1 className=" fw-bold">
                  Find a perfect property Where you'll love to live
                </h1>
                <p>
                  We helps businesses customize, automate and scale up their ad
                  production and delivery.
                </p>
              </div>
              <div className=" d-flex justify-content-center align-items-center">
                <span className=" sec1Form bg-white p-4 rounded-4 d-flex flex-column gap-3">
                  <span className="d-flex justify-content-between flex-wrap pb-3">
                    <Button
                      className=" fw-bold bsrbtn rounded-3"
                      variant="dark"
                      type="submit"
                    >
                      Buy
                    </Button>
                    <Button
                      className=" fw-bold bsrbtn rounded-3"
                      variant="secondary"
                      type="submit"
                    >
                      Sell
                    </Button>
                    <Button
                      className=" fw-bold bsrbtn rounded-3"
                      variant="secondary"
                      type="submit"
                    >
                      Rent
                    </Button>
                  </span>

                  <Form>
                    <Form.Group
                      className="mb-3 d-flex position-relative"
                      controlId="formBasicCity"
                    >
                      <Form.Control
                        className="p-3 rounded-4 ms-auto"
                        type="City"
                        placeholder="City/Street"
                      />
                      <MdLocationOn className="fs-3 text-info location-icon" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicProperty">
                      <Form.Control
                        className="p-3 rounded-4"
                        type="Property"
                        placeholder="Property Type"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicNumber">
                      <Form.Control
                        className="p-3 rounded-4"
                        type="number"
                        placeholder="Price Range"
                      />
                    </Form.Group>
                    <Button
                      className="bsrbtn w-100 fw-bold px-3 rounded-3"
                      variant="dark"
                      type="submit"
                    >
                      Search
                    </Button>
                  </Form>
                </span>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              className="d-flex align-items-center p-0"
            >
              <img src="/assets/Home.png" alt="" width="100%" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section2 py-5">
        <Container>
          <Row>
            <Col
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center p-0"
            >
              <div className="section2col1 rounded-4 d-flex flex-column gap-4">
                <h1 className="section2h1 fw-bold">
                  Find a perfect property Where you'll love to live
                </h1>
                <p>
                  We helps businesses customize, automate and scale up their ad
                  production and delivery.
                </p>
                <span>
                  <Button
                    className=" fw-bold bsrbtn rounded-3"
                    variant="dark"
                    type="submit"
                  >
                    Buy
                  </Button>
                </span>
              </div>
            </Col>
            <Col
              md={12}
              lg={6}
              className="section2col2 d-flex justify-content-center align-items-center p-0 "
            >
              <div className="d-flex  gap-4 flex-column justify-content-center align-items-center">
                <div className="d-flex gap-4">
                  <div className="sec2col2 p-4 rounded-4 d-flex flex-column gap-3">
                    <img src="/assets/sec2/1.svg" alt="" width={30} />
                    <h2 className="section2h2">Search your location</h2>
                  </div>
                  <div className="sec2col2 p-4 rounded-4 d-flex flex-column gap-3">
                    <img src="/assets/sec2/2.svg" alt="" width={30} />
                    <h2 className="section2h2">Visit Appointment</h2>
                  </div>
                </div>
                <div className="d-flex gap-4">
                  <div className="sec2col2 p-4 rounded-4 d-flex flex-column gap-3">
                    <img src="/assets/sec2/3.svg" alt="" width={30} />
                    <h2 className="section2h2">Get your dream house</h2>
                  </div>
                  <div className="sec2col2 p-4 rounded-4 d-flex flex-column gap-3">
                    <img src="/assets/sec2/4.svg" alt="" width={30} />
                    <h2 className="section2h2">Enjoy your Appointment</h2>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section3 py-5">
        <Container>
          <div className=" d-flex justify-content-center align-items-center flex-wrap gap-5">
            <div className="box_info fw-bolder">
              <img
                src="/assets/sec3/1.svg"
                alt=""
                width={40}
                className=" py-2"
              />
              <h2 className="info_heading fw-bolder">$15.4M</h2>
              <p className="info_text">Owned from Properties transactions</p>
            </div>

            <div className="box_info fw-bolder">
              <img
                src="/assets/sec3/2.svg"
                alt=""
                width={40}
                className=" py-2"
              />
              <h2 className="info_heading fw-bolder">25K+</h2>
              <p className="info_text">
                Properties for Buy & sell Successfully
              </p>
            </div>

            <div className="box_info fw-bolder">
              <img
                src="/assets/sec3/3.svg"
                alt=""
                width={30}
                className=" py-2"
              />
              <h2 className="info_heading fw-bolder">500</h2>
              <p className="info_text">Daily completed transactions</p>
            </div>

            <div className="box_info fw-bolder">
              <img
                src="/assets/sec3/4.svg"
                alt=""
                width={30}
                className=" py-2"
              />
              <h2 className="info_heading fw-bolder">600+</h2>
              <p className="info_text">Regular Clients Buying Properties</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="section4 py-5">
        <Container>
          <div className=" d-flex justify-content-between align-items-center flex-wrap pb-5">
            <div>
              <h1 className=" fw-bolder">Featured Properties</h1>
              <div className=" d-flex justify-content-start align-items-center flex-wrap py-3">
                <p className="quick_Link fw-bolder pe-5">
                  <a href="">Resident Property</a>
                </p>
                <p className="quick_Link fw-bolder pe-5">
                  <a href="">Commercial Property</a>
                </p>
                <p className="quick_Link fw-bolder pe-5">
                  <a href="">Industrial Property</a>
                </p>
                <p className="quick_Link fw-bolder pe-5">
                  <a href="">Agricultural Property</a>
                </p>
              </div>
            </div>
            <div>
              <h3>
                <a className="prop_explore" href="">
                  Explore
                  <AiOutlineArrowRight />
                </a>
              </h3>
            </div>
          </div>
          <div className=" d-flex justify-content-center align-items-center flex-wrap gap-5">
            {propDetails.map((property) => (
              <Card
                style={{ width: "25rem" }}
                className=" rounded-5"
                key={property.id}
              >
                <img src={property.img} alt="" />
                <Card.Body>
                  <Card.Title className="p-1">
                    <GrMapLocation className=" fs-3 me-2 " />
                    {property.location}
                  </Card.Title>
                  <div className="d-flex justify-content-between flex-wrap p-2">
                    <Card.Text className="card_text">
                      <FaBed className=" fs-3" /> {property.room}
                    </Card.Text>
                    <Card.Text className="card_text">
                      <FaShower className=" fs-3" />
                      {property.bath}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-between flex-wrap p-2">
                    <Card.Text className="card_text">
                      <BsArrowsAngleContract className=" fs-3" />
                      {property.area}
                    </Card.Text>
                    <Card.Text className="card_text">
                      <GiFamilyHouse className=" fs-3" />
                      {property.family}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-between flex-wrap p-2">
                    <Card.Text className="card_text fw-bolder">
                      {property.price}
                    </Card.Text>
                    <Button variant="dark">Details</Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <section className="section5 py-5">
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={6}
              className="py-3 d-flex align-items-center"
            >
              <Container width={300}>
                <h2 className=" fw-bolder">
                  Simple & easy way to find your dream Appointment
                </h2>
                <p className="py-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, when our power of choice
                  is untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed.
                </p>
                <Button variant="dark">Get Started</Button>
              </Container>
            </Col>
            <Col xs={12} sm={12} md={6} className="py-3">
              <div className=" d-flex justify-content-center">
                <div className=" me-3">
                  <div className="mb-3">
                    <img
                      className="four_imgaes"
                      src="/assets/sec5/1.png"
                      alt=""
                      width={200}
                    />
                  </div>
                  <div>
                    <img
                      className="four_imgaes"
                      src="/assets/sec5/2.png"
                      alt=""
                      width={200}
                    />
                  </div>
                </div>
                <div className="lower_img">
                  <div>
                    <div className="mb-3">
                      <img
                        className="four_imgaes"
                        src="/assets/sec5/3.png"
                        alt=""
                        width={200}
                      />
                    </div>
                    <div>
                      <img
                        className="four_imgaes"
                        src="/assets/sec5/4.png"
                        alt=""
                        width={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className=" py-5">
            <div className=" d-flex justify-content-center align-items-center flex-wrap">
              <Col xs={12} sm={12} md={6}>
                <img
                  src="/assets/sec5/6Big.png"
                  alt=""
                  width={450}
                  className="Big_img rounded-3"
                />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                className=" d-flex justify-content-center align-items-center  py-5"
              >
                <div width={300}>
                  <h2>Best rated host on popular rental sites</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, when our power of
                    choice is untrammelled.
                  </p>
                  <Form.Check
                    type="checkbox"
                    className=" "
                    label="Find excellent deals"
                  />
                  <Form.Check
                    type="checkbox"
                    className=" "
                    label="Friendly host & Fast support"
                  />
                  <Form.Check
                    type="checkbox"
                    className=" "
                    label="Secure payment system"
                  />
                  <Button className="mt-3" variant="dark" type="submit">
                    Learn More
                  </Button>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
      <section className="section6 py-5">
        <Container>
          <Slider className="sliderTag" {...sliderSettings}>
            {sliderArr.map((slide) => (
              <div className="slider-item d-flex justify-content-center align-items-center">
                <div className="image-container">
                  <img
                    src={slide.img}
                    alt="Slider Image"
                    width="400px"
                    className=" slider_img p-2"
                  />
                </div>
                <div className="text-container p-3">
                  <h1>{slide.head}</h1>
                  <h3>{slide.p1}</h3>
                  <p>{slide.p2}</p>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </div>
  );
};

export default Home;
