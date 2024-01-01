import { useContext } from "react";
import { AppContext } from "../App";

const Heading = () => {
  const { annualy, setAnnualy } = useContext(AppContext);

  return (
    <section className="w-full flex flex-col justify-center items-center mb-10 z-10">
      <h1 className="text-3xl font-bold text-grayish-blue mb-8">Our Pricing</h1>
      <div className="flex w-full justify-center items-center gap-5">
        <p className="font-montserrat text-light-grayish-blue font-semibold tracking-tighter">
          Annualy
        </p>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={() => setAnnualy(!annualy)}
            />
            <div className="w-12 h-7 rounded-full dark:bg-gradient-to-r from-gradient-start to-gradient-end peer-checked:after:translate-x-full peer-checked:border-white after:content-[''] focus:outline-none after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <p className="font-montserrat text-light-grayish-blue font-semibold tracking-tighter">
          Monthly
        </p>
      </div>
    </section>
  );
};

export default Heading;
