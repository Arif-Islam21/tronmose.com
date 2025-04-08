import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import { useEffect, useState } from "react";
import axios from "axios"; // Ensure axios is imported
import moment from "moment"; // Ensure moment is imported
import SingleHeader from "./extra/SingleHeader"; // Import your components
import CustomLoader from "./extra/customLoader";
import SupportLink from "./extra/supportLink"; // Ensure this is correct
import TelegramPopUp from "./extra/TelegramPopUp"; // Ensure this is correct

const Financial = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ deposites: [] }); // Initialize with an object containing deposites
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const [isTelegramVisible, setIsTelegramVisible] = useState(false); // Add state for Telegram popup

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/deposits");
        setData(response.data); // Set data from response
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    return moment(dateString).format("MMMM DD, YYYY, HH:mm:ss");
  };

  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };

  return (
    <div>
      <div id="app" className="a-t-26 no-4">
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader />
          <div className="financial-wrap26 p-$mg">
            <div className="container-card relative rd-$card-radius p-$mg c-$btn-text">
              <div className="tabs2">
                <Link to="/financial" className="tab-item tab2 active2">
                  {t("basic_account")}
                </Link>
                <Link to="/basic" className="tab-item tab2 non-active2">
                  {t("withdrawal_account")}
                </Link>
              </div>
              {isLoading ? (
                <CustomLoader />
              ) : data.deposites.length > 0 ? (
                data.deposites.map((deposit, index) => (
                  <div
                    className="mb-10px flex cursor-pointer items-center py-10px!"
                    key={index}
                    style={{
                      background: "#48685f",
                      padding: "0px 10px",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <div>{t("recharge")}</div>
                      <div className="text-xs text-[var(--text-gray6)]">
                        {formatDate(deposit.created_at)}
                      </div>
                    </div>
                    <div className="ml-auto text-green">
                      {deposit.amount} TRX
                    </div>
                  </div>
                ))
              ) : (
                <div className="base-list-nodata">{t("no_data")}</div>
              )}
            </div>
          </div>
        </div>
        <SupportLink toggleTelegramPopUp={toggleTelegramPopUp} />
        <TelegramPopUp
          isTelegramVisible={isTelegramVisible}
          toggleTelegramPopUp={toggleTelegramPopUp}
        />
      </div>
    </div>
  );
};

export default Financial;
