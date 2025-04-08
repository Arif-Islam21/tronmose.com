//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
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

//component
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";
import { useState } from "react";
const financial = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/me");
  };
  const { t } = useTranslation();
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div>
      <div id="app" className="a-t-26 no-4">
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader></SingleHeader>

          <div notice-page="" className="notice-wrap m-$mg">
            <div className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text">
              <div fin-record="" className="base-list a-t-26">
                <div className="no_data_wrapp text-center">
                  <span fin-record="" className="base-list-nodata">
                    {t("no_data")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CustomLoader />
        <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>
        <TelegramPopUp
          isTelegramVisible={isTelegramVisible}
          toggleTelegramPopUp={toggleTelegramPopUp}
        ></TelegramPopUp>
        {/* support section */}
        {/* <SupportLink /> */}
        {/* support section */}
      </div>
    </div>
  );
};

export default financial;
