import React, { useState } from "react";
import SwiperCore, { Controller, Autoplay } from "swiper";
import { anthony, james, lazarus, lucky, sunday } from "../../../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination } from "swiper";
const Testi = [
  {
    name: "Kenedy James",
    para: `I have been driving as a commercial driver for over 5 years
  but the exceptional service and ease of getting a car from
  Rapyd was amazing. I look forward to the day I'll have the
  original documents as I already own this car in my mind.`,
    imgSrc: james,
  },
  {
    name: "Anthony",
    para: `My experience with Rapyd has left me with nothing but a grateful heart. This is more than a business for me, Rapyd Cars empowered me to achieve my personal goals. Thank you Rapyd Cars.`,
    imgSrc: anthony,
  },
  {
    name: "Sunday",
    para: `Sometimes I have the impression that Rapyd is not a Nigerian company because of how fast and excellent their services are. The amount of concern they have for their Driver is highly commendable and I am more than grateful to be on this journey to own my own car. Thank you Rapyd.`,
    imgSrc: sunday,
  },
  {
    name: "Lucky",
    para: `I feel like my name was what I experienced with Rapyd Cars. I feel so Lucky to be associated with a company like Rapyd Cars. Thank Rapyd for this opportunity to be my own Boss. `,
    imgSrc: lucky,
  },
  {
    name: "Lazarus",
    para: `Rapyd cars was my saviour after the ugly experience I had during the pandemic. I enjoyed the best of treatment as a driver that any organization has ever given to me. `,
    imgSrc: lazarus,
  },
];
const Testimonial = () => {
  const [controlledSwiper, setControlledSwiper] = useState(0);
  let changeText = Testi[controlledSwiper];
  SwiperCore.use([Autoplay]);
  const params = {
    slidesPerView: window.innerWidth < 767 ? 1 : 3,
    spaceBetween: 10,
    loop: true,
    modules: [Pagination, Controller],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
  };

  return (
    <section
      id="testimonial"
      className="py-20 lg:pl-24 md:pl-8 md:p-0 p-6 flex justify-center "
    >
      <div className="w-full max-w-[100rem]">
        <h1 className="text-4xl font-extrabold mt-16">Testimonials</h1>

        <div className="relative md:mt-24 mt-8">
          <div className="md:block hidden absolute rounded-xl lg:w-96 w-60 lg:h-[781.77px] h-[640px] bg-[#FDE6E7] right-[10.4em] -top-28 -z-50" />
          <div className="flex md:flex-row flex-col-reverse gap-0">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue-700 bg-ourCar bg-cover lg:h-96 h-72 md:rounded-tl-md md:rounded-bl-md xl:p-14 p-7">
                <p className="text-white xl:text-base text-sm md:mt-0 mt-6">
                  {changeText.para}
                </p>
                <h3 className="text-white lg:text-2xl text-xl font-bold xl:mt-14 mt-7">
                  {changeText.name}
                </h3>
              </div>
              <div className="md:absolute bottom-0 md:mt-0 mt-4">
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="md:ml-auto md:px-0 px-8 flex justify-center -mb-5">
              <div className="lg:w-[684px] md:w-[432px] resize md:shadow-none shadow-xl shadow-blue-900/50 lg:h-[509.8px] md:h-96">
                <Swiper
                  {...params}
                  controller={{ control: controlledSwiper }}
                  onSlideChange={(e) => setControlledSwiper(e.realIndex)}
                  className="flex items-center"
                >
                  {Testi.map((items, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={items.imgSrc}
                        alt=""
                        className="object-cover h-full w-full"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* <div className="flex gap-4">

                <div className="lg:w-96 w-60 lg:h-[509.8px] h-96">
                  <img
                    src={slide1}
                    alt=""
                    className="object-cover h-full w-full rounded-md"
                  />
                </div>
                <div className="lg:w-[150px] w-24 lg:h-[509.8px] h-96">
                  <img
                    src={slide1}
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="lg:w-[150px] w-24 lg:h-[509.8px] h-96">
                  <img
                    src={slide1}
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
