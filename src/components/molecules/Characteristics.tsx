import { useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { getGenerals } from '../../lib/getGenerals';

type MetricParts = {
  numericValue: number;
  prefix: string;
  suffix: string;
};

const parseMetricValue = (value: string): MetricParts => {
  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);

  if (!match) {
    return {
      numericValue: 0,
      prefix: '',
      suffix: value,
    };
  }

  return {
    prefix: match[1],
    numericValue: Number(match[2]),
    suffix: match[3],
  };
};

const useCountUp = (targetValue: string, isVisible: boolean) => {
  const { numericValue, prefix, suffix } = useMemo(() => parseMetricValue(targetValue), [targetValue]);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1300;
    const start = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(numericValue * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue]);

  const formattedValue = Number.isInteger(numericValue)
    ? Math.round(displayValue).toString()
    : displayValue.toFixed(1);

  return `${prefix}${formattedValue}${suffix}`;
};

const MetricCard = ({
  value,
  text,
  visible,
  index,
}: {
  value: string;
  text: string;
  visible: boolean;
  index: number;
}) => {
  const animatedValue = useCountUp(value, visible);

  return (
    <article
      className='group relative overflow-hidden rounded-[2.4rem] border border-gris-200 bg-white px-6 py-8 text-center shadow-[0_18px_35px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.09)]'
      style={{
        transitionDelay: `${index * 90}ms`,
      }}
    >
      <div className='absolute inset-x-0 top-0 h-[0.35rem] bg-gradient-to-r from-transparent via-tertiary to-transparent opacity-60'></div>
      <span className='block text-[4.8rem] font-semibold leading-none text-secondary tablet:text-[5.6rem]'>
        {animatedValue}
      </span>
      <p className='mt-4 text-[1.6rem] font-medium text-gris-300'>{text}</p>
    </article>
  );
};

const Characteristics = () => {
  const { characteristics } = getGenerals();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  const swiperOptions = {
    direction: 'horizontal' as const,
    slidesPerView: 1.12,
    slidesPerGroup: 1,
    spaceBetween: 16,
    pagination: {
      el: '.pagination',
      clickable: true,
      type: 'bullets' as const,
    },
    modules: [Pagination],
  };

  return (
    <div ref={sectionRef} className='w-full mt-20'>
      <div className='hidden gap-5 laptop:grid laptop:grid-cols-4'>
        {characteristics.map(({ value, text }, index) => (
          <MetricCard key={`${text}-${index}`} value={value} text={text} visible={isVisible} index={index} />
        ))}
      </div>

      <div className='laptop:hidden'>
        <Swiper {...swiperOptions} className='mySwiper py-4'>
          {characteristics.map(({ value, text }, index) => (
            <SwiperSlide key={`${text}-${index}`}>
              <MetricCard value={value} text={text} visible={isVisible} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        <section className='pt-5'>
          <div className='pagination mx-auto flex justify-center gap-[1.2rem]' />
        </section>
      </div>
    </div>
  );
};

export default Characteristics;
