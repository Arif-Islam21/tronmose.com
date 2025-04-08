import { Link } from "react-router-dom";
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
import taskcrypto_mining from "../assets/images/taskcrypto_mining.webp";
import fan from "../assets/images/fan-DPi5Y_AJ.gif";
import datarecord from "../assets/images/data.png";
// component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import CountdownTimer from "./extra/CountdownTimer";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";
import dollar from "../assets/images/dollar.png";

const Task = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [targetDate, setTargetDate] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/tradings");
        setData(response.data);
        // alert(response.data.date)
        setTargetDate(new Date(response.data.date));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
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
        <div task-page="" className="mission-wrap mission-wrap21">
          <div className="top-tag mb-10px py-10px!">
            <div>
              <div className="relative h-160px w-full flex items-center justify-center mt-20px">
                <img src={fan} className="w-50-p h-auto" />
              </div>
              <div className="container-card relative rd-$card-radius p-$mg c-$btn-text bg-card2 mt--10px">
                <div className="bg-deep-card p-10px rd-$radius mt-10px">
                  <div className="flex items-center justify-between">
                    <div className="text-14px text-$btn-text opacity-70 mr-4px">
                    {t('level')}
                    </div>
                    <div className="flex cursor-pointer items-center rounded-full bg-$primary px-8px py-2px text-10px text-$btn-text text-$primary-btn-text!">
                      {t('vip')} {data?.authbal?.my_vip}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-14px text-$btn-text opacity-70 mr-4px">
                      {t("all_tasks_for_today")}
                    </div>
                    <div>
                      {data?.product && data.withdraw_status > 0 ? 1 : 0}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-14px text-$btn-text opacity-70 mr-4px">
                      {t("todays_remaining_tasks")}
                    </div>
                    <div>
                      {data?.product && data.withdraw_status ? "1" : "0"}
                    </div>
                  </div>
                </div>
                <a className="base-main-btn flex items-center justify-center mt-10px!">
                  <div
                    onClick={clickRecharge}
                    className="base-main-btn-content"
                  >
                    {t("improve_power")}
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            task-page=""
            className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text pt8px!"
          >
            <div className="tabs2 ">
              <Link className=":uno: tab-item tab2  non-active2" to="/task">
                {t("can_collect")}
              </Link>
              <Link
                className=":uno: tab-item tab2 active2"
                to="/task-completed"
              >
                {t("received")}
              </Link>
            </div>
            {/* tabs endss */}
            <div class="tab-content2">
              <div task-page="" className="task-list">
                <div id="comp_item">
                  {data?.tradings?.length > 0 ? (
                    data.tradings.map((trading) => (
                      <div className="can_collect_recived" key={trading.id}>
                        <div className="price_collect_area">
                          <div className="icon_collect_btn">
                            <img src={dollar} alt="dollar" />
                          </div>
                          <div className="price_area">
                            <strong>{trading.amount} TRX</strong>
                            <span>
                              {new Date(trading.created_at).toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="btn_collect_area">
                          <button type="button" className="btn_collect">
                            {t("colleted")}
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div fin-record="" className="base-list a-t-26">
                      <div
                        id="comp_nodata"
                        fin-record=""
                        className="no-more text-center"
                      >
                        <img
                          className="data_record_img"
                          src={datarecord}
                          alt="datarecord"
                        />{" "}
                        {t("no_data")}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* 
      <div task-page="" className="mission-wrap-content">
         <div
         id="timer"
         task-page=""
         className="loading-time-part text-center"
         style={{ display: "block" }}
         >
         <div task-page="" className="loading-time">
            <div task-page="" className="i-gala:clock"></div>
            <span task-page="">{t("task_reset")}</span>{" "}
            <span id="timeCount">
               <CountdownTimer targetDate={targetDate} />
            </span>
         </div>
      </div>
      <div task-page="" className="top-info">
         <div task-page="" className="data-content">
            <div task-page="" className="col">
               <div task-page="" className="title">
                  {t("all_tasks_for_today")}
               </div>
               <div task-page="" className="value">
                  {data?.product && data.withdraw_status > 0 ? 1 : 0}
               </div>
            </div>
            <div task-page="" className="col">
               <div task-page="" className="title">
                  {t("todays_remaining_tasks")}
               </div>
               <div task-page="" className="value">
                  {data?.product && data.withdraw_status ? "1" : "0"}
               </div>
            </div>
         </div>
      </div>
   </div>
   */}
        </div>
        {/* 
<SupportLink />
*/}
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
export default Task;
