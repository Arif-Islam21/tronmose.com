import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import "../assets/css/style3.css";
import "../assets/css/style4.css";
import "../assets/css/style5.css";
import "../assets/css/style6.css";
import "../assets/css/style7.css";
import "../assets/css/style8.css";
import "../assets/css/style9.css";
import "../assets/css/style10.css";
import "../assets/css/style11.css";

import crown from "../assets/images/crown.png";
import { useEffect, useState } from "react";
import axios from "axios";

//component
import Navbar from "./partial/navbar";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useNavigate } from "react-router-dom";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";

const Vip = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(",", ""); // Remove the comma from the formatted string
  };
  const addDate = (dateString) => {
    const date = new Date(dateString);
    // Add one year to the date
    date.setFullYear(date.getFullYear() + 1);
    return date
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(",", "");
  };

  useEffect(() => {
    // Define an async function inside the useEffect hook
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint using axios
        const response = await axios.get("api/home");
        // Log the response to the console
        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function immediately
    fetchData();
  }, []);

  const clickRecharge = () => {
    navigate("/recharge-method");
  };
  // Language popup js
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const toggleLangPopup = () => {
    setIsLanguageVisible(!isLanguageVisible);
  };
  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageVisible(false);
  };
  // telegram popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div id="app" className="a-t-26 no-4">
      <div
        home-nav=""
        className="layout-tab-bar box-border min-h-full w-full px-$mg pb-60px"
      >
        <Header
          selectedLanguage={selectedLanguage}
          toggleLangPopup={toggleLangPopup}
        ></Header>
        <div vip-page="" className="vip-info-wrap">
          <div vip-page="" className="vip-log">
            {t("upgrade_log")}
          </div>
          {/* vip log ends */}
          <div vip-page="" className="vip-wrap">
            <div className="vip-top-bar container-card relative rd-$card-radius p-$mg c-$btn-text box-shadow">
              <div className="flex items-center">
                <div className="text-sm">{t("level")}</div>
                <div className="ml-auto font-bold text-green">
                  {t("vip")} {data?.user?.my_vip}
                </div>
              </div>
              <div className="mt-10px flex items-center">
                <div className="text-sm">{t("recharge_amountt")}</div>
                <div className="ml-auto font-bold text-$primary">
                  {" "}
                  {data?.user?.balance} TRX
                </div>
              </div>
              <a className="base-main-btn flex items-center justify-center mt-10px! h-40px!">
                <div onClick={clickRecharge} className="base-main-btn-content">
                  {t("recharge")}
                </div>
              </a>
            </div>

            <div className="container-card relative rd-$card-radius p-$mg c-$btn-text">
              {data?.vips?.map((item, index) => {
                console.log(item);
                return (
                  <div
                    key={index}
                    className="bg-$bg-card px-4 py-3 my-3 rounded-2 w-100"
                  >
                    <div className="container">
                      <div className="row row-cols-1 g-3">
                        <div className="col">
                          <div className="bg-deep-card rounded-3 p-3 border-top-5 border-warning">
                            <div className="px-4 py-2">
                              <h2 className="fs-3 px-3 border-start-3 ">
                                WM package {item?.id}
                              </h2>
                            </div>
                            <div className="flex flex-column justify-content-center align-items-center gap-2 rounded-2 bg-$bg-card py-2 px-3">
                              <div className="flex justify-between items-center w-100">
                                <h2 className="fs-6">{t("Daily Earning")}</h2>
                                <h2 className="fw-bold">
                                  {item?.income_from} {t("times")}
                                </h2>
                              </div>
                              <div className="flex justify-between items-center w-100">
                                <h2 className="fs-6">
                                  {t("Investment period：")}
                                </h2>
                                <h2 className="fw-bold">2 {t("Days")}</h2>
                              </div>
                              <div className="flex justify-between items-center w-100">
                                <h2 className="fs-6">{t("Valid Time")}</h2>
                                <h2 className="fw-bold">
                                  {item?.income_to} Days
                                </h2>
                              </div>
                            </div>
                            <div>
                              <button
                                onClick={clickRecharge}
                                className="btn btn-light mt-2 mx-auto w-100"
                              >
                                {item?.requred_to?.slice(0, 2)} USDT Unlock Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* {data?.vips?.map((item, index) => {
                return (
                  <div
                    onClick={clickRecharge}
                    className="vip-info-item"
                    key={index}
                  >
                    <div className="info-item">
                      <span className="text-16px font-bold">
                        {t("vip")} {item.id}
                      </span>
                    </div>
                    <div className="bg-$bg-input bg-deep-card p-10px rd-$radius">
                      <div className="info-item">
                        <span className="text-sm">{t("recharge_amountt")}</span>
                        <span className="text-xs">
                          {Math.floor(item.requred_from)} ~{" "}
                          {Math.floor(item.requred_to)} TRX
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="text-sm">{t("Mining_Income")}</span>
                        <span className="text-sm text-green">
                          {item.income_from}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>

        <CustomLoader />
        <Navbar />
      </div>

      <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>
      <LanguagePopUp
        isLanguageVisible={isLanguageVisible}
        toggleLangPopup={toggleLangPopup}
        changeLanguage={changeLanguage}
      />
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default Vip;
