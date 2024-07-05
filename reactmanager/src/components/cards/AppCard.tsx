import { ReactNode } from "react";

interface AppCardProps {
  children: ReactNode;
}

const AppCard = ({ children }: AppCardProps) => {
  return (
    <>
      <div className="AppCard bg-white col-8 col-md-8 col-sm-11 col-lg-4 mx-auto container rounded rounded-3 mt-5 p-0 shadow-sm">
        {children}
      </div>
    </>
  );
};

export default AppCard;
