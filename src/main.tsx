import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import VisitorRequestEmail from "./VisitorInvitation.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App
      validationCode={"abnormal-carlo"}
      firstName={"Carlo"}
      email={"carlo@gmail.com"}
    /> */}
    <VisitorRequestEmail
      firstName={"Carlo"}
      email={"carlo@gmail.com"}
    ></VisitorRequestEmail>
  </React.StrictMode>
);
