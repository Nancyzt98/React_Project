import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import classNames from "classnames";
import { NavDropdown, Nav } from "react-bootstrap";
import { useEffect } from "react";
import cookies from "js-cookie";

const languages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "fr",
    name: "Français",
  },
];

const LanguageSelect = () => {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const [active, setActive] = React.useState("English");

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);

  return (
    <div className="container">
      <div className="language-select">
        <div className="d-flex justify-content-end align-items-center language-select-root">
          <div className="dropdown">
            <Nav>
              <NavDropdown
                title={<span className="text-light my-auto">{active}</span>}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item
                  className={classNames("dropdown-item", {
                    disabled: currentLanguageCode === "en",
                  })}
                  onClick={() => {
                    i18next.changeLanguage("en");
                    setActive("English");
                  }}
                >
                  English
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={classNames("dropdown-item", {
                    disabled: currentLanguageCode === "fr",
                  })}
                  onClick={() => {
                    i18next.changeLanguage("fr");
                    setActive("Français");
                  }}
                >
                  Français
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LanguageSelect;
