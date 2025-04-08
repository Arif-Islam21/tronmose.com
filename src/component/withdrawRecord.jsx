//all packages
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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

//component
import Navbar from "./partial/navbar";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import SingleHeader from "./extra/SingleHeader";
const withdrawRecord = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };
  const {t} = useTranslation();
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-gray">
      <div className="card login_reg_card account_card shadow-lg" style={{ width: "720px" }}>
      <SingleHeader backPage={"/me"}></SingleHeader>

        <div className="finiancial-actions p-4 text-center">
        <div className="container-card p-4 relative rd-$card-radius p-$mg c-$btn-text">
          <div className="withdrawal_table">
            <div className="heading_record">
              <strong>{t("withdrawal_time")}</strong>

              <strong>{t("withdrawal_amount")}</strong>

              <strong>{t("withdrawal_address")}</strong>

              <strong>{t("withdrawal_status")}</strong>
            </div>
            <div className="body_record">
              <span>2024-06-14 21:14:27</span>

              <span>100.00</span>

              <span>TBVwN************************iZm7C</span>

              <span>
                <a href="#" className="btn btn-danger record__successfully_btn">
                {t("successfully_completed")}
                </a>
              </span>
            </div>
          </div>
        </div>
          
        </div>
      </div>
        

        <CustomLoader />

        {/* support section */}
        {/* <SupportLink /> */}
        {/* support section */}

        <Navbar />
      </div>
    </div>
  );
};

export default withdrawRecord;
