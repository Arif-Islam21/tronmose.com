// Announcement.js
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import anouncment_saving from "../../assets/images/anouncment_saving.webp";
import home_licence from "../../assets/images/home_licence.webp";
const Announcement = () => {
  const { t } = useTranslation();
  const messages = [
    ` <h1>Newbie Questions</h1><br/>

        <h2>How to Become a Partner of TRONMOSE Mining Company?</h2><br/>
        <p>To become a partner, simply register! You’ll receive 6000 TRX for free, which you can withdraw 6 months after activation.</p>

        <h2>What is the Minimum Deposit & Withdrawal Amount?</h2><br/>
        <ul>
            <li><strong>Minimum Deposit:</strong> 10 TRX or 2 USDT</li>
            <li><strong>Minimum Withdrawal:</strong> 5 TRX</li>
        </ul><br/>

        <h2>How Do I Withdraw Money?</h2><br/>
        <ol>
            <li>Log in to your account.</li>
            <li>Go to the “Withdrawal” page.</li>
            <li>Click the “Withdraw” button.</li>
            <li>Bind your TRX wallet address and set a payment password if it’s your first time.</li>
            <li>Specify the withdrawal amount, choose your wallet address, and click Withdraw.</li>
        </ol><br/>

        <h2>I Made a Withdrawal Request, But It Hasn’t Arrived Yet!</h2><br/>
        <p>All requests are processed by an automated system and are usually completed within 1 minute.</p>

        <h2>How to Store Value and Invest?</h2><br/>
        <ol>
            <li>Log into your account and go to the mining page.</li>
            <li>Click the “Deposit” button at the top.</li>
            <li>Choose the currency you want to deposit.</li>
            <li>You’ll be given a wallet address to send your cryptocurrencies to.</li>
        </ol><br/>
        <p><strong>Note:</strong> Deposits are typically credited within 1 minute.</p><br/>

        <h2>How to Change Your Account Password?</h2><br/>
        <ol>
            <li>Go to the “My” tab in the lower-right corner.</li>
            <li>Click “Change Password.”</li>
            <li>Enter your old password and new password to confirm the change.</li>
        </ol>


        `,

        `
        <h1>VIP Levels and Daily Mining Income</h1><br/>
        <h2>VIP Levels & Mining Rates</h2><br/>
        <table border="1" cellpadding="8" cellspacing="0" class="annoncement_table">
            <thead>
                <tr>
                    <th>VIP Level</th>
                    <th>Deposit Range</th>
                    <th>Daily Income Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>VIP 1</td>
                    <td>1 ~ 1,000 TRX</td>
                    <td>9%</td>
                </tr>
                <tr>
                    <td>VIP 2</td>
                    <td>1,001 ~ 10,000 TRX</td>
                    <td>10%</td>
                </tr>
                <tr>
                    <td>VIP 3</td>
                    <td>10,001 ~ 20,000 TRX</td>
                    <td>11%</td>
                </tr>
                <tr>
                    <td>VIP 4</td>
                    <td>20,001 ~ 50,000 TRX</td>
                    <td>13%</td>
                </tr>
                <tr>
                    <td>VIP 5</td>
                    <td>50,001 ~ 100,000 TRX</td>
                    <td>15%</td>
                </tr>
                <tr>
                    <td>VIP 6</td>
                    <td>100,001 ~ 200,000 TRX</td>
                    <td>18%</td>
                </tr>
                <tr>
                    <td>VIP 7</td>
                    <td>200,001 ~ 400,000 TRX</td>
                    <td>21%</td>
                </tr>
                <tr>
                    <td>VIP 8</td>
                    <td>400,001 ~ 1,000,000 TRX</td>
                    <td>25%</td>
                </tr>
                <tr>
                    <td>VIP 9</td>
                    <td>1,000,001 ~ 2,000,000 TRX</td>
                    <td>31%</td>
                </tr>
                <tr>
                    <td>VIP 10</td>
                    <td>2,000,001 ~ 9,999,999 TRX</td>
                    <td>35%</td>
                </tr>
            </tbody>
        </table><br/>

        <h2>Claiming Your Daily Mining Income</h2><br/>
        <p>Mining income is not automatically credited to your account. You must log in each day and manually claim it by following these steps:</p><br/>
        <ol>
            <li>Log in to your account.</li>
            <li>Click on [Mining] to enter the mining page.</li>
            <li>Claim your daily income by clicking the “Receive” button.</li>
        </ol><br/>
        <p><strong>Note:</strong> If you miss claiming your income for the day, that day’s earnings will be forfeited. The daily profit period begins based on the time of your first investment.</p>

        `,
  ];

  const [show, setShow] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Show the announcement after 2 seconds
    const showTimeout = setTimeout(() => {
      setShow(true);
    }, 2000);

    // Clear timeout if the component unmounts
    return () => {
      clearTimeout(showTimeout);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleNext = () => {
    setCurrentMessageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentMessageIndex((prevIndex) => prevIndex - 1);
  };

  const handleAgree = () => {
    setShow(false);
  };

  return (
    <div
      id="homeModal"
      className={`van-popup van-popup--round van-popup--center van-safe-area-bottom van-popup-customer anounce-none ${
        show ? "show" : ""
      }`}
      style={{ zIndex: "2003", width: "95%", maxWidth: "620px" }}
    >
      <div data-v-909b9c13="" className="announce-wrap a-t-26">
        <div data-v-909b9c13="" className="container-card email-box p-0!">
          <div className="mb-12px pt-12px text-center text-20px font-bold text-$btn-text">
            <h4>{t("announcement")}</h4>
          </div>
          <div
            data-v-909b9c13=""
            className="mx-auto h-10px w-95% rounded-full bg-$primary"
          ></div>
          <div
            className="content absolute left-50% top-60px h-310px w-90% translate-x-[-50%] overflow-y-auto p-5px text-black shadow bg-white!"
            dangerouslySetInnerHTML={{ __html: messages[currentMessageIndex] }}
          />
          <div className="mt-320px w-full" style={{ marginTop: "327px" }}>
            <div data-v-909b9c13="" className="mt-10px flex justify-around">
              {currentMessageIndex === 0 && (
                <div className="mx-auto inline" onClick={handleClose}>
                  {t("close")}
                </div>
              )}
              {currentMessageIndex > 0 && (
                <div className="mx-auto inline" onClick={handlePrevious}>
                  {t("previous")}
                </div>
              )}
              {currentMessageIndex === 0 && (
                <div className="mx-auto inline" onClick={handleNext}>
                  {t("next")}
                </div>
              )}
              {currentMessageIndex === 1 && (
                <div className="mx-auto inline" onClick={handleAgree}>
                  {t("i_know")}
                </div>
              )}
            </div>
          </div>
          {/* buttons ends */}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
