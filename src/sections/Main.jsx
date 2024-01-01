import { contents } from "../constants";
import OfferCard from "../components/OfferCard";

const Main = () => {
  return (
    <section className="flex justify-center items-center max-md:flex-col max-md:gap-5">
      {contents.map((content, index) => (
        <OfferCard
          key={index}
          name={content.name}
          priceAnnualy={content.priceAnnualy}
          priceMonthly={content.priceMonthly}
          storage={content.storage}
          users={content.users}
          send={content.send}
          highlight={content.highlight}
        />
      ))}
    </section>
  );
};

export default Main;
