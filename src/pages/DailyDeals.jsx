import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import tomImage from '../assets/images/tom.png';
import potImage from '../assets/images/pot.png';
import peaImage from '../assets/images/pea.png';
import cherryImage from '../assets/images/cherry.png';
import broImage from '../assets/images/bro.png';


const DailyDeals = () => {
  const dailyDealsData = [
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
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-4">Daily Deals</h1>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={4000}
        showStatus={false}
        showArrows={true}
        emulateTouch
        centerMode={true}
        centerSlidePercentage={33.33} 
      >
        {dailyDealsData.map((deal, index) => (
          <div key={index} className="relative p-4">
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{deal.title}</h2>
              <p className="text-lg">{deal.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DailyDeals;

