import React from "react";
import { Navbar, NavDropdown, Form, Button, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../App.css";

import Home from "../pages/Home";
import Hair from "../pages/Hair";
import BodySpa from "../pages/BodySpa";
import EyelashExtension from "../pages/EyelashExtension";
import FacialSpa from "../pages/FacialSpa";
import FootCare from "../pages/FootCare";
import Nails from "../pages/Nails";
import MassageTherapy from "../pages/MassageTherapy";
import Makeup from "../pages/Makeup";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "react-i18next";

export default function NavbarComp() {
  const getActive = (params) => {
    return params.indexOf(window.location.pathname) > -1;
  };
  const { t } = useTranslation();
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Navbar.Brand href="/home" style={{ paddingLeft: "10px" }}>
            {t("website_name")}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link active={getActive(["/home", "/"])} href="/home">
                {/* Home */}
                {t("home_title")}
              </Nav.Link>
              <NavDropdown
                active={getActive([
                  "/bodySpa",
                  "/facialSpa",
                  "/massageTherapy",
                  "/footCare",
                ])}
                title="Spa"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item
                  active={getActive(["/bodySpa"])}
                  href="/bodySpa"
                >
                  {t("bodySpa_title")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  active={getActive(["/facialSpa"])}
                  href="/facialSpa"
                >
                  {t("facialSpa_title")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  active={getActive(["/massageTherapy"])}
                  href="/massageTherapy"
                >
                  {t("massage_therapy_title")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  active={getActive(["/footCare"])}
                  href="/footCare"
                >
                  {t("foot_care_title")}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={t("beauty_title")}
                id="navbarScrollingDropdown"
                active={getActive(["/eyelashExtension", "/makeup", "/nails"])}
              >
                <NavDropdown.Item
                  active={getActive(["/eyelashExtension"])}
                  href={"/eyelashExtension"}
                >
                  {t("eyelash_title")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  active={getActive(["/makeup"])}
                  href="/makeup"
                >
                  {t("makeup_title")}
                </NavDropdown.Item>
                <NavDropdown.Item active={getActive(["/nails"])} href="/nails">
                  {t("nails_title")}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link active={getActive(["/hair"])} href="/hair">
                {t("hair_title")}
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <input
                type="search"
                placeholder={t("search_icon")}
                className="me-2 h-25 pt-50"
                aria-label="Search"
                size="md"
                style={{ padding: 10, margin: 10 }}
              />
              <Button
                style={{ padding: 10, margin: 10 }}
                variant="outline-light"
              >
                {t("search_title")}
              </Button>
            </Form>
            <div className="language-select">
              <LanguageSelect />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/hair" element={<Hair />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/bodySpa" element={<BodySpa />} />
          <Route path="/facialSpa" element={<FacialSpa />} />
          <Route path="/footCare" element={<FootCare />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/massageTherapy" element={<MassageTherapy />} />
          <Route path="/nails" element={<Nails />} />
          <Route path="/eyelashExtension" element={<EyelashExtension />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}
