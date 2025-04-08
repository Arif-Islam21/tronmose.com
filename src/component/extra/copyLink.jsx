import React, { useState } from "react";

// css import
import "../../assets/css/style.css";

const InviteLink = ({ code, copyText, handleCopyClick }) => {
  const inviteLink = code;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        setAlertMessage("Copied Successfully");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 2000); // Hide alert after 2 seconds
      })
      .catch((err) => {
        setAlertMessage("Failed to copy");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 2000);
        console.error("Failed to copy: ", err);
      });
    handleCopyClick();
  };

  return (
    <div team-page="" className="mt-2px flex items-center justify-between">
      <span team-page="" className="link text-15px" id="copyRef">
        {inviteLink}
      </span>
      <div team-page="" className="btn ml-10px" onClick={copyToClipboard}>
        {copyText}
      </div>
    </div>
  );
};

export default InviteLink;
