//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

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

import logo from "../assets/images/logo2.webp";
import trc20 from "../assets/images/trc20-usdt.jpg";
import trx from "../assets/images/trx.webp";
import bep20usdt from "../assets/images/bep20_usdt_icon.png";
import bnb from "../assets/images/bnb_icon.png";
import Barcode from "../assets/images/barcode.gif";

//component
import CustomLoader from "./extra/customLoader";
// import SupportLink from "./extra/supportLink";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const rechargeMethod = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const rechargeMethod = [
    {
      id: 1,
      name: "TRC20-USDT",
      image: trc20,
      link: "/recharge",
      btnText: "Recharge",
    },
    {
      id: 2,
      name: "TRX",
      image: trx,
      link: "/recharge-trx",
      btnText: "Recharge TRX",
    },
    {
      id: 3,
      name: "BEP20-USDT",
      image: bep20usdt,
      link: "/recharge-bep20",
      btnText: "Recharge BEP20",
    },
    {
      id: 4,
      name: "BNB",
      image: bnb,
      link: "/recharge-bnb",
      btnText: "Recharge BNB",
    },
  ];

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };
  // telegram popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div id="app" className="a-t-26 no-4">
      <div className="box-border min-h-full w-full pt-45px">
        <SingleHeader></SingleHeader>

        {/* NEW CARD SYSTEM */}
        <div className="bg-$bg-card px-4 py-3 my-3 rounded-2 w-100">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-3">
              {rechargeMethod?.map((item) => (
                <Link key={item.id} to={item.link} className="col">
                  <div className="p-4 bg-deep-card d-flex flex-column justify-content-center align-items-center gap-2 rounded-2">
                    <img
                      rc-page=""
                      src={item.image}
                      className="h-26.48px w-26.48px shrink-0"
                    />
                    <h2 className="fs-3">{t(item.name)}</h2>
                    <Link
                      to={item.link}
                      className="btn btn-primary w-100 btn-sm"
                    >
                      {item.btnText}
                    </Link>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* PREVIOUS CODE */}
        {/* <div className="p-$mg">
          <div
            rc-page=""
            className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-12px px-12px py-0"
          >
            <Link rc-page="" className="recharge-item" to="/recharge">
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={trc20}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name">
                  TRC20-USDT
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
            <Link rc-page="" className="recharge-item" to="/recharge-trx">
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={trx}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name">
                  TRX
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
            <Link rc-page="" className="recharge-item" to="/recharge-bep20">
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={bep20usdt}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name">
                  BEP20-USDT
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
            <Link rc-page="" className="recharge-item" to="/recharge-bnb">
              <div rc-page="" className="flex items-center">
                <img
                  rc-page=""
                  src={bnb}
                  className="h-26.48px w-26.48px shrink-0"
                />
                <span rc-page="" className="name">
                  BNB
                </span>
              </div>
              <div rc-page="" className="flex items-center">
                <div
                  rc-page=""
                  className="i-material-symbols:arrow-forward-ios h-20px w-20px text-$text-gray"
                ></div>
              </div>
            </Link>
          </div>
        </div> */}
      </div>

      <CustomLoader />
      <SupportLink toggleTelegramPopUp={toggleTelegramPopUp}></SupportLink>

      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default rechargeMethod;
