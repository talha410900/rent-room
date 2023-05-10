import React from "react";

const ToastDemo = (toastManager, error_message, type) => {
  return toastManager.add(error_message, {
    appearance: type,
    autoDismiss: true,
    pauseOnHover: false
  });
};

export default ToastDemo;
