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

import company_profile from "../assets/images/company-profile.jpeg";

//component
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";
import { useState } from "react";
// import SupportLink from "./extra/supportLink";
const companyProfile = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };
  const { t } = useTranslation();
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div id="app" className="a-t-26 no-4">
      <div className="box-border min-h-full w-full pt-45px">
        <SingleHeader></SingleHeader>

        <div com-profile="" className="company-detail-wrap p-$mg">
          <div
            com-profile=""
            className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
          >
            <div com-profile="" className=":uno: title mb-20px text-lg">
              {t("company_profile")}
            </div>
            <div com-profile="" id="comProContent" className="content">
              <p>
                <img src={company_profile} /><br/>
              </p>
              <p>{t("TRONMOSE_cooperative_group_co")}</p>
              <p>{t("as_one_of_the_world")}</p>
              <p>{t("fontera_wants_argiculture")}</p>
              <p>{t("fontera_farms_according")}</p>
              <p>{t("TRONMOSE_belives_food")}</p>
              <p>{t("TRONMOSE_must_work_together")}</p>
            </div>
          </div>
        </div>
      </div>

      <CustomLoader />

      {/* support section */}
      {/* <SupportLink /> */}
      {/* support section */}
      <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      ></TelegramPopUp>
    </div>
  );
};

export default companyProfile;
