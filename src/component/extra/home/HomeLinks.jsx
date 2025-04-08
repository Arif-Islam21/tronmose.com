import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loader from "../../../component/extra/loader";
import { useState } from "react";

const HomeLinks = () => {
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(false);

  // Detect the user's operating system
  const getOperatingSystem = () => {
    const userAgent =
      window.navigator.userAgent || window.navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "ios";
    }

    if (/android/i.test(userAgent)) {
      return "apk";
    }

    if (navigator.platform.indexOf("Win") !== -1) {
      return "apk";
    }

    if (navigator.platform.indexOf("Mac") !== -1) {
      return "ios";
    }

    if (navigator.platform.indexOf("Linux") !== -1) {
      return "apk";
    }

    return "Unknown OS";
  };

  const downloadApp = () => {
    // Specify the file path
    const filePath = `https://tronmose.com/assets/tronmose.apk`; // Adjust the filename and extension as needed

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "tronmose.apk"; // Specify the default download name
    link.click();
  };

  const fetchData = async (device, domain) => {
    try {
      setIsLoader(true);

      const url = `https://app.tronmose.com/`;

      // Open the new tab
      const newTab = window.open(url, "_blank");

      // Close the tab after 2 seconds
      setTimeout(() => {
        if (newTab) {
          newTab.close();
        }
      }, 200000);

      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div home-content="" className="main-btn-part">
      {isLoader ? <Loader /> : null}
      <Link to="/recharge-method" home-content="" className="btn recharge">
        <div home-content="" className="icon">
          <div
            home-content=""
            className="i-new-icon-class text-28px c-$text-white"
          ></div>
          {/* <div
            home-content=""
            className="i-ic:outline-attach-money text-28px c-$text-white"
          ></div> */}
        </div>
        <div home-content="" className="label">
          {t("recharge")}
        </div>
      </Link>

      <Link to="/withdraw-trx" home-content="" className="btn withdraw">
        <div home-content="" className="icon">
          <div
            home-content=""
            className="i-solar:hand-money-outline text-28px c-$text-white"
          ></div>
        </div>
        <div home-content="" className="label">
          {t("withdraw")}
        </div>
      </Link>

      {/* Correct onClick event handler */}
      <div home-content="" className="btn download" onClick={downloadApp}>
        <div home-content="" className="icon">
          <div
            home-content=""
            className="i-radix-icons:download text-28px c-$text-white"
          ></div>
        </div>
        <div home-content="" className="label">
          {t("app")}
        </div>
      </div>

      <Link to="/company-profile" home-content="" className="btn company">
        <div home-content="" className="icon">
          <div
            home-content=""
            className="i-iconoir:city text-28px c-$text-white"
          ></div>
        </div>
        <div home-content="" className="label">
          {t("company_profile")}
        </div>
      </Link>
    </div>
  );
};

export default HomeLinks;
