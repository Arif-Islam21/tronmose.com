import { Link, useNavigate } from "react-router-dom";
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

// import SupportLink from "./extra/supportLink";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import SingleHeader from "./extra/SingleHeader";
import { useTranslation } from "react-i18next";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";

import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";

const Basic = () => {
  const navigate = useNavigate();
  const [withdrawals, setWithdrawals] = useState([]); // State to hold withdrawal data
  const [isLoading, setIsLoading] = useState(true); // State to control loader visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/withdraws");
        setWithdrawals(response.data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const handleBackClick = () => {
    navigate("/me"); // Navigate to the previous page
  };
  const formatDate = (dateString) => {
    return moment(dateString).format("MMMM DD, YYYY, HH:mm:ss");
  };
  const { t } = useTranslation();
  // hide show loading and content
  const [showLoader, setShowLoader] = useState(true);
  const [showNoData, setShowNoData] = useState(false);
  const [showData, setShowData] = useState(false);
  useEffect(() => {
    // Set a timeout to hide the loader and show the "No data" message after 2 second
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide the loader
      setShowNoData(true); // Show the "No data" div
      setShowData(true);
    }, 2000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  // Telegram Popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div>
      <div id="app" className="a-t-26 no-4">
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader></SingleHeader>
          <div className="financial-wrap26 p-$mg">
            <div className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text">
              <div className="tabs2 ">
                <Link
                  to="/financial"
                  className=":uno: tab-item tab2  non-active2 "
                >
                  {t("basic_account")}
                </Link>
                <Link to="/basic" className=":uno: tab-item tab2 active2">
                  {t("withdrawal_account")}
                </Link>
              </div>
              {/* tabs2 ends */}
              <div className="mt-12px flex" style={{ marginBottom: "10px" }}>
                <div className="i-solar:filter-bold-duotone ml-auto cursor-pointer"></div>
              </div>
              {/* Filter ends */}
              <div className="tab-content2">
                <div id="wiAcc">
                  {isLoading ? (
                    <CustomLoader /> // Show loader while data is being fetched
                  ) : withdrawals.length > 0 ? (
                    withdrawals.map((withdrawal, index) => (
                      <div
                        key={index}
                        className="mb-10px flex cursor-pointer items-center py-10px!"
                        style={{
                          background: "#48685f",
                          padding: "0px 10px",
                          borderRadius: "10px",
                        }}
                      >
                        <div>
                          <div>{t("withdraw")}</div>
                          <div className="text-xs text-[var(--text-gray6)]">
                            {formatDate(withdrawal.created_at)}
                          </div>
                        </div>
                        <div className="ml-auto text-green">
                          {withdrawal.amount} {withdrawal.type}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div fin-record="" className="base-list a-t-26">
                      <div
                        id="comp_nodata2"
                        fin-record=""
                        className="base-list-nodata"
                      >
                        {t("no_data")}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* tabs content ends */}
            </div>
          </div>
        </div>

        {/* support section */}
        <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>
        <TelegramPopUp
          isTelegramVisible={isTelegramVisible}
          toggleTelegramPopUp={toggleTelegramPopUp}
        />
        {/* <SupportLink /> */}
        {/* support section */}
      </div>
    </div>
  );
};

export default Basic;
