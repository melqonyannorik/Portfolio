import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import "../Contact/Contact.style.scss";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_0w9h1dk", "template_d6ridk8", form.current, {
        publicKey: "SeeyCysdVJ-5Rxxv8",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          console.log("message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  return (
    <motion.div className="contact">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>
      <div className="contact-section">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Let's talk</h1>
          <p>
            I am always open to new projects and cooperation. Fill out the form
            below or contact me
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoIosMail />
              <p>melqonyannorik@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhoneVolume />
              <p>+374 77 56 18 06</p>
            </div>
            <div className="contact-detail">
              <FaLocationDot />
              <p>Armavir, Armenia</p>
            </div>
          </div>
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="contact-right"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />{" "}
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit">Submit now</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
