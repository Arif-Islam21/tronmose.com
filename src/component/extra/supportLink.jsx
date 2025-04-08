// css import
import { Link } from "react-router-dom";
import "../../assets/css/style.css";

const SupportLink = ({ toggleTelegramPopUp }) => {
  const SupportStyle = {
    left: "50%",
    transform: "translateX(310px)",
  };
  return (
    <div className="btn-fixed a-t-26" style={SupportStyle}>
      <div className="base-help-btn cursor-pointer fx-btn mr-0!">
        <div className="f-btn" onClick={toggleTelegramPopUp}>
          <div className="i-ri:customer-service-2-line text-24px"></div>
        </div>
      </div>
      <div className="base-alarm-logo-btn cursor-pointer fx-btn mr-0!">
        <Link to="/notice" className="f-btn">
          <div className="i-mdi:email-mark-as-unread text-24px"></div>
        </Link>
      </div>
    </div>
  );
};

export default SupportLink;
