import React from "react";
import Dialog from "../components/Dialog";
import { Card } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useTranslation } from "react-i18next";

export default function EyelashExtesion() {
  const { t } = useTranslation();
  const services = [
    {
      name: "classic",
      label: t("eyelash_item1_title"),
      technician: t("eyelash_item1_title"),
    },
    {
      name: "2d3d",
      label: t("eyelash_item2_title"),
      technician: t("eyelash_item2_title"),
    },
    {
      name: "4d",
      label: t("eyelash_item3_title"),
      technician: t("eyelash_item3_title"),
    },
    {
      name: "5d",
      label: t("eyelash_item4_title"),
    },
  ];
  const servicename = t("eyelash_title");

  return (
    <div>
      <div style={{ margin: "20px 110px 30px 110px" }}>
        <Card>
          <Card.Header className="d-flex align-items-left">
            <h3>
              <img
                src="https://cdn-icons-png.flaticon.com/512/80/80518.png"
                alt="scissorsicon"
                width={60}
                height={60}
              />
              <b>&nbsp;{t("eyelash")}</b>
            </h3>
          </Card.Header>
          <Card.Body>
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow style={{ margin: "10px" }}>
                <MDBCol style={{ width: "75%" }}>
                  <Card.Title className="d-flex align-items-left">
                    <b>{t("eyelash_item1_title")}</b>
                  </Card.Title>
                  <p style={{ textAlign: "left" }}>
                    <b>{t("price")}: </b>$170
                    <br />
                    {t("eyelash_item1_msg")}
                  </p>
                </MDBCol>
                <MDBCol style={{ width: "25%" }}>
                  <Card.Title className="d-flex align-items-left">
                    <b>{t("eyelash_item2_title")}</b>
                  </Card.Title>
                  <p style={{ textAlign: "left" }}>
                    <b>{t("price")}: </b> $200 <br />
                    {t("eyelash_item2_msg")}
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ margin: "10px" }}>
                <MDBCol style={{ width: "75%" }}>
                  <Card.Title className="d-flex align-items-left">
                    <b>{t("eyelash_item3_title")}</b>
                  </Card.Title>
                  <p style={{ textAlign: "left" }}>
                    <b>{t("price")}: </b> $200 <br />
                    {t("eyelash_item3_msg")}
                  </p>
                </MDBCol>
                <MDBCol style={{ width: "25%" }}>
                  <Card.Title className="d-flex align-items-left">
                    <b>{t("eyelash_item4_title")}</b>
                  </Card.Title>
                  <p style={{ textAlign: "left" }}>
                    <b>{t("price")}: </b> $200 <br />
                    {t("eyelash_item4_msg")}
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </Card.Body>
        </Card>
      </div>
      <div style={{ margin: "20px 110px 30px 110px" }}>
        <Card>
          <Card.Header className="d-flex align-items-left">
            <h3>
              <img
                src="https://www.thecambridgephysiotherapy.com/img/design/person_profile_icon.png"
                alt="scissorsicon"
                width={60}
                height={60}
              />
              <b>&nbsp;{t("eyelash_our")}</b>
            </h3>
          </Card.Header>
          <Card.Body>
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow style={{ margin: "10px" }}>
                <MDBCol style={{ width: "20%" }}>
                  <Card.Img variant="top" src="./images/Barbara.jpg" />
                  <Card.Body>
                    <h3 style={{ textAlign: "left" }}>
                      <b>{t("eyelash_our1_title")}</b>
                    </h3>
                    <p style={{ textAlign: "left" }}>{t("eyelash_our1_msg")}</p>
                  </Card.Body>
                </MDBCol>
                <MDBCol style={{ width: "20%" }}>
                  <Card.Img variant="top" src="./images/Carole.jpg" />
                  <Card.Body>
                    <h3 style={{ textAlign: "left" }}>
                      <b>{t("eyelash_our2_title")}</b>
                    </h3>
                    <p style={{ textAlign: "left" }}>{t("eyelash_our2_msg")}</p>
                  </Card.Body>
                </MDBCol>
                <MDBCol style={{ width: "20%" }}>
                  <Card.Img variant="top" src="./images/Isabelle.jpg" />
                  <Card.Body>
                    <h3 style={{ textAlign: "left" }}>
                      <b>{t("eyelash_our3_title")}</b>
                    </h3>
                    <p style={{ textAlign: "left" }}>{t("eyelash_our3_msg")}</p>
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
