import React, { useEffect } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";
const AlertMsg = ({ setAlertOpen, alertOpen }) => {
  useEffect(() => {
    if (alertOpen) {
      setTimeout(() => {
        setAlertOpen(false);
      }, 2000);
    }
  }, []);

  return (
    <Alert status="success">
      <AlertIcon />
      Data uploaded to the server. Fire on!
    </Alert>
  );
};

export default AlertMsg;
