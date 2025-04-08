import React, { useState } from "react";

// css import
import "../../assets/css/style.css";

const InviteCode = ({ code, copyText, handleCopyClick }) => {
  const inviteCode = code;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inviteCode)
      .then(() => {
        setAlertMessage("Copied Successfully");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 100000); // Hide alert after 2 seconds
      })
      .catch((err) => {
        setAlertMessage("Failed to copy");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 20000);
        console.error("Failed to copy: ", err);
      });
    handleCopyClick();
  };

  return (
    <div team-page="" className="flex items-center justify-between">
      <span team-page="" className="font-anton text-24px font-bold">
        {inviteCode}
      </span>
      <div team-page="" className="btn ml-10px" onClick={copyToClipboard}>
        {copyText}
      </div>
    </div>
  );
};

export default InviteCode;
