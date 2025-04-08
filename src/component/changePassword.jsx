//all packages
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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

import axios from "axios";
import { useEffect, useState } from "react";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";

import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";

const changePassword = () => {
  const navigate = useNavigate();
  const [old_password, setOldPasword] = useState("");
  const [new_password, setNewPasword] = useState("");
  const [confirm_password, setConfirmPasword] = useState("");

  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoader(true);

    try {
      const formData = {
        old_password,
        new_password,
        confirm_password,
      };
      const response = await axios.post("api/password", formData);

      setAlertMessage(response.data.message || "Something happened");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
        if (response.data.status) {
          navigate("/me");
        }
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoader(false); // Hide loader when the request is completed
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };
  const { t } = useTranslation();
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
          <CustomLoader />
          {isLoader ? <Loader /> : null}

          <div changepass-page="" className="change-pwd-wrap p-$mg">
            <div
              changepass-page=""
              className=":uno: container-form w-full rd-$radius"
            >
              <form onSubmit={handleSubmit} changepass-page="">
                <div changepass-page="" className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      placeholder={t("old_password")}
                      className="w-full c_old_password"
                      type="password"
                      name="old_password"
                      value={old_password}
                      onChange={(e) => setOldPasword(e.target.value)}
                    />
                    <div className="input-pwd-eye-slot cursor-pointer">
                      <div className="input-pwd-eye">
                        <div className="C_old_passeye2 i-mdi-eye-outline"></div>
                      </div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>
                {/* base input ends */}
                <div changepass-page="" className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      placeholder={t("new_password")}
                      className="w-full c_new_password"
                      type="password"
                      name="new_password"
                      value={new_password}
                      onChange={(e) => setNewPasword(e.target.value)}
                    />
                    <div className="input-pwd-eye-slot cursor-pointer">
                      <div className="input-pwd-eye">
                        <div className=" c_new_passeye2 i-mdi-eye-outline"></div>
                      </div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>
                {/* base input ends */}
                <div changepass-page="" className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      placeholder={t("re_enter_new_password")}
                      className="w-full c_re_new_password"
                      type="password"
                      name="confirm_password"
                      value={confirm_password}
                      onChange={(e) => setConfirmPasword(e.target.value)}
                    />
                    <div className="input-pwd-eye-slot cursor-pointer">
                      <div className="input-pwd-eye">
                        <div className="c_re_new_passeye2 i-mdi-eye-outline"></div>
                      </div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>
                {/* base input ends */}
                <button
                  type="submit"
                  changepass-page=""
                  className=":uno: base-main-btn flex items-center justify-center"
                >
                  <div className="base-main-btn-content">{t("confirm")}</div>
                </button>
              </form>
            </div>
          </div>
        </div>
        <CustomLoader></CustomLoader>
        <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>
      </div>
      {/* support section */}

      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default changePassword;
