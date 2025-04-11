import fssc from "../../../assets/images/1x/brand1.png";
import bros from "../../../assets/images/1x/brand2.png";
import certifiedIso from "../../../assets/images/1x/brand3.png";
import haccp from "../../../assets/images/1x/brand4.png";
import { useTranslation } from "react-i18next";

const HomeRegulator = () => {
  const { t } = useTranslation();
  return (
    <div home-content="" className="regulatory-part mt-24px">
      <div home-content="" className="title">
        {t("regulatory_authority")}
      </div>
      <div
        home-content=""
        className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text colorful mt-$mg"
      >
        <div
          home-content=""
          className="regulatory-content grid grid-cols-2 gap-2"
        >
          <div home-content="" className="w-full">
            <img
              home-content=""
              src={fssc}
              className="w-full h-auto max-h-150px max-w-full rounded-[var(--card-radius)]"
            />
          </div>
          <div home-content="" className="w-full">
            <img
              home-content=""
              src={bros}
              className="w-full h-auto max-h-150px max-w-full rounded-[var(--card-radius)]"
            />
          </div>
          <div home-content="" className="w-full">
            <img
              home-content=""
              src={certifiedIso}
              className="w-full h-auto max-h-150px max-w-full rounded-[var(--card-radius)]"
            />
          </div>
          <div home-content="" className="w-full">
            <img
              home-content=""
              src={haccp}
              className="w-full h-auto max-h-150px max-w-full rounded-[var(--card-radius)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRegulator;
