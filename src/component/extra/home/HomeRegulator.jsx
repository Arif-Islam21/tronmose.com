import fssc from "../../../assets/images/fssc.webp";
import bros from "../../../assets/images/bros.webp";
import certifiedIso from "../../../assets/images/certified_iso.webp";
import haccp from "../../../assets/images/haccp.webp";
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
              className="h-auto max-h-150px max-w-full w-auto rounded-[var(--card-radius)]"
            />
          </div>
          <div home-content="" className="w-full">
            <img
              home-content=""
              src={bros}
              className="h-auto max-h-150px max-w-full w-auto rounded-[var(--card-radius)]"
            />
          </div>
          <div home-content="" className="w-full">
            <img
              home-content=""
              src={certifiedIso}
              className="h-auto max-h-150px max-w-full w-auto rounded-[var(--card-radius)]"
            />
          </div>
          <div home-content="" className="w-full">
            <img
              home-content=""
              src={haccp}
              className="h-auto max-h-150px max-w-full w-auto rounded-[var(--card-radius)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRegulator;
