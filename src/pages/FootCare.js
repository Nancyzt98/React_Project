import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Dialog from "../components/Dialog";
import { Card } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useTranslation } from "react-i18next";

const FootCare = (props) => {
  const { t } = useTranslation();
    const services = [
      {
        name: "shellac",
        label: "foot_she",
        technician: "Daria",
      },
      {
        name: "foot",
        label: "foot_fix",
        technician: "Erin",
      },
      {
        name: "hot",
        label: "foot_stones",
        technician: "Stephanie",
      },
      {
        name: "french",
        label: "foot_french",
      },
    ];
    const servicename = "foot_care";
    return (
      <div>
        <p></p>
        <div>
        <img src='images/footcare.jpg' alt='footcare' width={939} height={624} />
        </div>
        <div style={{margin: '20px 110px 30px 110px'}}>
          <Card>
            <Card.Header className="d-flex align-items-left"><h3><img src='https://www.pinclipart.com/picdir/big/67-674173_baby-feet-icon-foot-clipart.png' alt='scissorsicon' width={60} height={60} /><b>&nbsp;{t("foot_care")}</b></h3></Card.Header>
            <Card.Body>
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "75%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("foot_she")}</b></Card.Title>
                        <p style={{textAlign: "left"}}>
                          <b>{t("price_label")}</b>{t("foot_she_pri")}<br />
                          {t("foot_she_des")}
                        </p>
                  </MDBCol>
                  <MDBCol style={{ width: "25%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("foot_fix")}</b></Card.Title>
                          <p style={{textAlign: "left"}}>
                            <b>{t("price_label")}</b> {t("foot_stones_pri")} <br />
                            {t("foot_stones_des")}
                          </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "75%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("foot_stones")}</b></Card.Title>
                        <p style={{textAlign: "left"}}>
                          <b>{t("price_label")}</b> {t("foot_fix_pri")} <br />
                          {t("foot_fix_des")}
                        </p>
                  </MDBCol>
                  <MDBCol style={{ width: "25%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("foot_french")}</b></Card.Title>
                          <p style={{textAlign: "left"}}>
                            <b>{t("price_label")}</b> {t("foot_french_pri")} <br />
                            {t("foot_french_des")}
                          </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </Card.Body>
          </Card>
        </div>
        <div style={{margin: '20px 110px 30px 110px'}}>
          <Card>
            <Card.Header className="d-flex align-items-left"><h3><img src='https://www.thecambridgephysiotherapy.com/img/design/person_profile_icon.png' alt='scissorsicon' width={60} height={60} /><b>&nbsp;OUR PODIATRISTS</b></h3></Card.Header>
            <Card.Body>
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Daria.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Daria</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("foot_specialist1")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Erin.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Erin</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("foot_specialist2")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Stephanie.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Stephanie</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("foot_specialist3")}
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

 export default FootCare;