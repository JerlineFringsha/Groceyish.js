import Header from "../../includes/Header";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import tomImage from "../../assets/images/tom.png";
import potImage from "../../assets/images/pot.png";
import peaImage from "../../assets/images/pea.png";
import cherryImage from "../../assets/images/cherry.png";
import broImage from "../../assets/images/bro.png";



const Explore = () => {

const responsive = {
  superLarge: {
    // Desktops
    
    breakpoint: { max: 4000, min: 1024 },
    items: 5, 
  },
  large: {
    // Tablets
    breakpoint: { max: 1024, min: 768 },
    items: 4, 
  },
  medium: {
    // Small tablets and larger phones
    breakpoint: { max: 768, min: 464 },
    items: 3, 
  },
  small: {
    // Mobile phones
    breakpoint: { max: 464, min: 0 },
    items: 2, 
  },
};
  const exploreData = [
    {
      title: "Tomato",
      description: "Get 50% off on fresh veggies.",
      image: tomImage,
    },
    {
      title: "Potato",
      description: "Buy 1 Get 1 Free on dairy products.",
      image: potImage,
    },
    {
      title: "Green Peas",
      description: "Up to 70% off on snacks.",
      image: peaImage,
    },
    {
      title: "Cherry",
      description: "Up to 70% off on snacks.",
      image: cherryImage,
    },
    {
      title: "Green Peas",
      description: "Up to 70% off on snacks.",
      image: peaImage,
    },
    {
      title: "Brocolli ",
      description: "Up to 70% off on snacks.",
      image: broImage,
    },
  ];
  return (
    <div >
      <Header title={"Explore Products"} />
      <div className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold mb-4">
          Explore Products
        </h1>
        <Carousel
          responsive={responsive}
          showDots={true}
          showThumbs={false}
          // infiniteLoop
          // autoPlay
          // interval={4000}
          showStatus={false}
          showArrows={true}
          emulateTouch
          className="custom-carousel"
        >
          {exploreData.map((item, index) => (
            <div key={index} className="relative p-2 mb-9">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-fit rounded-lg shadow-md"
              />
              <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-black p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Explore;
