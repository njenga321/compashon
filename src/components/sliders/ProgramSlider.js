import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'swiper/css';
import 'swiper/css/pagination';
import './ProgramSlider.css';
import { Autoplay, Pagination } from 'swiper/modules';
import SlideMotion from '../animations/SlideMotion';
import { TiInfoLarge } from 'react-icons/ti';

function ProgramSlider() {

    // Array of program details
    const programDetails = [
      {
          title: 'FOOD SECURITY',
          description: 'Fight Hunger, One Meal at a Time and Save Life',
          text: 'Helping to provide sustainable food sources for homeless children across various regions.',
          imgSrc: 'https://i.pinimg.com/564x/85/ec/b7/85ecb7ca01f126643d763049f8074c5d.jpg',
          raised: 98000,
          goal: 150000,
          progress: 30,
      },
      {
          title: 'HEALTHCARE',
          description: 'Provide Access to Essential Healthcare',
          text: 'Ensuring essential healthcare services are available for all in need.',
          imgSrc: 'https://i.pinimg.com/564x/44/83/79/448379d69a7d4bb821a1173a67bd8b13.jpg',
          raised: 54000,
          goal: 100000,
          progress: 38,
      },
      {
          title: 'EDUCATION',
          description: 'Support Education for Underprivileged Children',
          text: 'Empowering underprivileged children through access to quality education.',
          imgSrc: 'https://i.pinimg.com/564x/5e/b3/3b/5eb33b1831d31d713b51dc1428f58816.jpg',
          raised: 75000,
          goal: 150000,
          progress: 40,
      },
      {
          title: 'HOUSING',
          description: 'Build Homes, Rebuild Lives For a Better Tomorrow',
          text: 'Providing secure housing for homeless families in desperate need.',
          imgSrc: 'https://i.pinimg.com/564x/c8/33/7b/c8337b0cf1217820735e2e1a7cc059b4.jpg',
          raised: 63000,
          goal: 120000,
          progress: 52,
      },
      {
          title: 'CHILD WELFARE',
          description: 'Protect and Nurture Vulnerable Children',
          text: 'Providing protection and care for vulnerable and at-risk children.',
          imgSrc: 'https://i.pinimg.com/564x/a8/ec/05/a8ec05ef3a92cf90bc0e5081565f92d2.jpg',
          raised: 48000,
          goal: 100000,
          progress: 48,
      },
  ];
  

    return (
        <>
        <section className="programSection">
            <div className="container">
                <SlideMotion delay={0.3} direction='right'>
                    <div className="section-title">
                    <span className='subtitle'>Be Part of Us</span>
                        <h2 className='title-h2'>Our Programs</h2>
                    </div>
                </SlideMotion>
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
                320: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
          >
            {programDetails.map((program, index) => (
                <SwiperSlide key={index}>
                  <div className="programSection-box">
                      <div className='programSection-inner'>
                          <img 
                              loading="lazy" 
                              decoding="async" 
                              width="300" 
                              height="180" 
                              src={program.imgSrc} 
                              alt={program.title} 
                          />
                          <div className="icon d-flex align-items-center justify-content-center">
                              <span><TiInfoLarge /></span>
                          </div>
                          <div className='program-desc'>
                              <p className='program-title mb-3'>{program.title}</p>
                              <h3 className='text-description mb-3'>{program.description}</h3>
                              <p className='program-text mb-0'>{program.text}</p>
                          </div>
                          <div className="progress-wrapper">
                              <ProgressBar className="custom-progress" now={program.progress} />
                              <span className="progress-label" style={{ left: `${program.progress}%` }}>{`${program.progress}%`}</span>
                              <div className="d-flex raised-goal justify-content-between mt-3">
                                  <span>Raised: <strong>${program.raised.toLocaleString()}</strong></span>
                                  <span className="goal">Goal: <strong>${program.goal.toLocaleString()}</strong></span>
                              </div>
                          </div>
                      </div>
                    </div>
                </SwiperSlide>
              
            ))}
          </Swiper>
          </div>
          </section>
        </>
    )
}

export default ProgramSlider;
