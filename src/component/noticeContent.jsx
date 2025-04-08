//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
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
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import SingleHeader from "./extra/SingleHeader";

const financial = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  const {t} = useTranslation();
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card login_reg_card account_card shadow-lg" style={{ width: "720px" }}>
      <SingleHeader backPage={"/home"}></SingleHeader>

        <div className="finiancial-actions p-4 ">
          <div className="container-card p-4 relative rd-$card-radius p-$mg c-$btn-text">
            <div className="custom_tab_record">
              <div className="notice_content_wrapp">
                <div className="notice-content">
                    <h5 className="notice-title">{t("system_notification")}</h5>
                    <p className="notice_date_time">09/07/2024 18:54:53</p>
                </div>
                <div className="notice_details">
                    <p>{t("notice_details_1")}</p>
                    <p>{t("notice_details_2")}</p>
                    <p>{t("notice_details_3")}</p>
                    <p>{t("notice_details_4")}</p>
                    <p>{t("notice_details_5")}</p>
                    <p>{t("notice_details_6")}</p>
                    <p>{t("notice_details_7")}</p>
                    <p>{t("notice_details_8")}</p>
                    <p>{t("notice_details_9")}</p>
                    <p>{t("notice_details_10")}</p>
                    <p>{t("notice_details_11")}</p>
                    <p>{t("notice_details_12")}</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
        

        <CustomLoader />

        {/* support section */}
        {/* <SupportLink /> */}
        {/* support section */}

      </div>
    </div>
  );
};

export default financial;
