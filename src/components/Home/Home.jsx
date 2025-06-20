import "../Home/Home.style.scss";
import photo from "../../assets/photo.png";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Link } from "react-router";
import { delay, motion } from "framer-motion";

const Home = () => {
  const skills = [
    "Frontend Engineer",
    "React.js developer",
    "Redux",
    "Git",
    "Anime Fan",
    "Scss",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setSubIndex((prev) => prev - 1);
        } else {
          setSubIndex((prev) => prev + 1);
        }

        if (!isDeleting && subIndex === skills[index].length) {
          setIsDeleting(true);
        }

        if (isDeleting && subIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % skills.length);
        }
      },
      isDeleting ? 50 : 200
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);
  return (
    <>
      <aside>
        <motion.div
          className="main_container"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1>
            Hi,
            <span className="text_im">
              I'm
              <span className="name_color"> Norik</span>
            </span>
          </h1>
          <h1>
            <span>{`${skills[index].substring(0, subIndex)}`}</span>
            <span>|</span>
          </h1>
          <div className="container_cv">
            <div className="btn_block">
              <a
                href="/Norik-Melqonyan CV.pdf (1).pdf"
                download
                target="_blank"
              >
                <button>Download CV</button>
              </a>
            </div>
            <div className="src_block">
              <Link to={"https://github.com/melqonyannorik"}>
                <FaGithub />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/norik-melqonyan-6b6493283/"}
              >
                <FaLinkedin />
              </Link>
              <Link to={"https://web.telegram.org/a/"}>
                <FaTelegram />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="img_container"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="home-img">
            <div className="img-box">
              <div className="img-item">
                <img src={photo} alt="" />
              </div>
            </div>
          </div>
        </motion.div>
      </aside>
    </>
  );
};

export default Home;
