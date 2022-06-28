import React, { Component } from "react";
import Comments from "../components/Comments";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../components/LanguageSelect";




// export default class Home extends Component {
export default function Home() {
  // render() {
    // const { t } = this.props;
    const { t } = useTranslation();
    return (
      <div>
        <div
          style={{
            width: "60%",
            height: "60%",
            marginLeft: "20%",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            className="video_wrapper"
            style={{ position: "relative", paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/PE4ujboS8dQ"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            ></iframe>
          </div>
        </div>
        <div
          style={{
            width: "60%",
            height: "60%",
            marginLeft: "20%",
            marginBottom: "20px",
          }}
        >
          <h1>{t("about_us")}</h1>
          <p>{t("about_us_description")}</p>
        </div>

        <Comments />
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179954.25259992015!2d-75.93658179020291!3d45.19144429999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfa41d474193b%3A0x45a4f3975a3ca93a!2sSpotlight%20Hair%20%26%20Spa!5e0!3m2!1sen!2sca!4v1647546899648!5m2!1sen!2sca"
            frameBorder={0}
            allow="autoplay; encrypted-media"
            width="100%"
            height="300"
            allowFullScreen
            title="video"
          />
        </div>
      </div>
    );
}

