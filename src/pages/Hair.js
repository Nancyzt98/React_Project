import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Dialog from "../components/Dialog";
import { Card } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useTranslation } from "react-i18next";

export default function Hair() {
    const { t } = useTranslation();
    const services = [
      {
        name: 'haircutting',
        label: 'hair_cutting',
        technician: 'James'
      },
      {
        name: 'hairfoiling',
        label: 'hair_foiling',
        technician: 'Max'
      },
      {
        name: 'hairstyling',
        label: 'hair_styling',
        technician: 'Tony'
      },
      {
        name: 'haircolouring',
        label: 'hair_colouring'
      }

    ];
    const servicename = 'hair_services';
    return (
      <div>
        <div className="mt-3 container-fluid">
          <Carousel>
            <Carousel.Item>
              <img
              style={{width:'86.8%'}}
                className="d-flex align-items-center mx-auto"
                src="/images/barber1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
              style={{width:'86.8%'}}
                className="d-flex align-items-center mx-auto"
                src="/images/barber2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{width:'86.8%'}}
                className="d-flex align-items-center mx-auto"
                src="images/barber3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div style={{margin: '20px 110px 30px 110px'}}>
          <Card>
            <Card.Header className="d-flex align-items-left"><h3><img src='./images/scissors.png' alt='scissorsicon' width={60} height={60} /><b>&nbsp;{t("hair_services")}</b></h3></Card.Header>
            <Card.Body>
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "75%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("hair_cutting")}</b></Card.Title>
                        <p style={{textAlign: "left"}}>
                          <b>{t("price")}:</b> $75 <br />
                          {t("hair_cutting_description")}
                        </p>
                  </MDBCol>
                  <MDBCol style={{ width: "25%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("hair_foiling")}</b></Card.Title>
                          <p style={{textAlign: "left"}}>
                            <b>{t("price")}:</b> $175 <br />
                            {t("hair_foiling_description")}
                          </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "75%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("hair_styling")}</b></Card.Title>
                        <p style={{textAlign: "left"}}>
                          <b>{t("price")}:</b> $65 <br />
                          {t("hair_styling_description")}
                        </p>
                  </MDBCol>
                  <MDBCol style={{ width: "25%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("hair_colouring")}</b></Card.Title>
                          <p style={{textAlign: "left"}}>
                            <b>{t("price")}:</b> $110 <br />
                            {t("hair_colouring_description")}
                          </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </Card.Body>
          </Card>
        </div>
        <div style={{margin: '20px 110px 30px 110px'}}>
          <Card>
            <Card.Header className="d-flex align-items-left"><h3><img src='./images/barber.png' alt='scissorsicon' width={60} height={60} /><b>&nbsp;{t("our_barbers")}</b></h3></Card.Header>
            <Card.Body>
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/James.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>James</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("james_description")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Max.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Max</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("max_description")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Tony.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Tony</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("tony_description")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </Card.Body>
          </Card>
          </div>
        <Dialog services={services} servicename={servicename}/>
      </div>
    );
}
