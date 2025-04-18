import { useTranslation } from "react-i18next";
import SingleHeader from "../component/extra/SingleHeader";
import SupportLink from "../component/extra/supportLink";
import TelegramPopUp from "../component/extra/TelegramPopUp";
import { useState } from "react";
import { BiTransferAlt } from "react-icons/bi";
import "./transferInput.css";
import { FaEye } from "react-icons/fa6";

const TransferAmount = () => {
  const { t } = useTranslation();
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div id="app" className="a-t-26 no-4">
      <div className="box-border min-h-full w-full pt-45px">
        <SingleHeader></SingleHeader>
      </div>
      <div className="p-4 ">
        <div>
          <div className="d-flex align-items-center justify-content-between gap-4 mt-4 mb-4">
            <div className="col">
              <div className="p-4 bg-$bg-card d-flex flex-column justify-content-center align-items-center gap-2 rounded-2 me-cards">
                <h2 className="fs-5">{t("Widthdraw Account")}</h2>
                <h1 className="fs-3 font-bold">1.20 USDT</h1>
              </div>
            </div>
            <div className="rounded-circle d-flex justify-content-center align-items-center bg-$bg-card p-3">
              <BiTransferAlt />
            </div>
            <div className="col">
              <div className="p-4 bg-$bg-card d-flex flex-column justify-content-center align-items-center gap-2 rounded-2 me-cards">
                <h2 className="fs-5">{t("Basic Account")}</h2>
                <h1 className="fs-3 font-bold">100.00 USDT</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="input-group mb-3">
            <input
              type="text"
              placeholder="Amount to be converted"
              className="form-control border-0 transferInput"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group position-relative mb-3">
            <input
              type="text"
              className="form-control border-0 rounded transferInput"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span
              className="position-absolute top-50 translate-middle-y"
              style={{
                right: "3rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              id="basic-addon2"
            >
              <FaEye size={20} />
            </span>
          </div>
          <button className="btn border border-white bg-pink text-white transferBtn">
            Confirm
          </button>
        </div>
      </div>
      {/* <SupportLink /> */}
      <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default TransferAmount;
