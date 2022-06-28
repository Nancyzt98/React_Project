import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Dialog from "../components/Dialog";
import { Card } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useTranslation } from "react-i18next";

const BodySpa = (props) => {

  const { t } = useTranslation();
      

    const services = [
      {
        name: 'therapeutic',
        label: 'the_massage',
        technician: 'Jeff'
      },
      {
        name: 'deep pressure',
        label: 'deep_massage',
        technician: 'Marie'
      },
      {
        name: 'prenatal',
        label: 'pre_massage',
        technician: 'Timothy'
      },
      {
        name: 'shiatsu',
        label: 'shi_massage'
      }

    ];
    const servicename = 'body_SPA';
    return (
      <div>

        <p></p>

        <div>
        <img src='https://images.squarespace-cdn.com/content/v1/56bdd4a5cf80a18494f85725/1584112348621-0E31G10I6NXI0M6VDZC1/mani+3.jpg?format=1500w' alt='bodyspa' width={939} height={624} />
        </div>

        <div style={{margin: '20px 110px 30px 110px'}}>
          <Card>
            <Card.Header className="d-flex align-items-left"><h3><img src='https://cdn-icons-png.flaticon.com/512/53/53781.png' alt='scissorsicon' width={60} height={60} /><b>&nbsp;{t("body_SPA")}</b></h3></Card.Header>
            <Card.Body>
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "75%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("the_massage")}</b></Card.Title>
                        <p style={{textAlign: "left"}}>
                          <b>{t("price_label")}</b>{t("the_massage_pri")}<br />
                          {t("the_massage_des")}
                        </p>
                  </MDBCol>
                  <MDBCol style={{ width: "25%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("deep_massage")}</b></Card.Title>
                          <p style={{textAlign: "left"}}>
                            <b>{t("price_label")}</b>{t("deep_massage_pri")}<br />
                            {t("deep_massage_des")}
                          </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "75%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("pre_massage")}</b></Card.Title>
                        <p style={{textAlign: "left"}}>
                          <b>{t("price_label")}</b>{t("pre_massage_pri")}<br />
                          {t("pre_massage_des")}
                        </p>
                  </MDBCol>
                  <MDBCol style={{ width: "25%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("shi_massage")}</b></Card.Title>
                          <p style={{textAlign: "left"}}>
                            <b>{t("price_label")} </b>{t("shi_massage_pri")}<br />
                            {t("shi_massage_des")}
                          </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </Card.Body>
          </Card>
        </div>
        <div style={{margin: '20px 110px 30px 110px'}}>
          <Card>
            <Card.Header className="d-flex align-items-left"><h3><img src='https://www.thecambridgephysiotherapy.com/img/design/person_profile_icon.png' alt='scissorsicon' width={60} height={60} /><b>&nbsp;{t("body_specialist")}</b></h3></Card.Header>
            <Card.Body>
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Jeff.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Jeff</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("body_specialist1")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Marie.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Marie</b></h3>
                      <p style={{textAlign: "left"}}>
                      {t("body_specialist2")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Timothy.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Timothy</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("body_specialist3")}
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
  export default BodySpa;


