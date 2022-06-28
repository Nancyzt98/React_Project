import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import ReactTooltip from "react-tooltip";
import "./Tooltip.css";
import { FaQuestionCircle } from "react-icons/fa";
import { t } from "i18next";

const PaymentForm = ({ handleChange, data }) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required={data.cardName.required}
            size="small"
            id="outlined-required"
            label={t("card_holder_name")}
            placeholder={t("enter_name")}
            style={{ width: 350 }}
            error={data.cardName.error}
            helperText={data.cardName.error ? data.cardName.msg : ""}
            name="cardName"
            value={data.cardName.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            required={data.cardNumber.required}
            size="small"
            id="outlined-required"
            label={t("card_number")}
            placeholder="xxxx xxxx xxxx xxxx"
            style={{ width: 350 }}
            error={data.cardNumber.error}
            helperText={data.cardNumber.error ? data.cardNumber.msg : ""}
            name="cardNumber"
            value={data.cardNumber.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            required={data.address.required}
            size="small"
            id="outlined-required"
            label={t("billing_address")}
            placeholder={t("billing_info")}
            style={{ width: 350 }}
            error={data.address.error}
            helperText={data.address.error ? data.address.msg : ""}
            name="address"
            value={data.address.value}
            onChange={handleChange}
          />
        </div>
        <MDBContainer>
          <MDBRow style={{ marginLeft: "-24px" }}>
            <MDBCol>
              <TextField
                required={data.date.required}
                size="small"
                id="outlined-required"
                label={t("expiry_date")}
                placeholder="MM/YY"
                style={{ width: 167 }}
                error={data.date.error}
                helperText={data.date.error ? data.date.msg : ""}
                name="date"
                value={data.date.value}
                onChange={handleChange}
              />
            </MDBCol>
            <MDBCol>
              <TextField
                required={data.cvv.required}
                size="small"
                id="outlined-required"
                label="CVV"
                placeholder="CVV"
                style={{ width: 167 }}
                error={data.cvv.error}
                helperText={data.cvv.error ? data.cvv.msg : ""}
                name="cvv"
                value={data.cvv.value}
                onChange={handleChange}
              />
            </MDBCol>
            <MDBCol>
              <div
                className="customTooltip"
                style={{
                  paddingTop: "15px",
                  marginLeft: "-20px",
                }}
              >
                <p data-tip={t("tooltip")}>
                  <FaQuestionCircle />
                </p>
                <ReactTooltip />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div style={{ marginLeft: 8 }}>
          <FormControlLabel
            control={<Checkbox />}
            label={t("faster_checkout")}
          />
        </div>
      </Box>
    </div>
  );
};
export default PaymentForm;
