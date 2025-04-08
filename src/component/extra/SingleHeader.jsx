import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const SingleHeader = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <div>
      <div nav1="" className="navigation">
        <div nav1="" className="navigation-content">
          <div
            nav1=""
            onClick={handleBackClick}
            className="h-full flex cursor-pointer items-center"
          >
            <div
              nav1=""
              className="icon i-material-symbols-arrow-back-ios-new-rounded"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHeader;
