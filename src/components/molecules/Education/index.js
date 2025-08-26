import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Diploma in CSE
              </h3>
              <p className="text-sm text-neutral font-semibold">2024-2026</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I am currently studying in Msc Computer Science (3rd Semester) at IU International University of Applied Sciences , Frankfurter Allee 73a, 10247 Berlin
            </p>
          </div>

          {/* Web Designer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
              Web Designer <br/>(Galleri Heike Arndt DK)
              </h3>
              <p className="text-sm text-neutral font-semibold">09/2024 - 12/2024</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            Worked as a <b>WordPress Developer</b>, optimizing SEO for uploaded products. {" "}
              from Dicoding.
            </p>
          </div>

          {/* Web and Word press Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
              Web and Word press Developer<br/>(Axone Infotech India)
              </h3>
              <p className="text-sm text-neutral font-semibold">06/2022 - 11/2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            Experienced Web Designer proficient in <b>HTML5, CSS3, Bootstrap, jQuery, and JavaScript</b>.
            </p>
          </div>

          {/* SSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">BCA</h3>
              <p className="text-sm text-neutral font-semibold">2019 - 2022</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have passed the Bachelor of Computer Applications (BCA) with the
              highest result.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
