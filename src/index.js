import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/js/bootstrap.js";
import './i18nextConf.js';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading..</h3>
    </div>
  );
  
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
