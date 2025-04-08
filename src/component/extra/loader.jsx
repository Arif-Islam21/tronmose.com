
import "../../assets/css/custom_loader.css";

const Loader = () => {
  const popupStyle = {
    zIndex: 2006,
  };
  return (
    <div
      id="meHideFade"
      role="dialog"
      className="van-popup van-popup--center van-toast van-toast--middle van-toast--loading"
      style={popupStyle}
    >
      <div
        className="van-loading van-loading--circular van-toast__loading"
        aria-live="polite"
        aria-busy="true"
      >
        <span className="van-loading__spinner van-loading__spinner--circular">
          <svg className="van-loading__circular" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"></circle>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Loader;
