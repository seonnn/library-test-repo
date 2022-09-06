import React from 'react';
import { weather } from 'src/utils/dummy';
import styled from 'styled-components';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Weather {
  temp: number;
  precip: number;
  cloud: number;
}

const Weather = () => {
  return (
    <Container>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={4}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {weather.map((el: Weather, idx: number) => {
          return (
            <SwiperSlide key={idx}>
              <WeatherBox>
                <span>기온: {el.temp}</span>
                <span>강수 확률: {el.precip}</span>
                <span>하늘: {el.cloud}</span>
              </WeatherBox>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Weather;

const Container = styled.div`
  border: 1px solid gray;
  margin-top: 1rem;
  display: flex;
`;

const WeatherBox = styled.div`
  border: 1px solid tomato;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 10rem;
`;
