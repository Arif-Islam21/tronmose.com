const HomeUserInfo = ({ userInfo }) => {
  return (
    <div home-content="" className="user-info">
      <div home-content="" className="content">
        <div home-content="" className="user">
          <div home-content="" className="name">
            {userInfo?.user?.email
              ? userInfo.user.email
              : userInfo?.user?.phone}
          </div>

          <div home-content="" className="level items-center">
            <div
              home-content=""
              className="i-mingcute:vip-2-fill mr-2px text-14px c-$btn-text"
            ></div>
            TRONMOSE{userInfo?.user?.my_vip}
          </div>
        </div>
        <div home-content="" className="balance">
          {/* <div className="i-ph:currency-dollar-fill mr-3px text-22px c-$btn-text"></div> */}
          {parseFloat(userInfo?.user?.withdraw_balance || 0).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default HomeUserInfo;
