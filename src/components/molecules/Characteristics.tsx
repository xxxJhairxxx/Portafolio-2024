import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'

const Characteristics = () => {

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
      <Swiper {...swiperOptions} className="mySwiper text-gris-400 py-4  ">
        <SwiperSlide className='text-center'>
          <span className='text-[5rem] font-[500] py-4'>2+</span>
          <p>Años de experiencia</p>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <span className='text-[5rem] font-[500] py-4'>250+</span>
          <p>Clientes</p>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <span className='text-[5rem] font-[500] py-4'>650+</span>
          <p>Proyectos Realizados</p>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
          <span className='text-[5rem] font-[500] py-4'>38</span>
          <p>Estudios</p>
        </SwiperSlide>
      </Swiper>
      <section className='py-6'>

        <div className='pagination mx-auto flex justify-center gap-[1.5rem]' />
      </section>

    </div>
  )
}

export default Characteristics;
