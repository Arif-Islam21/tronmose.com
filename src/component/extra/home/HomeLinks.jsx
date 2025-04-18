import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BiTransferAlt } from "react-icons/bi";
import "../../../assets/css/style2.css";
import Loader from "../../../component/extra/loader";
import { useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoCashOutline } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

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
    <div home-content="">
      {/* className="main-btn-part" */}
      {isLoader ? <Loader /> : null}

      {/* OTHER SERVICES */}
      <div className="bg-$bg-card px-4 py-3 my-3 rounded-2 w-100">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-5 g-3">
            <Link to="/recharge-method" className="col">
              <div className="p-4 bg-deep-card d-flex flex-column justify-content-center align-items-center gap-2 rounded-2 home-cards">
                <RiMoneyDollarCircleLine size={32} />
                <h2 className="fs-5">{t("recharge")}</h2>
              </div>
            </Link>
            <Link to="/withdraw-trx" className="col">
              <div className="p-4 bg-deep-card d-flex flex-column justify-content-center align-items-center gap-2 rounded-2 home-cards">
                <IoCashOutline size={32} />
                <h2 className="fs-5">{t("withdraw")}</h2>
              </div>
            </Link>
            <Link to="/transfer-amount" className="col">
              <div className="p-2 bg-deep-card d-flex flex-column justify-content-center align-items-center gap-2 rounded-2 home-cards">
                <BiTransferAlt size={32} />
                <h2 className="small text-center">
                  {t("Transfer to Recharge Account")}
                </h2>
              </div>
            </Link>
            <div home-content="" className="col" onClick={downloadApp}>
              <div
                home-content=""
                className="p-4 bg-deep-card d-flex flex-column justify-content-center align-items-center gap-2 rounded-2 home-cards"
              >
                <FaDownload size={28} color="#fff" />
                <div home-content="" className="fs-5">
                  {t("app")}
                </div>
              </div>
            </div>
            <Link to="/company-profile" className="col">
              <div className="p-4 bg-deep-card d-flex flex-column justify-content-center align-items-center gap-2 rounded-2 home-cards">
                <FaRegBuilding size={28} />
                <h2 className="">{t("company_profile")}</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* PREVIOUS */}
      {/* <Link to="/recharge-method" home-content="" className="btn recharge">
        <div home-content="" className="icon">
          <RiMoneyDollarCircleLine size={28} color="#fff" />
        </div>
        <div home-content="" className="label">
          {t("recharge")}
        </div>
      </Link> */}

      {/* <Link to="/withdraw-trx" home-content="" className="btn withdraw">
        <div home-content="" className="icon">
          <IoCashOutline size={28} color="#fff" />
        </div>
        <div home-content="" className="label">
          {t("withdraw")}
        </div>
      </Link> */}

      {/* Correct onClick event handler */}
      {/* <div home-content="" className="btn download" onClick={downloadApp}>
        <div home-content="" className="icon">
          <FaDownload size={28} color="#fff" />
        </div>
        <div home-content="" className="label">
          {t("app")}
        </div>
      </div> */}

      {/* <Link to="/company-profile" home-content="" className="btn company">
        <div home-content="" className="icon">
         
          <FaRegBuilding size={28} color="#fff" />
        </div>
        <div home-content="" className="label">
          {t("company_profile")}
        </div>
      </Link> */}
    </div>
  );
};

export default HomeLinks;
