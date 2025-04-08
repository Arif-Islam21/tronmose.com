import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/style2.css";
import "../../assets/css/style3.css";
import "../../assets/css/style4.css";
import "../../assets/css/style5.css";
import "../../assets/css/style6.css";
import "../../assets/css/style7.css";
import "../../assets/css/style8.css";
import "../../assets/css/style9.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AuthTop from "../extra/authTopPart";
import LanguagePopUp from "../extra/LanguagePopUp";
import TelegramPopUp from "../extra/TelegramPopUp";

import CustomLoader from "../extra/customLoader";
import Loader from "../extra/loader";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const type = "email";
  const { t, i18n } = useTranslation();

  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { email, password, type };

    try {
      setIsLoader(true);
      const response = await axios.post("api/login", formData);

      setAlertMessage(response.data.message || "Something happened");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
        setIsLoader(false);
      }, 2000);

      if (response.data.message === "Unauthorised") {
        enqueueSnackbar("This credential do not match", { variant: "error" });
      }

      if (response.data.data.token) {
        localStorage.setItem("token", response.data.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.data.token}`;
        navigate("/home");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoader(false); // Hide loader after data is fetched
    }
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
  // password eye
  const [eyeHideShow, setEyeHideShow] = useState(false);
  const handleHideShow = () => {
    setEyeHideShow(!eyeHideShow);
  };
  return (
    <div id="app" className="a-t-26 no-4">
      <div className="login">
        <div className=":uno: container-login relative">
          <AuthTop
            selectedLanguage={selectedLanguage}
            toggleLangPopup={toggleLangPopup}
            toggleTelegramPopUp={toggleTelegramPopUp}
          ></AuthTop>

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
          {/* <CustomLoader /> */}
          {isLoader ? <Loader /> : null}

          {/* <!-- top-info ends --> */}
          {/* Conditional rendering of the loader */}
          <div className="login-content">
            <div className=":uno: container-form w-full rd-$radius colorful">
              <div className="container-form-content">
                <div className="tabs2 ">
                  <Link className=":uno: tab-item tab2  active2" to="/">
                    {t("email_login")}
                  </Link>
                  <Link
                    className=":uno: tab-item tab2 non-active2 phnlog"
                    to="/phone-login"
                  >
                    {t("phone_login")}
                  </Link>
                </div>

                <div className="tab-content2">
                  <form
                    className="login_Fm"
                    onSubmit={handleSubmit}
                    style={{
                     
                    }}
                  >
                    <div className="base-input is-text mt-0!">
                      <div className="label">{t("email")}</div>
                      <div className="input-box">
                        <div className="input-left-slot"></div>
                        <input
                          type="email"
                          className="w-full"
                          id="email"
                          placeholder={t("email")}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="input-right-slot"></div>
                    </div>
                    <div className="base-input is-password">
                      <div className="label">{t("password")}</div>
                      <div className="input-box">
                        <div className="input-left-slot"></div>
                        <input
                          type={eyeHideShow ? "text" : "password"}
                          className="w-full"
                          id="password"
                          placeholder={t("password")}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div
                          className="input-pwd-eye-slot cursor-pointer"
                          onClick={handleHideShow}
                        >
                          <div
                            id="eye"
                            className={`icon text-22px ${
                              eyeHideShow ? "i-mdi:eye" : "i-mdi:eye-off"
                            }`}
                          ></div>
                        </div>
                        <div className="input-right-slot"></div>
                      </div>
                    </div>

                    <div className="tools mt-20px">
                      <div className=":uno: base-main-btn flex items-center justify-center">
                        <button
                          type="submit"
                          className="base-main-btn-content mx-0"
                        >
                          <div>{t("sign_in")}</div>
                        </button>
                      </div>

                      <div className="bottom-content">
                        <Link
                          to="/register"
                          className="register cursor-pointer"
                        >
                          {t("sign_up")}
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
                {/* tab-content2 ends */}
              </div>
            </div>
          </div>
          {/* login contents ends */}
        </div>
      </div>
      <LanguagePopUp
        isLanguageVisible={isLanguageVisible}
        toggleLangPopup={toggleLangPopup}
        changeLanguage={changeLanguage}
      />
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      ></TelegramPopUp>
    </div>
  );
}

export default App;
