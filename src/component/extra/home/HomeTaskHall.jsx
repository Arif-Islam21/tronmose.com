import taskhall2 from "../../../assets/images/task/taskhall_2.webp";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// image import
import trx from "../../../assets/images/1958.png";
import btc from "../../../assets/images/1.png";
import binance from "../../../assets/images/btc_icon.png";
import coinbase from "../../../assets/images/bnb_icon.png";
import huobi from "../../../assets/images/trx_icon.png";
import okx from "../../../assets/images/eth_icon.png";

const HomeTaskHall = () => {
  const { t, i18n } = useTranslation();

  // State for real-time data
  const [cryptoData, setCryptoData] = useState({
    trx: '00.00',
    btc: '00.00',
    eth: '00.00',
    bnb: '00.00',
  });

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/trxusdt@trade/btcusdt@trade/ethusdt@trade/bnbusdt@trade"
    );

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setCryptoData((prevData) => {
        let updatedData = { ...prevData };
        switch (message.s) {
          case "TRXUSDT":
            updatedData.trx = message.p;
            break;
          case "BTCUSDT":
            updatedData.btc = message.p;
            break;
          case "ETHUSDT":
            updatedData.eth = message.p;
            break;
          case "BNBUSDT":
            updatedData.bnb = message.p;
            break;
          default:
            break;
        }
        return updatedData;
      });
    };
    return () => socket.close();
  }, []);

  // State for 24-hour stats
  const [cryptoStats, setCryptoStats] = useState({
    trx: { high: '00.00', low: '00.00', priceChangePercent: '00.00' },
    btc: { high: '00.00', low: '00.00', priceChangePercent: '00.00' },
    eth: { high: '00.00', low: '00.00', priceChangePercent: '00.00' },
    bnb: { high: '00.00', low: '00.00', priceChangePercent: '00.00' },
  });

  const fetch24HourStats = async () => {
    try {
      const symbols = ["TRXUSDT", "ETHUSDT", "BTCUSDT", "BNBUSDT"];
      const requests = symbols.map((symbol) =>
        fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`).then((response) => response.json())
      );

      const data = await Promise.all(requests);

      const stats = data.reduce((acc, item) => {
        const symbol = item.symbol.toLowerCase();
        acc[symbol] = {
          high: item.highPrice,
          low: item.lowPrice,
          priceChangePercent: item.priceChangePercent,
        };
        return acc;
      }, {});
      console.log(stats);
      setCryptoStats(stats);
    } catch (error) {
      console.error("Error fetching 24-hour stats:", error);
    }
  };

  useEffect(() => {
    fetch24HourStats();
    const intervalId = setInterval(fetch24HourStats, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getPriceChangeStyle = (priceChangePercent) => {
    if (priceChangePercent < 0) {
      return { color: "red" };
    } else if (priceChangePercent > 0) {
      return { color: "green" };
    } else {
      return { color: "black" };
    }
  };

  return (
    <div home-content="" className="store">
      <div className="container-card relative rd-$card-radius p-$mg c-$btn-text mt-12px shadow-$shadow">
        <div home-content="" className="title">
          {t("real_time_quotes")}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10px mt-10px">
          {/* BTC */}
          <div className="w-full p-10px bg-deep-card rd-$radius flex_real_q">
            <div className="flex items-center">
              <img className="w-25px h-25px mr-5px" src={binance} alt="logo" />
              <span>BTC/USDT</span>
            </div>
            <div className="flex mt-5px items-center justify-between text-#09c497 quata_price">
              <div>{cryptoData.btc ? `${Number(cryptoData.btc).toFixed(4)}` : "00.00"}</div>
              <div className="btn_btn_real">
                <span
                  style={getPriceChangeStyle(parseFloat(cryptoStats.btcusdt?.priceChangePercent || "0"))}
                >
                  {cryptoStats.btcusdt?.priceChangePercent
                    ? (cryptoStats.btcusdt.priceChangePercent > 0
                      ? `+${cryptoStats.btcusdt.priceChangePercent}%`
                      : `${cryptoStats.btcusdt.priceChangePercent}%`)
                    : "00.00%"}
                </span>
              </div>
            </div>
          </div>

          {/* BNB */}
          <div className="w-full p-10px bg-deep-card rd-$radius flex_real_q">
            <div className="flex items-center">
              <img className="w-25px h-25px mr-5px" src={coinbase} alt="logo" />
              <span>BNB/USDT</span>
            </div>
            <div className="flex mt-5px items-center justify-between text-#09c497 quata_price">
              <div>{cryptoData.bnb ? `${Number(cryptoData.bnb).toFixed(4)}` : "00.00"}</div>
              <div className="btn_btn_real">
                <span
                  style={getPriceChangeStyle(parseFloat(cryptoStats.bnbusdt?.priceChangePercent || "0"))}
                >
                  {cryptoStats.bnbusdt?.priceChangePercent
                    ? (cryptoStats.bnbusdt.priceChangePercent > 0
                      ? `+${cryptoStats.bnbusdt.priceChangePercent}%`
                      : `${cryptoStats.bnbusdt.priceChangePercent}%`)
                    : "00.00%"}
                </span>
              </div>
            </div>
          </div>

          {/* TRX */}
          <div className="w-full p-10px bg-deep-card rd-$radius flex_real_q">
            <div className="flex items-center">
              <img className="w-25px h-25px mr-5px" src={huobi} alt="logo" />
              <span>TRX/USDT</span>
            </div>
            <div className="flex mt-5px items-center justify-between text-#09c497 quata_price">
              <div>{cryptoData.trx ? `${Number(cryptoData.trx).toFixed(4)}` : "00.00"}</div>
              <div className="btn_btn_real">
                <span
                  style={getPriceChangeStyle(parseFloat(cryptoStats.trxusdt?.priceChangePercent || "0"))}
                >
                  {cryptoStats.trxusdt?.priceChangePercent
                    ? (cryptoStats.trxusdt.priceChangePercent > 0
                      ? `+${cryptoStats.trxusdt.priceChangePercent}%`
                      : `${cryptoStats.trxusdt.priceChangePercent}%`)
                    : "00.00%"}
                </span>
              </div>
            </div>
          </div>

          {/* ETH */}
          <div className="w-full p-10px bg-deep-card rd-$radius flex_real_q">
            <div className="flex items-center">
              <img className="w-25px h-25px mr-5px" src={okx} alt="logo" />
              <span>ETH/USDT</span>
            </div>
            <div className="flex mt-5px items-center justify-between text-#09c497 quata_price">
              <div>{cryptoData.eth ? `${Number(cryptoData.eth).toFixed(4)}` : "00.00"}</div>
              <div className="btn_btn_real">
                <span
                  style={getPriceChangeStyle(parseFloat(cryptoStats.ethusdt?.priceChangePercent || "0"))}
                >
                  {cryptoStats.ethusdt?.priceChangePercent
                    ? (cryptoStats.ethusdt.priceChangePercent > 0
                      ? `+${cryptoStats.ethusdt.priceChangePercent}%`
                      : `${cryptoStats.ethusdt.priceChangePercent}%`)
                    : "00.00%"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTaskHall;
