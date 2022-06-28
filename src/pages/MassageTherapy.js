import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Dialog from "../components/Dialog";
import { Card } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useTranslation } from "react-i18next";

const MassageTherapy = (props) => {

  const { t } = useTranslation();
    const services = [
      {
        name: 'aromatherapymassage',
        label: 'massage_aro',
        technician: 'Sarah'
      },
      {
        name: 'craniosacralmassage',
        label: 'massage_cra',
        technician: 'Melissa'
      },
      {
        name: 'hotstonemassage',
        label: 'massage_stone',
        technician: 'Ryan'
      },
      {
        name: 'deeptissuemassage',
        label: 'massage_deep'
      }

    ];
    const servicename = 'massage';
    return (
      <div>

        <p></p>

        <div>
        <img src='https://images.squarespace-cdn.com/content/v1/56bdd4a5cf80a18494f85725/1543414198510-P4B9LM941E5SGCQQ823W/Spotlight-09.jpg?format=1500w' alt='messagetherapy' />
        </div>

        <div style={{margin: '20px 110px 30px 110px'}}>
          <Card>
            <Card.Header className="d-flex align-items-left"><h3><img src='https://static.thenounproject.com/png/1933032-200.png' alt='scissorsicon' width={60} height={60} /><b>&nbsp;{t("massage")}</b></h3></Card.Header>
            <Card.Body>
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "75%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("massage_aro")}</b></Card.Title>
                        <p style={{textAlign: "left"}}>
                          <b>{t("price_label")}</b>{t("massage_aro_pri")}<br />
                          {t("massage_aro_des")}
                        </p>
                  </MDBCol>
                  <MDBCol style={{ width: "25%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("massage_stone")}</b></Card.Title>
                          <p style={{textAlign: "left"}}>
                            <b>{t("price_label")}</b> {t("massage_stone_pri")} <br />
                            {t("massage_stone_des")}
                          </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "75%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("massage_deep")}</b></Card.Title>
                        <p style={{textAlign: "left"}}>
                          <b>{t("price_label")}</b> {t("massage_deep_pri")}<br />
                          {t("massage_deep_des")}
                        </p>
                  </MDBCol>
                  <MDBCol style={{ width: "25%" }}>
                    <Card.Title className="d-flex align-items-left"><b>{t("massage_cra")}</b></Card.Title>
                          <p style={{textAlign: "left"}}>
                            <b>{t("price_label")} </b> {t("massage_cra_pri")} <br />
                            {t("massage_cra_des")}
                          </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </Card.Body>
          </Card>
        </div>
        <div style={{margin: '20px 110px 30px 110px'}}>
          <Card>
            <Card.Header className="d-flex align-items-left"><h3><img src='https://www.thecambridgephysiotherapy.com/img/design/person_profile_icon.png' alt='scissorsicon' width={60} height={60} /><b>&nbsp;{t("massage_specialist")}</b></h3></Card.Header>
            <Card.Body>
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{ margin: "10px" }}>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Sarah.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Sarah</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("massage_specialist1")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Melissa.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Melissa</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("massage_specialist2")}
                      </p>
                    </Card.Body>
                  </MDBCol>
                  <MDBCol style={{ width: "20%" }}>
                    <Card.Img variant="top" src="./images/Ryan.jpg" />
                    <Card.Body>
                      <h3 style={{textAlign: "left"}}><b>Ryan</b></h3>
                      <p style={{textAlign: "left"}}>
                        {t("massage_specialist3")}
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
   export default MassageTherapy;

