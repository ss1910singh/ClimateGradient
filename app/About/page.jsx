"use client"
import React, { useState } from 'react';
import axios from "axios";
import Image from "next/image";

const AboutPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [Feedback, setFeedback] = useState("");
  const api="https://sheet.best/api/sheets/7c537f55-1fbd-4623-bd8e-52abe2f4becb";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Feedback);
    const data = {
      Feedback: Feedback
    }
    axios.post(api, data).then((response) => { 
      console.log(response);
      setFeedback("");
      setIsSubmitted(true);
    } );
  }
  return (
    <div className="bg-gradient-to-b from-sky-400 to-sky-200min-h-screen py-8 md:py-20 px-4 text-center ">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-6">About Us</h1>
        <p className="text-base md:text-lg">
          Welcome to <strong>ClimateGradient</strong>. Our mission is to provide a powerful platform for global cooperation and policy analysis in addressing climate change. With real-time data updates and a user-friendly interface, we aim to make a positive impact on the world&apos;s environmental challenges.
        </p>
      </div>

      <div className="w-full md:w-screen-lg mx-auto p-4 bg-white rounded-lg shadow-lg flex bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r ">
  <section className="mb-4 md:mb-12 w-full md:w-1/2 pr-4 border-r border-gray-300 pr-4">
    <div className="text-center">
      <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">Our Mission</h2>
      <Image
        src="/AB.webp"
        alt="Our Mission"
        className="w-40 md:w-64 h-40 md:h-64 rounded-full mx-auto mb-4"
        width={1000} height={1000}
      />
    </div>
    <p className="text-base md:text-lg text-center">
    Climate change is an urgent global issue. Our mission is to create a sustainable future by promoting adaptability to environmental challenges and reducing ecological footprints. Every action on this platform contributes to a better world for all. As the planet faces rising temperatures and extreme weather, it is our collective responsibility to tackle climate change. Through awareness and sustainable practices, we empower individuals and communities to combat this existential threat. Our commitment to environmental stewardship safeguards biodiversity, ensuring a resilient world where all beings thrive. Together, we can secure a sustainable future, preserving the planet&apos;s health for generations to come.
    </p>
  </section>

<section className="mb-4 md:mb-12 w-full md:w-1/2 pl-4">
    <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">Our Team</h2>
    <div className="flex flex-wrap -mx-2 md:-mx-4">
      {teamMembers.map((member, index) => (
        <div key={index} className="w-full md:w-1/2 p-2 md:p-4 ">
          <div className="bg-gray-100 rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105 duration-300">
            <Image
              src={member.image}
              alt={member.name}
              className="w-20 md:w-32 h-20 md:h-32 rounded-full mx-auto mb-2 md:mb-4"
              width={1000} height={1000}
              />
            <h3 className="text-lg md:text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-gray-600 text-sm md:text-base text-center">{member.role}</p>
            <div className="flex justify-center mt-2 md:mt-4">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
             {/* <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                <i className="fab fa-twitter"></i> Twitter
              </a> */}
               <a href={`mailto:${member.email}`} className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                <i className="far fa-envelope"></i> Email
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
</div> 
<div className="flex flex-col items-center justify-center h-screen">
        {isSubmitted ? (
          <div className="bg-white rounded-lg p-6 shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4 text-black">Feedback Submitted</h2>
            <p>Thank you for your feedback!</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit Another Feedback
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4 text-black">Feedback</h2>
            <input
              type="text"
              placeholder="Enter your feedback here"
              required
              className="border-2 border-black rounded-lg w-full py-2 px-4 mb-4 text-black"
              onChange={(e) => setFeedback(e.target.value)}
              value={Feedback}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        )}
      </div>


      <div className='text-white'>
      This website extracts and utilizes publicly available reports and data from various national and international institutions, organizations, and government entities.
      </div>
    </div>
  );
};

export default AboutPage;




{/* <div className="w-full md:w-screen-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
        <section className="mb-4 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">Our Mission</h2>
          <p className="text-base md:text-lg">
            Climate change is a pressing global issue. Our motivation is to create a sustainable future for everyone by fostering a world that is more adaptable to environmental challenges and mindful of its ecological footprint. Every action taken on this platform contributes to a better future for all.
          </p>
        </section>

        <section className="mb-4 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">Our Team</h2>
          <div className="flex flex-wrap -mx-2 md:-mx-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-2 md:p-4">
                <div className="bg-gray-100 rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105 duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 md:w-32 h-20 md:h-32 rounded-full mx-auto mb-2 md:mb-4"
                  />
                  <h3 className="text-lg md:text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{member.role}</p>
                  <div className="flex justify-center mt-2 md:mt-4">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                      <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href={`mailto:${member.email}`} className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                      <i className="far fa-envelope"></i> Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div> */}

// EVERYONE ADD UR DETAILS HERE
// const teamMembers = [
//   {
//     name: "Satish Singh",
//     role: "B.Tech 2nd Year (AI&DS)",
//     image: "/sat.jpg",
//     github: "https://github.com/ss1910singh",
//     linkedin: "https://www.linkedin.com/in/satish-singh-964b09278/",
// //    twitter: "https://twitter.com/your-twitter-handle",
//     email: "sat.sin.rt22@dypatil.edu",
//   },
//   {
//     name: "Sankalp Sathe",
//     role: "B.Tech 2nd Year (AI&DS)",
//     image: "/san.jpg",
//     github: "https://github.com/quantumscribe",
//     linkedin: "https://www.linkedin.com/in/sankalp-sathe-5ba396183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
// //    twitter: "https://twitter.com/your-twitter-handle",
//     email: "san.sat.rt22@dypatil.edu",
//   },
//   {
//     name: "Pranavi Shukla",
//     role: "B.Tech 2nd Year (AI&DS)",
//     image: "/pra.jpg",
//     github: "https://github.com/pranavishuklaa",
//     linkedin: "https://www.linkedin.com/in/pranavi-shukla-255879293/",
// //    twitter: "https://twitter.com/your-twitter-handle",
//     email: "pra.shu.rt22@dypatil.edu",
//   },
//   {
//     name: "Aakash Shedge",
//     role: "B.Tech 2nd Year (AI&DS)",
//     image: "/aa.jpg",
//     github: "https://github.com/Aakash2934",
//     linkedin: "https://www.linkedin.com/in/your-linkedin-handle",
// //    twitter: "https://twitter.com/your-twitter-handle",
//     email: "aak.she.rt22@dypatil.edu",
//   },
// ];
