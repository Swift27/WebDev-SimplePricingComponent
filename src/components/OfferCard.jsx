import { useContext } from "react";
import { AppContext } from "../App";

const OfferCard = ({
  name,
  priceAnnualy,
  priceMonthly,
  storage,
  users,
  send,
  highlight,
}) => {
  const { annualy, setAnnualy } = useContext(AppContext);

  return (
    <div
      className={` ${
        highlight
          ? "bg-gradient-to-b from-gradient-start to-gradient-end text-white py-7"
          : "bg-white text-dark-grayish-blue"
      } flex flex-col flex-1 justify-center items-center font-montserrat px-5 max-md:w-full border-light-grayish-blue rounded-lg shadow-2xl`}
    >
      <p className="font-semibold my-3">{name}</p>
      <h1 className="w-full text-4xl flex justify-center items-center font-bold border-light-grayish-blue border-b-[1px] pb-5">
        <span className="text-3xl mr-1">$</span>
        {annualy ? priceAnnualy : priceMonthly}
      </h1>
      <p className="paragraph border-light-grayish-blue border-b-[1px] py-3">
        {storage}
      </p>
      <p className="paragraph border-light-grayish-blue border-b-[1px] py-3">
        {users}
      </p>
      <p className="paragraph border-light-grayish-blue border-b-[1px] py-3">
        {send}
      </p>
      <button
        className={`mt-5 py-3 border-2 border-white ${
          highlight
            ? "bg-white border-transparent text-gradient-end hover:bg-transparent hover:border-white hover:text-white"
            : "bg-gradient-to-r from-gradient-start to-gradient-end text-white hover:bg-white hover:text-gradient-end hover:border-gradient-end"
        }  font-bold tracking-widest w-full rounded-lg mb-5`}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default OfferCard;
