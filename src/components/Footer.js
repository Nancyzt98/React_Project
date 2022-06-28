import React from "react";
import { useTranslation } from "react-i18next";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <MDBFooter style={{ backgroundColor: '#212121' }} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-center">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">{t("about_us")}</h5>
            <p>
              {t("about_us_info")}
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 style={{ paddingLeft: "31px" }} className="title">{t("business_hours")}</h5>
            <ul>
              <li className="list-unstyled">
                {t("day_of_week")}
              </li>
              <li className="list-unstyled">
                10am - 8pm
              </li>
              <li className="list-unstyled">
                {t("close")}
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 style={{ paddingLeft: "31px" }} className="title">{t("address")}</h5>
            <ul>
              <li className="list-unstyled">
                3517 McBean St
              </li>
              <li className="list-unstyled">
                Richmond, ON
              </li>
              <li className="list-unstyled">
                K0A 2Z0
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="3">
            <h5 style={{ paddingLeft: "31px" }} className="title">{t("contact")}</h5>
            <ul>
              <li className="list-unstyled">
                spotlight@gmail.com
              </li>
              <li className="list-unstyled">
                +1 (613) 456-7891
              </li>
              <li className="list-unstyled">
                +1 (613) 456-2222
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
