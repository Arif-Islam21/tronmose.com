import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"; // Optional, if using Axios

const Navbar = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/checkdepo");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data immediately when the component mounts
    fetchData();
  }, []);

  return (
    <div className=":uno: tab-bar-wrap tab-bar-wrap-26 fixed bottom-0 z-2">
      <nav className="tab-bar">
        <NavLink to="/home" className="tab-item">
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-ph:house-line-duotone c-$text-gray"
            ></div>
            <div tab-btn="" className="tab-item-label">
              {t("home")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/task" className="tab-item">
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-ic:twotone-task c-$text-gray task_mining"
            ></div>
            <div tab-btn="" className="tab-item-label">
              {t('mining')}
            </div>
          </div>
        </NavLink>
        <NavLink to="/team" className="tab-item">
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-solar:users-group-two-rounded-bold-duotone c-$text-gray"
            ></div>

            <div tab-btn="" className="tab-item-label">
              {t("team")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/vip" className="tab-item">
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-icon-park-twotone:vip-one c-$text-gray"
            ></div>

            <div tab-btn="" className="tab-item-label">
              {t("vip")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/me" className="tab-item">
          <div tab-btn="" id="tabItem" className="tab-item-inner">
            <div
              tab-btn=""
              className="tab-item-icon i-ph:user-duotone c-$text-gray"
            ></div>
            <div tab-btn="" className="tab-item-label">
              {t("me")}
            </div>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
