import React, { useState, useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import depositeMe from "../assets/images/deposit_me.png";
import withdrawMe from "../assets/images/withdraw-me.png";

//component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    withdraw_balance: "0.00",
    amount: "0.00",
    vip: "0",
  });

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/me");

        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatEmailOrPhone = (value) => {
    if (!value) return "";

    // Check if the value is an email and contains '@gmail.com'
    if (value.includes("@gmail.com")) {
      const [localPart] = value.split("@");
      if (localPart.length <= 5) return value; // Return the whole email if it's too short to mask middle part

      const firstTwo = localPart.slice(0, 2);
      const middleThree = localPart.slice(2, -2).replace(/./g, "*"); // Replace middle values with stars
      const lastTwo = localPart.slice(-2);
      return `${firstTwo}${middleThree}@gmail.com`;
    }

    // Otherwise, process as a phone number or other email
    const length = value.length;
    if (length <= 5) return value; // Return the whole value if it's too short to mask middle part

    const firstTwo = value.slice(0, 2);
    const middleThree = value.slice(2, -2).replace(/./g, "*"); // Replace middle values with stars
    const lastTwo = value.slice(-2);
    return `${firstTwo}${middleThree}${lastTwo}`;
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
        <div me-page="" className="mine-wrap">
          <div me-page="" className="mine-wrap-content">
            <div me-page="" className="top-info">
              <div me-page="" className="totalInfo-content">
                <div me-page="" className="level-card">
                  <div me-page="" className="level-info">
                    <div me-page="" className="level-invite">
                      <div me-page="" className="account">
                        <div me-page="">
                          {formatEmailOrPhone(
                            data?.user?.email == null
                              ? data?.user?.phone
                              : data?.user?.email
                          )}
                        </div>
                        <div me-page="" className="flex items-center">
                          <div me-page="" className="level-pop">
                            <div me-page="" className="account-level">
                              <div
                                me-page=""
                                className="i-mingcute:vip-2-fill mr-2px text-12px"
                              ></div>
                              TRONMOSE{data?.user?.my_vip}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Level-card ends */}
                <div me-page="" className="user-number">
                  <div me-page="" className="numberInfo">
                    <div me-page="" className="info-item">
                      <div me-page="" className="number">
                        {(
                          parseFloat(data?.withdraw_balance) +
                          parseFloat(data?.amount)
                        ).toFixed(2)}
                      </div>
                      <div me-page="" className="title">
                        {t("total_balance")} (TRX)
                      </div>
                    </div>
                    <div me-page="" className="info-item">
                      <div me-page="" className="number">
                        {parseFloat(data?.amount).toFixed(2)}
                      </div>
                      <div me-page="" className="title">
                        {t("recharge_amount")} (TRX)
                      </div>
                    </div>
                  </div>
                </div>
                {/* user-number ends */}
              </div>
            </div>
            {/* top-info ends */}
            <div me-page="" className="secondary-tools-part">
              <Link me-page="" to="/recharge-method" className="">
                <div me-page="" className="item">
                  <div me-page="" className="flex items-center">
                    <div me-page="" className="icon-box sp">
                      <div
                        me-page=""
                        className="i-material-symbols:account-balance-wallet text-18px c-$text-white"
                      ></div>
                    </div>
                    <div me-page="" className="label">
                      {t("recharge")}
                    </div>
                  </div>
                  <div
                    me-page=""
                    className="icon i-material-symbols:arrow-forward-ios"
                  ></div>
                </div>
              </Link>
              <Link me-page="" to="/withdraw-trx" className="">
                <div me-page="" className="item">
                  <div me-page="" className="flex items-center">
                    <div me-page="" className="icon-box sp">
                      <div
                        me-page=""
                        className="i-uil:money-withdrawal text-18px c-$text-white"
                      ></div>
                    </div>
                    <div me-page="" className="label">
                      {t("withdraw")}
                    </div>
                  </div>
                  <div
                    me-page=""
                    className="icon i-material-symbols:arrow-forward-ios"
                  ></div>
                </div>
              </Link>
              <Link me-page="" to="/account">
                <div me-page="" className="item">
                  <div me-page="" className="flex items-center">
                    <div me-page="" className="icon-box sp">
                      <div
                        me-page=""
                        className="i-material-symbols:account-balance-rounded text-18px c-$text-white"
                      ></div>
                    </div>
                    <div me-page="" className="label">
                      {t("account")}
                    </div>
                  </div>
                  <div
                    me-page=""
                    className="icon i-material-symbols:arrow-forward-ios"
                  ></div>
                </div>
              </Link>
              <Link me-page="" to="/financial">
                <div me-page="" className="item">
                  <div me-page="" className="flex items-center">
                    <div me-page="" className="icon-box sp">
                      <div
                        me-page=""
                        className="i-fa6-solid:money-bill-trend-up text-18px c-$text-white"
                      ></div>
                    </div>
                    <div me-page="" className="label">
                      {t("financial_record")}
                    </div>
                  </div>
                  <div
                    me-page=""
                    className="icon i-material-symbols:arrow-forward-ios"
                  ></div>
                </div>
              </Link>
              <Link me-page="" to="/change-password">
                <div me-page="" className="item">
                  <div me-page="" className="flex items-center">
                    <div me-page="" className="icon-box">
                      <div
                        me-page=""
                        className="i-teenyicons:password-solid text-18px c-$btn-text"
                      ></div>
                    </div>
                    <div me-page="" className="label">
                      {t("change_pass")}
                    </div>
                  </div>
                  <div
                    me-page=""
                    className="icon i-material-symbols:arrow-forward-ios"
                  ></div>
                </div>
              </Link>
            </div>
            {/* secondary tools part ends */}
            <div me-page="" className="colorful logout cursor-pointer">
              <div
                me-page=""
                className="relative z-1 h-full w-full flex items-center justify-center rd-$card-radius bg-$bg-card"
                onClick={handleConfirmLogout}
              >
                <div me-page="" className="icon-box mr-10px">
                  <div
                    me-page=""
                    className="i-majesticons:logout-half-circle text-18px c-$btn-text"
                  ></div>
                </div>
                <div me-page="" className="label">
                  {t("sign_out")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <SupportLink /> */}
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

export default HomePage;
