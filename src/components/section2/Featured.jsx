import Header from "../../includes/Header";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Veggies from "./veggies.json";
import tomatoImage from "../../assets/images/tom.png"; 
import potatoImage from "../../assets/images/pot.png"; 
import cucumberImage from "../../assets/images/pea.png"; 
import peaImage from "../../assets/images/bro.png"; 
import cherryImage from "../../assets/images/cherry.png";

const imageMapping = {
  "tomato.png": tomatoImage,
  "potato.png": potatoImage,
  "bro.png": peaImage,
  "cucumber.png": cucumberImage,
  "cherry.png": cherryImage,
};

const Featured = () => {
  const responsive = {
    superLarge: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    large: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    medium: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    small: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
        <Header title={"Featured Products"}/>
        <div className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold mb-4">Explore Products</h1>
        <Carousel
          responsive={responsive}
          showDots={true}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          emulateTouch
          infinite={true}
          autoPlay={false}
          className="custom-carousel"
        >
          {Veggies.map((item, index) => (
            <div key={index} className="relative p-2 mb-9">
              <img
                src={imageMapping[item.image]} // Use the mapped image
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                <p className="text-lg">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      
    </div>
  )
}

export default Featured
