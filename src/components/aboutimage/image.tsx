import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const SlideShow = () => {
  return (
    <div className="w-[40%] h-full ">
      <div className="max-w-screen-lg mx-auto ">
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
          <SwiperSlide>
            <div className="bg-indigo-50 rounded-2xl h-200 max-w-[400px] flex justify-center items-center">
              <Image src="/logo/logo.png" alt="Logo 1" width={300} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-indigo-50 rounded-2xl h-200 max-w-[400px] flex justify-center items-center">
              <Image src="/logo/logo.png" alt="Logo 2" width={300} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-indigo-50 rounded-2xl h-200 max-w-[400px] flex justify-center items-center">
              <Image src="/logo/logo.png" alt="Logo 3" width={300} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-indigo-50 rounded-2xl h-200 max-w-[400px] flex justify-center items-center">
              <Image src="/logo/logo.png" alt="Logo 4" width={300} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-indigo-50 rounded-2xl h-200 max-w-[400px] flex justify-center items-center">
              <Image src="/logo/logo.png" alt="Logo 5" width={300} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-indigo-50 rounded-2xl h-200 max-w-[400px] flex justify-center items-center">
              <Image src="/logo/logo.png" alt="Logo 6" width={300} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-indigo-50 rounded-2xl h-200 max-w-[400px] flex justify-center items-center">
              <Image src="/logo/logo.png" alt="Logo 6" width={300} height={300} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-indigo-50 rounded-2xl h-200 max-w-[400px] flex justify-center items-center">
              <Image src="/logo/logo.png" alt="Logo 6" width={300} height={300} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SlideShow;
