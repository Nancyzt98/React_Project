import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Slider from "./Slider";
import "./Slider.css";
import ReviewForm from "./forms/ReviewForm";
import { useTranslation } from "react-i18next";

const Comments = () => {
  const { t } = useTranslation();
  const users = [
    {
      name: "Daryl Dixon",
      time: "time1",
      avatar: "D",
      image: "../../images/daryl.jpeg",
      comment:"comment1",
    },
    {
      name: "Rick Grimes",
      time: "time2",
      avatar: "R",
      image: "../../images/Rick.webp",
      comment:"comment2",
    },
    {
      name: "Carol Peletier",
      time: "time3",
      avatar: "C",
      image: "../../images/Carol.jpeg",
      comment:"comment3",
    },
    {
      name: "Maggie Green",
      time: "time4",
      avatar: "M",
      image: "../../images/Maggie.webp",
      comment:"comment4",
    },
    {
      name: "Michonne",
      time: "time5",
      avatar: "M",
      image: "../../images/Michonne.jpeg",
      comment:"comment5",
    },
    {
      name: "Carl Grimes",
      time: "time6",
      avatar: "C",
      image: "../../images/Carl.webp",
      comment:"comment6",
    },
  ];

  return (
    <div>
      <h1>{t("reviews")}</h1>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow style={{ margin: "10px" }}>
          <MDBCol style={{ width: "75%" }}>
            <Slider slides={users} />
          </MDBCol>
          <MDBCol style={{ width: "25%" }}>
            <ReviewForm />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Comments;
