import React, { useState, useEffect } from "react";
import axios from "axios";
import telegramIcon from "../../assets/images/telegram_icon.png";
import { useTranslation } from "react-i18next";
const TelegramPopUp = ({ isTelegramVisible, toggleTelegramPopUp }) => {
  const { t } = useTranslation();
  const [telegramLink, setTelegramLink] = useState("");

  useEffect(() => {
    if (isTelegramVisible) {
      fetchData();
    }
  }, [isTelegramVisible]);

  const fetchData = async () => {
    try {
      const response = await axios.get("api/support");
      // Assuming the link is returned in response.data.url
      setTelegramLink(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRedirect = () => {
    if (telegramLink) {
      window.location.href = telegramLink; // Redirect to the Telegram link
    }
  };

  if (!isTelegramVisible) return null;

  return (
    <div>
      <div
        onClick={toggleTelegramPopUp}
        id="telegramModFade"
        className="van-overlay"
        role="button"
        style={{ zIndex: "2009" }}
      ></div>
      <div
        id="telegramModal"
        role="dialog"
        className="van-popup van-popup--round van-popup--bottom overflow-hidden"
        style={{ zIndex: "2011", height: "50%" }}
      >
        <div className=":uno: m-10px h-full flex flex-col overflow-hidden a-t-26">
          <div className="text-center text-lg font-bold text-#1d2129">
            {t("online_service")}
          </div>
          <div className="my-10px text-center text-sm text-#86909c">
            {t("choose_your_preferred")}
          </div>
          <ul className=":uno: mx-auto my-10px max-w-720px w-full flex-1 overflow-y-auto">
            <li
              className=":uno: mb-8px flex cursor-pointer items-center rounded-12px bg-#F7F8FA p-8px"
              onClick={handleRedirect} // Trigger redirect on click
            >
              <img
                className=":uno: h-64px w-64px overflow-hidden rounded-12px"
                src={telegramIcon}
                alt="Telegram"
              />
              <span className=":uno: ml-10px text-#1d2129">
                {t("customer_service")}
              </span>
              <div className="i-ic-round-keyboard-arrow-right ml-auto text-20px text-#86909c"></div>
            </li>
            {/* <li
              className=":uno: mb-8px flex cursor-pointer items-center rounded-12px bg-#F7F8FA p-8px"
              onClick={handleRedirect}
            >
              <a
                href="https://t.me/TRONMOSE"
                className=":uno: flex cursor-pointer items-center w-100"
              >
                <img
                  className=":uno: h-64px w-64px overflow-hidden rounded-12px"
                  src={telegramIcon}
                  alt="Telegram"
                />
                <span className=":uno: ml-10px text-#1d2129">
                  {t("telegram_channel")}
                </span>
                <div className="i-ic-round-keyboard-arrow-right ml-auto text-20px text-#86909c"></div>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TelegramPopUp;
