import React, { useEffect, useState } from "react";
import axios from "axios";

// WebSocket URL for Binance real-time data (you can replace this with any other WebSocket provider)
const SOCKET_URL = "wss://stream.binance.com:9443/ws/trxusdt@trade";

const CountdownTimer = () => {
  const [cryptoData, setCryptoData] = useState({
    trx: null,
    btc: null,
  });

  useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket(SOCKET_URL);

    // Listen for messages from the WebSocket server
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setCryptoData((prevData) => ({
        ...prevData,
        trx: message.p, // Price for TRX/USDT
      }));
    };

    // Cleanup the WebSocket connection when the component unmounts
    return () => socket.close();
  }, []);

  // Fetch other data (e.g., BTC/USDT from an API) or add more WebSockets as needed
  useEffect(() => {
    const fetchBTCData = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
        );
        setCryptoData((prevData) => ({
          ...prevData,
          btc: response.data.price,
        }));
      } catch (error) {
        console.error("Error fetching BTC data:", error);
      }
    };

    fetchBTCData();
  }, []);

  return (
    <div>
      <h2>Real-Time Quotes</h2>

      <div task-page="" className="mission-card" key={trading.id}>
        <div task-page="" className="card-inner" style={{ width: "100%" }}>
          <div task-page="" className="product-show">
            <img
              task-page=""
              className="product-img"
              src={`${axios.defaults.baseURL}${trading.product.image}`}
            />
          </div>
          <div task-page="" className="product-info-wrap">
            <div task-page="" className="product-info">
              <div task-page="" className="product-name">
                {trading.product.title}
              </div>
              <div task-page="" className="main-price-info">
                <div task-page="" className="product-price">
                  <div task-page="" className="label">
                    {t("price")}
                  </div>
                  <div task-page="" className="price">
                    {trading.product.price}
                  </div>
                </div>
                <div task-page="" className="product-price">
                  <div task-page="" className="label">
                    {t("income")}
                  </div>
                  <div task-page="" className="price red">
                    {trading.amount}
                  </div>
                </div>
              </div>
              <div
                task-page=""
                className="product-price flex items-center justify-between"
              >
                <span task-page="" className="label">
                  {t("completed_time")}
                </span>
                <span task-page="" className="price gray">
                  {new Date(trading.created_at).toLocaleString()}
                </span>
              </div>
            </div>
            <div task-page="" className="action-area"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
