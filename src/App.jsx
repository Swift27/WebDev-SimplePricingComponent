import { Heading, Main } from "./sections";
import { bgBottom, bgTop } from "./assets/images";
import { useState, createContext } from "react";

export const AppContext = createContext();

export default function App() {
  const [annualy, setAnnualy] = useState(true);

  return (
    <div className="bg-very-light-grayish-blue max-w-[1440px] w-[80%] max-md:w-full max-md:m-0 m-auto mt-10 px-[10%] py-[10vh] rounded-xl relative">
      <AppContext.Provider value={{ annualy, setAnnualy }}>
        <img src={bgBottom} className="z-0 absolute bottom-0 left-0" />
        <img src={bgTop} className="z-0 absolute top-0 right-0" />
        <Heading />
        <Main />
      </AppContext.Provider>
    </div>
  );
}
