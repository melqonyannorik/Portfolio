import "../About/About.style.scss";
import photo from "../../assets/photo.png";
import about_img from "../../assets/about_img.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import photoReact from "../../assets/Reactjs.png";
import photoJs from "../../assets/js.png";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";
import { work } from "../PortfolioWork";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="about-title"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>About me</h1>
        <img src={about_img} />
      </motion.div>
      <div className="about_section">
        <div className="about_left">
          <img src={photo} />
        </div>
        <div className="about_right">
          <div className="about_text">
            <p>
              I am a junior front-end developer with a passion for creating
              beautiful and functional websites. I am a team player and enjoy
              working collaboratively to create high-quality projects. I am a
              quick learner and always eager to take on new challenges. I am
              excited to put my skills to use and create amazing websites.
            </p>
          </div>
          <div className="about_action">
            <p>Name| Norik Melqonyan</p>
            <p>City| Armavir</p>
            <p>Phone| +(374) 77 56 18 06</p>
            <p>Birthday| 15-12-1995</p>
            <p>Email| melqonyannorik@gmail.com</p>
            <p>language| Armenian</p>
          </div>
        </div>
      </div>
      <div className="swiper_container">
        <h1>Projects and works on github</h1>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 2,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper"
        >
          {work.section.projects.map((item, index) => {
            return (
              <SwiperSlide key={index} className="mySwiper">
                <div
                  className="about_swiper"
                  style={{
                    backgroundImage:
                      item.images == "ReactJS"
                        ? `url(${photoReact})`
                        : `url(${photoJs})`,
                    backgroundColor:
                      item.images == "ReactJS" ? "#0D0628" : "#222F3E",
                  }}
                >
                  <p className="swiper_text">{item.text}</p>
                  <Link to={item.link}>
                    <u>Github to Link</u>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default About;
