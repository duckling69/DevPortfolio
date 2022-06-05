import React from 'react'
import SectionTitle from '../components/SectionTitle'
import projects from '../data/projects'
import ProjectItem from './ProjectItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css/bundle';
import styled from 'styled-components';



const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  #projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper{}
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 40px;
    width: 40px;
    background:  rgb(99 102 241 );
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    transform: translate3d(0 50 0);
    color: rgb(229 231 235 );
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;


SwiperCore.use([Navigation]);
function Project() {
  return (
    <ProjectSectionStyle>

    <div id='projects' className=''>
    
      <SectionTitle id={projects}>Projects</SectionTitle>
      <div id='projects__allItems ' className='h-100'>
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
          >
        
        {projects.map((project, index) => {
              if (index >= 4) return;
              return (
                <SwiperSlide key={project.title}>
                  <ProjectItem
                    title={project.title}
                    imageurl={project.imageurl}
                    tech={project.tech}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
    </ProjectSectionStyle>

  )
}

export default Project