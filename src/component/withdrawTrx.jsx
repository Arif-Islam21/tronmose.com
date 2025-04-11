import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

import logo from "../assets/images/logo/logoTRONRICH.png";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";

const withdraw = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [quota, setQuota] = useState("");
  const [actuallyReceived, setActuallyReceived] = useState(0);
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/withdraw");
        setData(response.data);
        setAddress(response.data.user.crypto_address || "");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleQuotaChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    const withdrawVat = 0;
    const total = value - withdrawVat;

    if (total > 0) {
      setActuallyReceived(total);
    } else {
      setActuallyReceived(0);
    }

    setQuota(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsLoading(true);
    try {
      // Prepare the data to send
      const formData = {
        quota,
        address,
        password,
        type: "TRX",
        // Add any other necessary data here
      };

      // Send POST request
      const response = await axios.post("api/withdraw", formData);

      // Show the response message
      setAlertMessage(response.data.message || "Something happened");
      setAlertVisible(true);

      // After showing the message, check if status is true
      setTimeout(() => {
        setAlertVisible(false); // Hide the alert after 2 seconds

        if (response.data.status) {
          // If status is true, navigate to the desired URL
          navigate("/me"); // Example: navigate to a success page
        }
      }, 2000); // Wait 2 seconds before hiding the alert and checking status
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error (show error message, etc.)
      setAlertMessage("An error occurred. Please try again.");
      setAlertVisible(true);

      // Hide the alert after 2 seconds
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    } finally {
      setIsLoading(false); // Hide loader when the request is completed
    }
  };

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
        <div className="withdraw-wrap25 p-$mg">
          <div className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text">
            <div className=":uno: flex items-center justify-between">
              <div className=":uno: shrink-0">
                <div className=":uno: text-left text-18px">
                  {t("withdrawal_account")}
                </div>
                <div className=":uno: text-left text-13px lh-20px c-red">
                  {t("24_hours_withdrawal")}
                </div>
              </div>
              <div className=":uno: base-logo flex items-center small-logo justify-end">
                <img className="site-img h-full w-full rd-50%" src={logo} />
              </div>
            </div>
            {alertVisible && (
              <div
                id="copyModal"
                role="dialog"
                className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
                style={{ zIndex: "200017", transition: ".3s all" }}
              >
                <div className="van-toast__text">{alertMessage}</div>
              </div>
            )}
            {isLoading ? <CustomLoader isLoading={isLoading} /> : null}
            <div className="number">
              <div className="title">{t("total_balance")}</div>
              <div className="num">
                {data?.user?.withdraw_balance}
                <span>TRX</span>
              </div>
            </div>
            {/* number ends */}
            <div className="pay-type align-items-center mb-10px">
              <div className="shrink-0">{t("withdrawal_method")}:</div>
              <div className="flex flex-wrap items-center ">
                {/* <Link
                  to="/withdraw"
                  id="trc20Usdt"
                  className="ml-5px mr-10px inline-block h-30px cursor-pointer border border-$text-gray rd border-solid px-15px leading-30px text-$text-gray border-$primary! text-$btn-text!"
                >
                  TRC20-USDT
                </Link> */}
                <Link
                  to="/withdraw-trx"
                  id="trc20Usdt"
                  className="mr-10px inline-block h-30px cursor-pointer border border-$text-gray rd border-solid px-15px leading-30px text-$text-gray bg-$primary! border-$primary! text-$btn-text!"
                >
                  TRX
                </Link>
              </div>
            </div>
            {/* Withdrawal method ends */}
            <form onSubmit={handleSubmit} action="#">
              <div className="base-input is-number">
                <div className="input-box">
                  <div className="input-left-slot"></div>
                  <input
                    type="number"
                    step="0.01"
                    placeholder={`${t("quota")} 3.00 - 30000.00`}
                    className="w-full"
                    name="quota"
                    value={quota}
                    onChange={handleQuotaChange}
                    autocomplete="number"
                  />
                  <div className="input-right-slot"></div>
                </div>
              </div>
              {/* base-input ends */}
              <div className="base-input is-textarea">
                <div className="input-box">
                  <div className="input-left-slot"></div>
                  <textarea
                    type="text"
                    placeholder={t("withdrawal_address")}
                    className="w-full"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>

                  <div className="input-right-slot"></div>
                </div>
              </div>
              {/* base-input ends */}
              <div className="base-input is-password">
                <div className="input-box">
                  <div className="input-left-slot"></div>
                  <input
                    type="password"
                    placeholder={t("password")}
                    className="w-full withdraw_password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-pwd-eye-slot cursor-pointer">
                    <div className="input-pwd-eye">
                      <div className="Wpasseye2 i-mdi-eye-outline"></div>
                    </div>
                  </div>
                  <div className="input-right-slot"></div>
                </div>
              </div>
              {/* base-input ends */}
              <div>
                <div className="mt-10px flex items-center justify-between">
                  <span className="text-sm text-$text-gray">
                    {t("handling_fees")}
                  </span>
                  <div className="text-right text-sm">
                    <div className="">0 TRX</div>
                  </div>
                </div>
                <div className="mt-10px flex items-center justify-between">
                  <span className="text-sm text-$text-gray">
                    {t("actually_received")}
                  </span>
                  <div className="text-sm">{actuallyReceived} TRX</div>
                </div>
                <button
                  type="submit"
                  className=":uno: base-main-btn flex items-center justify-center"
                  disabled={isLoading}
                >
                  <div className="base-main-btn-content">
                    <span>{t("confirm")}</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <SupportLink /> */}
      <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default withdraw;
