import Cards from "./Cards";

const HeroCards = () => {
  return (
    <div className="flex w-full ">
      <div className="relative flex w-1/2 bg-custom-image bg-cover text-white p-4 rounded-lg shadow-lg m-4 sm:m-6 md:m-8">
        <div className="absolute inset-0 bg-yellow-300 opacity-50 rounded-lg"></div>

        <div className="relative z-10">
          <Cards
            className="text-black"
            label={"Free Delivery"}
            header={"Free Delivery over 350 EGP"}
            text={"Shop 350 EGP product and get free delivery anywhere"}
            btn={"Shop Now"}
            bgColor="bg-yellow-300"
          />
        </div>
      </div>
      <div className=" relative flex w-1/2 bg-custom-image bg-cover text-white p-4 rounded-lg shadow-lg m-4 sm:m-6 md:m-8">
        <div className="absolute inset-0 bg-button opacity-50 rounded-lg"></div>
        <div className="relative z-10">
          <Cards
            label={"Best Deal"}
            header={"Organic Food"}
            text={"Save up to 60% off on your first order"}
            btn={"Order Now"}
            bgColor="bg-button"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
