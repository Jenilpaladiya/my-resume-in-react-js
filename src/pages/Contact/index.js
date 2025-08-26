import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithubSquare,
  FaMailBulk,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../../hooks/useAnimation";
import { BottomLine } from "../../components";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x7f69um",
        "template_hiov0nf",
        form.current,
        "2OSlOMkqc3K6fp6qF"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="parent py-24 mt-4">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-neutral text-center">Feel Free To Contact Me</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <BottomLine />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Me</h2>



          <form ref={form} onSubmit={handleSend} className="space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input className="input-field" type="text" name="name" id="name" placeholder="Name" required />
              <input className="input-field" type="email" name="email" id="email" placeholder="Email" required />
            </div>

            {/* Subject */}
            <input className="input-field" type="text" name="subject" id="subject" placeholder="Subject" required />

            {/* Phone Number (Optional) & Company (Optional) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input className="input-field" type="tel" name="phone" id="phone" placeholder="Phone Number (Optional)" />
              <input className="input-field" type="text" name="company" id="company" placeholder="Company/Organization (Optional)" />
            </div>

            {/* Reason for Contact */}
            <select className="input-field" name="reason" id="reason" required>
              <option value="" disabled selected>Reason for Contact</option>
              <option value="job">Job Inquiry</option>
              <option value="freelancer">Freelancer</option>
              <option value="collaboration">Collaboration</option>
              <option value="general">General Inquiry</option>
              <option value="other">Other</option>
            </select>

            {/* Message */}
            <textarea className="input-field" name="message" id="message" cols="30" rows="5" placeholder="Message" required></textarea>

            {/* Submit Button */}
            <button type="submit" className="primary-button flex items-center gap-2">
              <span>Send</span>
              <MdSend />
            </button>
          </form>
        </motion.div>


        <motion.div
          className="space-y-6"
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          {/* Heading */}
          <h2 className="text-2xl font-medium">Contact Info</h2>

          {/* Description */}
          <p className="text-neutral-600">
            I'm a skilled <span className="font-semibold text-primary">Web and WordPress Designer </span> 
            with over a year of experience at Axone Infotech.
            <br />
            Proficient in <span className="font-semibold text-primary">HTML5, CSS3, Bootstrap, jQuery, JavaScript, and WordPress development with Elementor</span>.
            <br />
            Dedicated to continuous learning and eager to embrace new challenges.
          </p>

          {/* Contact Details */}
          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300" />
            <h3 className="font-medium text-primary">Jenil</h3>
          </div>
          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300" />
            <h3 className="font-medium text-primary">+49 15771352278</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl mr-8 hover:text-primary cursor-pointer duration-300" />
            <h3 className="font-medium text-primary">jenilpaladiya15@gmail.com</h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300" />
            <h3 className="font-medium text-primary">Fritz-Werner-Straße 25, 12107</h3>
          </div>

          {/* Resume Button */}
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/1kjtaIVzhPJDm7QZBVpU0qAOLU8qWsNnk/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-80 transition duration-300"
            >
              My Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-neutral">Social</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            <a href="https://www.linkedin.com/in/jenil-paladiya/" target="blank" className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Jenilpaladiya/" target="blank" className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300">
              <FaGithubSquare />
            </a>
            <a href="mailto:jenilpaladiya15@gmail.com" target="blank" className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300">
              <FaMailBulk />
            </a>
            <a href="https://www.instagram.com/kanji.____/" target="blank" className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300">
              <FaInstagramSquare />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
