import { useEffect, useState } from "react";

const UpgradeLevelAlert = ({ isUpgradeAlert }) => {
  if (isUpgradeAlert === false) {
    return null; // Don't render the alert if it's not visible
  }
  return (
    <div>
      <div
        id="upgradeLevel"
        className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
        style={{ zIndex: "2007", transition: ".3s all" }}
      >
        <div className="van-toast__text">Please upgrade your level</div>
      </div>
    </div>
  );
};

export default UpgradeLevelAlert;
