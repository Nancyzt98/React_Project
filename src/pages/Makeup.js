import React from "react";
import { Card } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useTranslation } from "react-i18next";
import Dialog from "../components/Dialog";

export default function Makeup() {
  const { t } = useTranslation();
  const services = [
    {
      name: "hd",
      label: t("makeup_item1_title"),
      technician: t("makeup_our1_title"),
    },
    {
      name: "matte",
      label: t("makeup_item2_title"),
      technician: t("makeup_our2_title"),
    },
    {
      name: "shimmer",
      label: t("makeup_item3_title"),
      technician: t("makeup_our3_title"),
    },
    {
      name: "bride",
      label: t("makeup_item4_title"),
    },
  ];

  const servicename = t("makeup_title");
  return (
    <div>
      <div style={{ margin: "20px 110px 30px 110px" }}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/56bdd4a5cf80a18494f85725/1543414355205-XQ2JXGYU05XA53ESW8NC/Spotlight-08-WEB.jpg?format=2500w"
          alt="bodyspa"
          width={939}
          height={624}
        />
      </div>
      <div style={{ margin: "20px 110px 30px 110px" }}>
        <Card>
          <Card.Header className="d-flex align-items-left">
            <h3>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/makeup-1918640-1625937.png"
                alt="scissorsicon"
                width={60}
                height={60}
              />
              <b>&nbsp;{t("makeup_title")}</b>
            </h3>
          </Card.Header>
          <Card.Body>
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow style={{ margin: "10px" }}>
                <MDBCol style={{ width: "75%" }}>
                  <Card.Title className="d-flex align-items-left">
                    <b>{t("makeup_item1_title")}</b>
                  </Card.Title>
                  <p style={{ textAlign: "left" }}>
                    <b>{t("price")}: </b>$60
                    <br />
                  </p>
                </MDBCol>
                <MDBCol style={{ width: "25%" }}>
                  <Card.Title className="d-flex align-items-left">
                    <b>{t("makeup_item2_title")}</b>
                  </Card.Title>
                  <p style={{ textAlign: "left" }}>
                    <b>{t("price")}: </b> $55 <br />
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow style={{ margin: "10px" }}>
                <MDBCol style={{ width: "75%" }}>
                  <Card.Title className="d-flex align-items-left">
                    <b>{t("makeup_item3_title")}</b>
                  </Card.Title>
                  <p style={{ textAlign: "left" }}>
                    <b>{t("price")}: </b> $60 <br />
                  </p>
                </MDBCol>
                <MDBCol style={{ width: "25%" }}>
                  <Card.Title className="d-flex align-items-left">
                    <b>{t("makeup_item4_title")}</b>
                  </Card.Title>
                  <p style={{ textAlign: "left" }}>
                    <b>{t("price")}: </b> $20
                    <br />
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
              <b>&nbsp;{t("makeup_our")}</b>
            </h3>
          </Card.Header>
          <Card.Body>
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow style={{ margin: "10px" }}>
                <MDBCol style={{ width: "20%" }}>
                  <Card.Img variant="top" src="./images/Timi.jpeg" />
                  <Card.Body>
                    <h3 style={{ textAlign: "left" }}>
                      <b>{t("makeup_our1_title")}</b>
                    </h3>
                    <p style={{ textAlign: "left" }}>{t("makeup_our1_msg")}</p>
                  </Card.Body>
                </MDBCol>
                <MDBCol style={{ width: "20%" }}>
                  <Card.Img variant="top" src="./images/Tom.webp" />
                  <Card.Body>
                    <h3 style={{ textAlign: "left" }}>
                      <b>{t("makeup_our2_title")}</b>
                    </h3>
                    <p style={{ textAlign: "left" }}>{t("makeup_our2_msg")}</p>
                  </Card.Body>
                </MDBCol>
                <MDBCol style={{ width: "20%" }}>
                  <Card.Img variant="top" src="./images/Rose.webp" />
                  <Card.Body>
                    <h3 style={{ textAlign: "left" }}>
                      <b>{t("makeup_our3_title")}</b>
                    </h3>
                    <p style={{ textAlign: "left" }}>{t("makeup_our3_msg")}</p>
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
