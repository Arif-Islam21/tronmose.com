import HomeReferImg from "../../../assets/images/home_refer20.webp";
const HomeRefer = () => {
  return (
    <div home-content="" className="mt-24px">
      <div home-content="" className="title flex items-center justify-between">
        <span home-content="">Activitys</span>
        <span home-content="" className="text-sm">
          See more&gt;
        </span>
      </div>
      <div className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-10px box-border h-120px flex items-center p-10px!">
        <img
          className="h-100px w-100px shrink-0 rounded-10px"
          src={HomeReferImg}
          alt="share_pic"
        />
        <div className="mx-5px block h-full flex-1">
          <div className="truncate2 text-16px">
            Refer 20 A-level members and get 8.8USDT rewards for free!
          </div>
          <div className="mt-10px text-right text-lg font-bold c-green">
            8.80 USDT
          </div>
        </div>
        <div className="ml-auto h-full flex items-center">
          <div className="i-ic:twotone-keyboard-double-arrow-right text-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeRefer;
