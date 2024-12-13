import Caurosel from "../pages/caurosel/Caurosel";
// import img1 from "../assets/images/hero-bg.png";
// import img2 from "../assets/images/hero-bg.png";
// import img3 from "../assets/images/hero-bg.png";
// import img4 from "../assets/images/hero-bg.png";

const Background = () => {
  // const slides = [img1, img2, img3, img4];
  const dataSet = [
    {
      header: "Bring Nature Into Your Home",
      text: "Get Everything with one click!",
      bg:"blue"
    },
    {
      header: "Don't Miss Our Daily Amazing Deals",
      text: "Sign up for the Weekly Newsletters",
       bg:"yellow"
    },
    {
      header: "Fresh Vegetables Big Discount",
      text: "Save up to 60% off on Your First Order",
       bg:"blue"
    },
    {
      header: "Best Organic Foods in Town",
      text: "Order fresh produce every day",
      bg:"yellow"
    },
  ];

  return (
    <div className="w-full relative">
      <Caurosel  dataSet={dataSet} />
    </div>
  );
};

export default Background;
