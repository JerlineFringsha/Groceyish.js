const Installment = () => {
  return (
    <div className="bg-custom-image relative">
      <div className="absolute inset-0 bg-button opacity-20 "></div>
      <div
        className="relative z-10 p-4 text-center "
      >
        <picture data-v-cf632b88="">
          <source
            srcSet="https://res.cloudinary.com/cloud-m98/image/upload/v1658221710/Groceyish/Groceyish-App.webp"
            media="(min-width: 1023px)"
            data-v-cf632b88=""
          />
          <img
            src="https://res.cloudinary.com/cloud-m98/image/upload/c_scale,w_400/v1658221710/Groceyish/Groceyish-App.webp"
            alt="Groceyish Mobile App"
            loading="lazy"
            data-v-cf632b88=""
            className="mx-auto mb-4" 
          />
        </picture>
        <h1 className="text-lg md:text-4xl mb-2 ">Shop Faster With Groceyish App</h1>
        <p className="mb-4">Available on both IOS & Android</p>
        <div className="flex justify-center space-x-4">
          <img
            src="https://res.cloudinary.com/cloud-m98/image/upload/f_webp,q_100,c_fit/v1658221710/Groceyish/app-store"
            aria-label="app-store"
            data-v-cf632b88=""
          />
          <img
            src="https://res.cloudinary.com/cloud-m98/image/upload/f_webp,q_100,c_fit/v1658221710/Groceyish/google-play"
            aria-label="google-play"
            data-v-cf632b88=""
          ></img>
        </div>
      </div> 
    </div>
  );
};

export default Installment;
