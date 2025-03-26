// App.js
import React from "react";
import "./App.css";
import Header from "./component/Header";
import ContactBtn from "./component/ContactButton";

import Profile from "./component/Profile";
import SocialLinks from "./component/SocialLinks";
import InternshipItem from "./component/InternshipItem";
import ProjectItem from "./component/ProjectItem";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="min-h-full w-full bg-[#151415] text-[#ffffff]">
      <div className="mx-auto h-full max-w-screen-xl">
        <div className="relative h-full w-full p-5 sm:p-8 lg:p-0">
          <Header />
          <div className="h-full lg:fixed lg:inset-y-0 lg:w-[440px] lg:px-10 lg:py-12 xl:w-[520px] xl:py-20">
            <div className="flex h-full w-full flex-col justify-between">
              <Profile />
              <SocialLinks />
            </div>
          </div>
          <div className="h-full w-full lg:px-10 lg:py-12 lg:pl-[470px] xl:py-20 xl:pl-[600px]">
            <div className="mt-10 flex h-full w-full flex-col gap-y-8 sm:mt-14 sm:gap-y-14 lg:mt-0">
              <div className="flex flex-col gap-4 sm:gap-7">
                <h1 className="text-2xl font-extralight sm:text-4xl">
                  Passionate about building scalable web applications
                </h1>
                <div className="flex gap-x-3">
                  <ContactBtn />
                  <a
                    href="https://drive.google.com/file/d/1gN-_FfX5mas3BqEDOxs7q2Mm3agQlDrq/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#2d2c2d] hover:bg-[#2d2c2d]/70 text-[#ffffff] text-xs sm:text-sm rounded-md h-9 px-5 sm:h-11 sm:px-8">
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <hr className="border-zinc-500" />
                <h2 className="text-lg font-semibold sm:text-xl">
                  Internships and Training
                </h2>
                <InternshipItem
                  imageSrc="image/metacrafter.jpeg"
                  title="Training"
                  company="Metacrafter"
                  date="June 2024 - Aug 2024"
                />
                <InternshipItem
                  imageSrc="image/touchwood.jpeg"
                  title="Web Developer Intern"
                  company="Touchwood Technologies"
                  date="June 2023 - Aug 2023"
                />
              </div>
              <div className="flex flex-col gap-4">
                <hr className="border-zinc-500" />
                <h2 className="text-lg font-semibold sm:text-xl">
                  Latest Projects
                </h2>
                <ProjectItem
                  imageSrc="image/p2e.png"
                  title="Pedal to Earn: Blockchain-Based Bicycle Rental"
                  description="Published a research paper detailing the system’s design and impact. Implemented smart contracts for secure transactions and automated rewards"
                  githubLink="https://github.com/Soarbh-Srivastava"
                  websiteLink="https://example.com"
                />
                <ProjectItem
                  imageSrc="image/avm.png"
                  title="Autonomous Vehicle for Disaster Management"
                  description="Developed an IoT-powered autonomous vehicle capable of obstacle avoidance and real-time data transmission. Implemented sensor integration and memory-efficient algorithms for optimized navigation and hazard detection"
                  githubLink="https://github.com/Soarbh-Srivastava"
                  websiteLink="https://example.com"
                />
                <ProjectItem
                  imageSrc="image/saas.png"
                  title="Learning Management System (SAAS)"
                  description="Developed a platform to create, manage, and distribute study materials, enabling seamless collaboration among 100+ students"
                  githubLink="https://github.com/Soarbh-Srivastava"
                  websiteLink="https://example.com"
                />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
