import React from "react";
import { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "../Slider.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";

const ReviewForm = (props) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(4);
  return (
    <div>
      <Card
        sx={{
          maxHeight: 496,
          minHeight: 496,
          margin: "20px",
          boxShadow: "0 8px 20px -12px rgba(0,0,0,0.3)",
        }}
      >
        <CardHeader title={t("tell_us")} />
        <Divider />
        <CardContent>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <div>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={12}
              maxRows={12}
              placeholder={t("leave_comment1")}
              style={{ width: "85%" }}
            />
          </div>
          <div>
            <Button
              variant="contained"
              style={{ width: "85%", backgroundColor: "#212121" }}
            >
              {t("leave_comment2")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default ReviewForm;
