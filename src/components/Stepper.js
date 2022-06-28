import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppointmentForm from "./forms/AppointmentForm";
import PaymentForm from "./forms/PaymentForm";
import PersonalForm from "./forms/PersonalForm";
import { useTranslation } from "react-i18next";

const params = {
  name: {
    required: true,
    error: false,
    msg: "name is required",
    value: "",
  },
  email: {
    required: true,
    error: false,
    msg: "email is required",
    value: "",
  },
  phone: {
    required: false,
    error: false,
    msg: "",
    value: "",
  },
  cardName: {
    required: true,
    error: false,
    msg: "card holder name is required",
    value: "",
  },
  cardNumber: {
    required: true,
    error: false,
    msg: "card number is required",
    value: "",
  },
  address: {
    required: true,
    error: false,
    msg: "billing address is required",
    value: "",
  },
  date: {
    required: true,
    error: false,
    msg: "expiry date is required",
    value: "",
  },
  cvv: {
    required: true,
    error: false,
    msg: "cvv is required",
    value: "",
  },
};

const names = [
  ["name", "email"],
  [],
  ["cardName", "cardNumber", "address", "date", "cvv"],
  [],
];

export default function HorizontalLinearStepper({ services, servicename }) {
  const { t } = useTranslation();
  const steps = [
    t("personal_info"),
    t("appointment"),
    t("payment"),
    t("confirmation"),
  ];
  const [data, setData] = React.useState(params);
  const [isPass, setIsPass] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleChange = (e) => {
    const { value, required, name } = e.target;
    setData({
      ...data,
      [name]: {
        ...data[name],
        error: required && !value ? true : false,
        value,
      },
    });
  };

  React.useEffect(() => {
    let pass = true;
    names[activeStep].forEach((el) => {
      if (data[el].required && !data[el].value) {
        pass = false;
      }
    });
    setIsPass(pass);
  }, [data, activeStep]);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const contents = [
    <PersonalForm handleChange={handleChange} data={data} />,
    <AppointmentForm services={services} servicename={servicename} />,
    <PaymentForm handleChange={handleChange} data={data} />,
    <div style={{ marginLeft: "8px" }}>{t("confirmation_letter")}</div>,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">{t("optional")}</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>{t("finish_steps")}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>{t("book_another")}</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <>{contents[activeStep]}</>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              {t("back")}
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                {t("skip")}
              </Button>
            )}
            <Button disabled={!isPass} onClick={handleNext}>
              {activeStep === steps.length - 1 ? t("finish") : t("next")}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
