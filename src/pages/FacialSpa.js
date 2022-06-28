import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Dialog from "../components/Dialog";
import { Card } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useTranslation } from "react-i18next";

const FacialSpa = (props) => {

  const { t } = useTranslation();

    const services = [
      {
        name: "microdermabrasion",
        label: "face_micro",
        technician: "Anita",
      },
      {
        name: "gel",
        label: "face_gel",
        technician: "Julie",
      },
      {
        name: "korean",
        label: "face_korean",
        technician: "Jessica",
      },
      {
        name: "gm",
        label: "face_collin",
      },
    ];
    const servicename = "facial_SPA";
    return (
      <div>
        <p></p>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/56bdd4a5cf80a18494f85725/1543414172212-HP1TBFGKXVR6JMMG65JC/Spotlight-09.jpg?format=1500w"
            alt="facialspa"
          />
        </div>

        <div style={{margin: '20px 110px 30px 110px'}}>
          <Card>
            <Card.Header className="d-flex align-items-left"><h3><img src='./images/Facial.png' alt='scissorsicon' width={60} height={60} /><b>&nbsp;{t("facial_SPA")}</b></h3></Card.Header>
            <Card.Body>
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "75%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("face_micro")}</b></Card.Title>
                        <p style={{textAlign: "left"}}>
                          <b>{t("price_label")}</b>{t("face_micro_pri")}<br />
                          {t("face_micro_des")}
                        </p>
                  </MDBCol>
                  <MDBCol style={{ width: "25%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("face_gel")}</b></Card.Title>
                          <p style={{textAlign: "left"}}>
                            <b>{t("price_label")} </b> {t("face_gel_pri")} <br />
                            {t("face_gel_des")}
                          </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "75%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("face_korean")}</b></Card.Title>
                        <p style={{textAlign: "left"}}>
                          <b>{t("price_label")} </b> {t("face_korean_pri")} <br />
                          {t("face_korean_des")}
                        </p>
                  </MDBCol>
                  <MDBCol style={{ width: "25%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("face_collin")}</b></Card.Title>
                          <p style={{textAlign: "left"}}>
                            <b>{t("price_label")}</b> {t("face_collin_pri")} <br />
                            {t("face_collin_des")}
                          </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </Card.Body>
          </Card>
        </div>
        <div style={{margin: '20px 110px 30px 110px'}}>
          <Card>
            <Card.Header className="d-flex align-items-left"><h3><img src='https://www.thecambridgephysiotherapy.com/img/design/person_profile_icon.png' alt='scissorsicon' width={60} height={60} /><b>&nbsp;{t("facial_specialist")}</b></h3></Card.Header>
            <Card.Body>
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Anita.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Anita</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("facial_specialist1")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Julie.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Julie</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("facial_specialist2")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Jessica.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Jessica</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("facial_specialist3")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </Card.Body>
          </Card>
        </div>
        <Dialog services={services} servicename={servicename} />
      </div>
    );
  }
export default FacialSpa;
