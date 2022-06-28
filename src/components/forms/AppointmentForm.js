import React from "react";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import "../../App.css";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import FormLabel from "@mui/material/FormLabel";
import { useTranslation } from "react-i18next";

function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

const AppointmentForm = ({ services, servicename }) => {
  const [value, setValue] = React.useState(new Date());
  const { t } = useTranslation();
  return (
    <div style={{ marginLeft: "8px" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label={t("date_time")}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          disablePast={true}
          minTime={new Date(0, 0, 0, 10, 0)}
          maxTime={new Date(0, 0, 0, 19, 30)}
          shouldDisableDate={(new Date(), disableWeekends)}
        />
      </LocalizationProvider>
      <p></p>
      <ServiceName servicename={servicename} />
      <div style={{ marginLeft: "8px" }}>
        {services.map((service, index) => {
          return (
            <div>
              <FormControlLabel
                control={<Checkbox />}
                label={t(service.label)}
              />
            </div>
          );
        })}
      </div>
      <FormLabel>{t("preferred_specialist")}</FormLabel>
      <div style={{ marginLeft: "8px" }}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {services.map((service, index) => {
              if (index < 3) {
                return (
                  <FormControlLabel
                    value={service.technician}
                    control={<Radio />}
                    label={service.technician}
                  />
                );
              }
            })}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
export default AppointmentForm;

function ServiceName({ servicename }) {
  const { t } = useTranslation();
  return (
    <div>
      <FormLabel>{t(servicename)}: </FormLabel>
    </div>
  );
}
