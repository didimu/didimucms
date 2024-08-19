import React from "react";
import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

const Slider = (props) => {
  return (
    <section  className="sliderSection">
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이드</h2> 
          <Swiper
            
            loop={true} 
            speed={300}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[ Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className="slider bg bg_01">
                <div className="text_wrap_posi">
                  <h3>
                    slide_1
                  </h3>
                  <p>
                    재능은! 노력 끝에서 발견된다.
                    <br />
                    어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고
                    생각합니다.
                  </p>
                  <Link to="/" className="more button-red">
                    더 알아보기
                  </Link>
                </div> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider bg bg_02">
                <div className="text_wrap_posi">
                  <h3>
                    slide_2
                  </h3>
                  <p>
                  그대의 하루 하루를
                    <br />
                    그대의 마지막 날이라고 생각하라 
                  </p>
                  <Link to="/" className="more button-red">
                    더 알아보기
                  </Link>
                </div> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider bg bg_03">
                <div className="text_wrap_posi">
                  <h3>
                    slide_3
                  </h3>
                  <p>
                  길을 잃는 다는 것은 
                    <br />
                    곧 길을 알게 된다는 것이다.
                  </p>
                  <Link to="/" className="more button-red">
                    더 알아보기
                  </Link>
                </div> 
              </div>
            </SwiperSlide>
          </Swiper> 
      </div>
    </section>
  );
};

export default Slider;