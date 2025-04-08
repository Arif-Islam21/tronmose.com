import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

// fontawesome

import AuthTop from "../extra/authTopPart";

import { useTranslation } from "react-i18next";
//all css
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

import CustomLoader from "../extra/customLoader";
import Loader from "../extra/loader";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invitation_code, setInvitationcode] = useState("");
  const [password_confirmation, setPasswordconfirmation] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    invitation_code: "",
    password_confirmation: "",
  });
  const type = "email";
  const { t, i18n } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation(); // useLocation hook to access the URL
  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    // Parse the URL parameters
    const params = new URLSearchParams(location.search);
    const ic = params.get("ic"); // Get the invitation code from the URL

    if (ic) {
      localStorage.setItem("invitation_code", ic); // Store the invitation code in local storage
      setInvitationcode(ic); // Set the invitation code in state
    } else {
      // Check if the invitation code exists in local storage
      const storedIc = localStorage.getItem("invitation_code");
      if (storedIc) {
        setInvitationcode(storedIc); // Set the invitation code from local storage
      }
    }
  }, [location.search]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email,
      password,
      invitation_code,
      password_confirmation,
      type,
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
          {/* <!-- top-info ends --> */}

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

          {isLoader ? <Loader /> : null}

          {/* Conditional rendering of the loader */}
          <div className="login-content">
            <div className=":uno: container-form w-full rd-$radius colorful">
              <div className="container-form-content">
                <div className="tabs2 ">
                  <Link className=":uno: tab-item tab2 active2" to="/register">
                    {t("RegisterByEmail")}
                  </Link>
                  <Link
                    className=":uno: tab-item tab2 non-active2 phnlog"
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
                        <div className="input-right-slot"></div>
                      </div>
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
                            setPasswordconfirmation(e.target.value)
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
                    </div>
                    <div className="base-input">
                      <div className="label">{t("invitation_code")}</div>
                      <div className="input-box">
                        <div className="input-left-slot"></div>
                        <input
                          type="text"
                          className="w-full"
                          id="invitation_code"
                          placeholder={t("invitation_code")}
                          value={invitation_code}
                          onChange={(e) => setInvitationcode(e.target.value)}
                        />
                        <div className="input-right-slot"></div>
                      </div>
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
    </div>
  );
}

export default App;
