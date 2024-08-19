import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const SlideShow = () => {
  // Array of image details
  const logos = [
    { src: '/historiclogo/v1Logo.png', alt: 'Logo 1' },
    { src: '/historiclogo/v2Logo.png', alt: 'Logo 2' },
    { src: '/historiclogo/v3Logo.png', alt: 'Logo 3' },
    { src: '/historiclogo/v4Logo.png', alt: 'Logo 4' },
    { src: '/historiclogo/v5Logo.png', alt: 'Logo 5' },
    { src: '/historiclogo/v6Logo.png', alt: 'Logo 6' },
    { src: '/historiclogo/v7Logo.png', alt: 'Logo 7' },
    { src: '/historiclogo/v8Logo.png', alt: 'Logo 8' },
  ];
    

  return (
    <div className="lg:w-[40vw] md:w-[20] h-full">
      <div className="max-w-screen-lg mx-auto">
        <Swiper
          className="slide-carousel"
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 90,
            modifier: 1,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="h-300 max-w-[400px] flex justify-center items-center">
                <Image className='rounded-lg' src={logo.src} alt={logo.alt} width={300} height={300} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideShow;
