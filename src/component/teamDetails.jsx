//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
import "../assets/css/style10.css";
import "../assets/css/style11.css";

//component
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import SingleHeader from "./extra/SingleHeader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Financial = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const level = query.get("level");

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Show loader during initial data fetch
      try {
        const response = await axios.get(`api/team/details?level=${level}`);

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const formatEmailOrPhone = (value) => {
    if (!value) return "";

    // Check if the value is an email and contains '@gmail.com'
    if (value.includes("@gmail.com")) {
      const [localPart] = value.split("@");
      if (localPart.length <= 4) return value; // Return the whole email if it's too short to mask

      const firstTwo = localPart.slice(0, 2);
      const lastTwo = localPart.slice(-2);
      return `${firstTwo}***@gmail.com`;
    }

    // Otherwise, process as a phone number or other email
    const length = value.length;
    if (length <= 4) return value; // Return the whole value if it's too short to extract first and last two digits

    const firstTwo = value.slice(0, 2);
    const lastTwo = value.slice(-2);
    return `${firstTwo}...${lastTwo}`;
  };

  const handleBackClick = () => {
    navigate(-1);
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

          <div team-details="" className="team-detail-wrap p-$mg">
            {data?.rebetas?.length > 0 ? (
              data.rebetas.map((rebeta) => (
                <div
                  team-details=""
                  className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text team-detail-item mb-20px"
                  key={rebeta.id}
                >
                  <div className="team_details_container">
                    <div team-details="" className="user-account mb-10px">
                      <div team-details="" className="c-$text-gray">
                        {t("account")}
                      </div>
                      <div team-details="" className="ml-10px">
                        {formatEmailOrPhone(rebeta.email_phone)}
                      </div>
                    </div>
                    <div team-details="" className="user-money">
                      <div team-details="" className="item">
                        <div
                          team-details=""
                          className="mb-2px text-12px lh-14px c-$text-gray"
                        >
                          {t("recharge_amount")}
                        </div>
                        <div team-details="" className="text-lg">
                          {parseFloat(rebeta.deposite_amount).toFixed(2)}
                        </div>
                      </div>
                      <div team-details="" className="item">
                        <div
                          team-details=""
                          className="mb-2px text-12px lh-14px c-$text-gray"
                        >
                          {t("recharge_rebate")}
                        </div>
                        <div team-details="" className="text-lg">
                          {parseFloat(rebeta.commission).toFixed(2)}
                        </div>
                      </div>
                      <div team-details="" className="item">
                        <div
                          team-details=""
                          className="mb-2px text-12px lh-14px c-$text-gray"
                        >
                          {t("task_rebate")}
                        </div>
                        <div team-details="" className="text-lg">
                          0
                        </div>
                      </div>
                    </div>
                    {/* user-money ends */}
                    <div
                      team-details=""
                      className="flex items-end justify-end text-12px lh-14px c-$text-gray"
                      style={{ marginTop: "15px" }}
                    >
                      {t("joining_time")}
                      <span
                        team-details=""
                        className="text-13px"
                        style={{ marginLeft: "10px" }}
                      >
                        {new Date(rebeta.joining_date).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no_data_wrapp text-center mt-4">
                <span className="no_data">{t("no_data")}</span>
              </div>
            )}
          </div>
          {/* <div fin-record="" className="base-list a-t-26">
            <div
              fin-record=""
              id="noticeNodata"
              className="no-more text-center"
            >
              No data
            </div>
          </div> */}
        </div>

        {/* support section */}
        {/* <SupportLink /> */}
        {/* support section */}
      </div>
    </div>
  );
};

export default Financial;
