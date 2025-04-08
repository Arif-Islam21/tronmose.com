//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

//all css/images
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

//component
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";

import { useEffect, useState } from "react";
import axios from "axios";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";
const account = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    balance: "0.00",
    withdraw_balance: "0.00",
  });

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/auth/user");

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const { t } = useTranslation();
  // Telegram Popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div id="app" className="a-t-26 no-4">
      <div className="box-border min-h-full w-full pt-45px">
        <SingleHeader></SingleHeader>
        <div balance="" className=":uno: balance-wrap p-$mg">
          <div
            balance=""
            className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
          >
            <div
              balance=""
              className=":uno: accountInfo-content relative z-1"
              style={{ background: "transparent" }}
            >
              <div
                balance=""
                className=":uno: card mb-20px"
                style={{ background: "transparent", border: "0px" }}
              >
                <div balance="" className="title">
                  {t("basic_account")}
                </div>
                <div
                  balance=""
                  className=":uno: text-18px"
                  style={{ color: "#fff" }}
                >
                  {data.balance} <strong balance="">TRX</strong>
                </div>
              </div>
              <div
                balance=""
                className="card"
                style={{ background: "transparent", border: "0px" }}
              >
                <div balance="" className="title">
                  {t("withdrawal_account")}
                </div>
                <div
                  balance=""
                  className=":uno: value text-18px"
                  style={{ color: "#fff" }}
                >
                  {data.withdraw_balance} <strong balance="">TRX</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomLoader />

      {/* support section */}
      <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
      {/* <SupportLink /> */}
      {/* support section */}
    </div>
  );
};

export default account;
