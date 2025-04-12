// Announcement.js
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import anouncment_saving from "../../assets/images/anouncment_saving.webp";
import home_licence from "../../assets/images/home_licence.webp";
const Announcement = () => {
  const { t } = useTranslation();

  const messages = [
    `
    <h1>TRON RICH OFFICIAL NEWS</h1><br/>
  
    <h2>Social Media Posting Event</h2><br/>
    <p>After the event starts, users who post specified pictures and text content to social media for a total of 7 days can receive rewards for free. After 7 days of posting, users can take screenshots and consult online customer service to receive cash rewards without deposit.</p><br/>
  
    <p><strong>OFFICIAL SUPPORT:</strong> <a href="https://t.me/TRONRICH09" target="_blank">https://t.me/TRONRICH09</a></p><br/>
  
    <h2>Announcement</h2><br/>
    <p><strong>Dear TRON RICH user</strong></p><br/>
    <ul>
        <li><strong>Minimum Deposit:</strong> 10 TRX</li>
        <li><strong>Minimum Withdraw:</strong> 5 TRX</li>
    </ul><br/>
  
    <h2>Smart Income Levels</h2><br/>
    <table border="1" cellpadding="8" cellspacing="0" class="annoncement_table">
        <thead>
            <tr>
                <th>Deposit Range (TRX)</th>
                <th>Daily Income Rate</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>10 ~ 2,000</td><td>9%</td></tr>
            <tr><td>2,001 ~ 10,000</td><td>13%</td></tr>
            <tr><td>10,001 ~ 25,000</td><td>15%</td></tr>
            <tr><td>25,001 ~ 100,000</td><td>17%</td></tr>
            <tr><td>100,001 ~ 200,000</td><td>22%</td></tr>
            <tr><td>200,001 ~ 300,000</td><td>26%</td></tr>
            <tr><td>300,001 ~ 500,000</td><td>28%</td></tr>
            <tr><td>500,001 ~ 700,000</td><td>30%</td></tr>
            <tr><td>700,001 ~ 800,000</td><td>35%</td></tr>
            <tr><td>800,001 ~ 10,000,000</td><td>38%</td></tr>
        </tbody>
    </table><br/>
  
    <h2>Claiming Your Mining Income</h2><br/>
    <p>Mining income will not be automatically credited to your account. You need to log in every day and click to claim it!</p><br/>
    <ol>
        <li>Click [Mining] to enter</li>
        <li>Then click to receive</li>
    </ol><br/>
    <p><strong>Note:</strong> If you don’t click on it that day, you will lose the mining income for that day. The daily profit time is the time of your first investment.</p><br/>
  
    <h2>Invitation & Rewards</h2><br/>
    <p>Invitation to purchase mining tools can get level 3 rebates (10%, 1%, 1%).</p>
    <p><strong>Rewards for inviting new people:</strong> If you meet the above conditions, please contact customer service to apply for rewards!</p>
    <p>Withdraw money anytime, 7*24 hours! Deposits and withdrawals are automatically credited to your account within 1-30 minutes!</p><br/>
  
    <h2>Invitation Deposit Bonus</h2><br/>
    <p>Obtain 12% of the commission for level 3 team members</p>
    <p><strong>Example:</strong></p>
    <ul>
        <li>Level A = 10%</li>
        <li>Level B = 1%</li>
        <li>Level C = 1%</li>
    </ul><br/>
  
    <h2>How is the Team’s Commission Calculated?</h2><br/>
    <p>If you have 10 first-level members and each invites 10 people to join, then you have 10 * 10 = 100 second-level members. Each of these 100 second-level members invites 10 people to join. You have 100 * 10 = 1,000 third-level members.</p>
    <p>Your daily team commission income is 10 + 1 + 1 = 12%</p>
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
            className="content absolute left-50% top-60px h-310px w-90% translate-x-[-50%] overflow-y-auto p-5px text-black shadow"
            style={{ backgroundColor: "#f39acd" }}
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
