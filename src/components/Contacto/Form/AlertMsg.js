import React, { useEffect } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";
const AlertMsg = ({ setAlertOpen, alertOpen }) => {
  useEffect(() => {
    if (alertOpen) {
      setTimeout(() => {
        setAlertOpen(false);
      }, 5000);
    }
  }, [setAlertOpen, alertOpen]);

  return (
    <Alert status="success">
      <AlertIcon />
      Mensaje Enviado! Responderemos a la brevedad.
    </Alert>
  );
};

export default AlertMsg;
