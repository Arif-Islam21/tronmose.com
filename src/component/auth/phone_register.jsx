import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
// All CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/style2.css";
import "../../assets/css/style3.css";
import "../../assets/css/style4.css";
import "../../assets/css/style5.css";
import "../../assets/css/style6.css";
import "../../assets/css/style7.css";
import "../../assets/css/style8.css";
import "../../assets/css/style9.css";
import LanguagePopUp from "../extra/LanguagePopUp";
import TelegramPopUp from "../extra/TelegramPopUp";
import CountryCodePup from "./CountryCodePup";
import AuthTop from "../extra/authTopPart";

import CustomLoader from "../extra/customLoader";
import Loader from "../extra/loader";

function App() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [invitation_code, setInvitationCode] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({
    phone: "",
    password: "",
    invitation_code: "",
    password_confirmation: "",
  });
  const type = "phone";
  const { t, i18n } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ic = params.get("ic");

    if (ic) {
      localStorage.setItem("invitation_code", ic);
      setInvitationCode(ic);
    } else {
      const storedIc = localStorage.getItem("invitation_code");
      if (storedIc) {
        setInvitationCode(storedIc);
      }
    }
  }, [location.search]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      phone,
      password,
      invitation_code,
      password_confirmation,
      type,
      country_code: selectedCountry, // Send country code separately
    };

    try {
      setIsLoader(true);
      const response = await axios.post("api/register", formData);

      setAlertMessage(response.data.message || "Something happened");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
        setIsLoader(false);
      }, 2000);

      if (response.data.message === "Unauthorised") {
        enqueueSnackbar("These credentials do not match", { variant: "error" });
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
  // country Code popup
  const [isCountryVisible, setIsCountryVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("64");
  const toggleCountryPopUp = () => {
    setIsCountryVisible(!isCountryVisible);
  };
  const changeCountry = (country) => {
    setSelectedCountry(country);
    setIsCountryVisible(false);
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

          <div className="login-content">
            <div className=":uno: container-form w-full rd-$radius colorful">
              <div className="container-form-content">
                <div className="tabs2 ">
                  <Link
                    className=":uno: tab-item tab2 non-active2"
                    to="/register"
                  >
                    {t("RegisterByEmail")}
                  </Link>
                  <Link
                    className=":uno: tab-item tab2 active2 phnlog"
                    to="/phone-register"
                  >
                    {t("RegisterByPhone")}
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
                      <div className="label">{t("phone")}</div>
                      <div className="input-box">
                        <div className="input-left-slot">
                          <div className="flex items-center">
                            <div login-content="" className="ml-0!">
                              <div
                                login-content=""
                                onClick={toggleCountryPopUp}
                              >
                                <span className="input-phone-select">
                                  +
                                  <span id="countryCode">
                                    {selectedCountry}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          className="w-full"
                          id="phone"
                          placeholder={t("phone_number")}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <div className="input-right-slot"></div>
                      </div>
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
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

                      {errors.password && (
                        <small className="text-danger">{errors.password}</small>
                      )}
                    </div>
                    <div className="base-input is-password">
                      <div className="label">{t("re_enter_password")}</div>
                      <div className="input-box">
                        <div className="input-left-slot"></div>
                        <input
                          type={eyeHideShow ? "text" : "password"}
                          className="w-full"
                          id="password_confirmation"
                          placeholder={t("re_enter_password")}
                          value={password_confirmation}
                          onChange={(e) =>
                            setPasswordConfirmation(e.target.value)
                          }
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

                      {errors.password_confirmation && (
                        <small className="text-danger">
                          {errors.password_confirmation}
                        </small>
                      )}
                    </div>
                    <div className="base-input">
                      <div className="label">{t("invitation_code")}</div>
                      <div className="input-box">
                        <div className="input-left-slot"></div>
                        <input
                          type="text"
                          className="w-full"
                          id="email"
                          placeholder={t("invitation_code")}
                          value={invitation_code}
                          onChange={(e) => setInvitationCode(e.target.value)}
                        />
                        <div className="input-right-slot"></div>
                      </div>
                      {errors.invitation_code && (
                        <small className="text-danger">
                          {errors.invitation_code}
                        </small>
                      )}
                    </div>

                    <div className="tools mt-20px">
                      <div className=":uno: base-main-btn flex items-center justify-center">
                        <button
                          type="submit"
                          className="base-main-btn-content mx-0"
                        >
                          <div>{t("sign_up")}</div>
                        </button>
                      </div>

                      <div className="bottom-content">
                        <Link to="/" className="register cursor-pointer">
                          {t("sign_in")}
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
      <CountryCodePup
        isCountryVisible={isCountryVisible}
        toggleCountryPopUp={toggleCountryPopUp}
        changeCountry={changeCountry}
      ></CountryCodePup>
    </div>
  );
}

export default App;
