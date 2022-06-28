import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useTranslation } from "react-i18next";

const PersonalForm = ({ handleChange, data }) => {
  const { t } = useTranslation();
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
            required={data.name.required}
            size="small"
            id="outlined-required"
            label={t("name")}
            placeholder={t("enter_name")}
            style={{ width: 350 }}
            onChange={handleChange}
            error={data.name.error}
            helperText={data.name.error ? data.name.msg : ""}
            name="name"
            value={data.name.value}
          />
        </div>
        <div>
          <TextField
            required={data.email.required}
            size="small"
            id="outlined-required"
            label={t("email")}
            placeholder={t("enter_email")}
            style={{ width: 350 }}
            onChange={handleChange}
            error={data.email.error}
            helperText={data.email.error ? data.email.msg : ""}
            name="email"
            value={data.email.value}
          />
        </div>
        <div>
          <TextField
            required={data.phone.required}
            size="small"
            id="outlined-required"
            label={t("phone_number")}
            placeholder={t("enter_phone_num")}
            style={{ width: 350 }}
            onChange={handleChange}
            error={data.phone.error}
            helperText={data.phone.error ? data.phone.msg : ""}
            name="phone"
            value={data.phone.value}
          />
        </div>
        <div style={{ marginLeft: 8 }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label={t("new_account")}
          />
        </div>
        <div style={{ marginLeft: 8 }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label={t("subscribe")}
          />
        </div>
      </Box>
    </div>
  );
};
export default PersonalForm;
