import React from "react";
import { Package, IdCard, CreditCard, PackageX } from "lucide-react";

interface PromoType {
  icon: React.ReactNode;
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
}

const packageIcon = () => <Package />;
const memberIcon = () => <IdCard />;
const creditIcon = () => <CreditCard />;
const refundIcon = () => <PackageX />;
const PromoItem = ({ icon, title1, title2, title3, title4 }: PromoType) => (
  <div className="rounded-xl flex lg:flex-row flex-col items-center gap-3 lg:px-6 px-4 py-2 lg:text-sm text-xs border  lg:py-2  lg:justify-center">
    {icon}
    <div className="flex flex-col gap-1">
      <p>
        {title1} <span className="uppercase font-bold">{title2}</span>
      </p>
      <p>
        {title3} <span className="uppercase font-bold">{title4}</span>
      </p>
    </div>
  </div>
);

const Promo = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 grid-rows-2 gap-4 lg:px-40 px-2 lg:container mt-8">
      <PromoItem
        icon={packageIcon()}
        title1="Vận chuyển"
        title2="Miễn phí"
        title3="Trong khu vực"
        title4="TP.HCM"
      />
      <PromoItem
        icon={memberIcon()}
        title1="Tích điểm Nâng hạng"
        title4="Thẻ thành viên"
      />
      <PromoItem
        icon={creditIcon()}
        title1="Tiến hành"
        title2="Thanh toán"
        title3="Với nhiều"
        title4="Phương thức"
      />
      <PromoItem
        icon={refundIcon()}
        title2="100% Hoàn tiền"
        title3="nếu sản phẩm lỗi"
      />
    </div>
  );
};

export default Promo;
