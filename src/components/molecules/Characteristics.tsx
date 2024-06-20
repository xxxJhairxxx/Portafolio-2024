import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'
import { getGenerals } from '../../lib/getGenerals';



const Characteristics = () => {

  const { characteristics } = getGenerals();

  const swiperOptions: any = {
    direction: 'horizontal',
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      720: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
    },
    speed: 1000,
    loop: false,
    slideToClickedSlide: false,
    autoplay: false,
    pagination: {
      el: '.pagination',
      clickable: true,
      type: 'bullets',
    },

    modules: [Pagination, Autoplay],
  }


  return (
    <div className='w-full tablet:w-[60%] mx-auto laptop:w-full pt-8'>
      <Swiper {...swiperOptions} className="mySwiper text-gris-400 py-4">
        {characteristics.map(({ value, text }, index) =>
          <SwiperSlide key={index} className='text-center'>
            <span className='text-[5rem] font-[500] py-4'>{value}</span>
            <p>{text}</p>
          </SwiperSlide>
        )}
      </Swiper>
      <section className='py-6 laptop:hidden'>
        <div className='pagination mx-auto flex justify-center gap-[1.5rem]' />
      </section>

    </div>
  )
}

export default Characteristics;
