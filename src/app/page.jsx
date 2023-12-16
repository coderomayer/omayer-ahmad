/* eslint-disable */
// Code where all ESLint rules are disabled
/* eslint-enable */

import AboutMe from "@/components/AboutMe";
import ProjectSection from "@/components/PortfolioProjects ";

import WorkExperience from "@/components/WorkExperience";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <section className="p-12 md:p-32 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-zinc-700 darken">

      <div className="fixed bottom-0 left-10 flex flex-col items-center gap-6">
        <div className="flex flex-col gap-6 text-white text-[16px]">
          <BsLinkedin />
          <BsGithub></BsGithub>
        </div>
        <div className="border-l border-white h-32"></div>
      </div>

      <div className="text-white">
        <h4 className='text-lime-400 font-mono'>Hi, my name is</h4>

        <h2 className="text-4xl md:text-7xl font-Poppins font-extrabold my-3 relative">
          <span className="bg-gradient-to-br from-gray-100 to-gray-400 darken text-transparent bg-clip-text">
            Omayer Ahmad.
          </span>
        </h2>

        <h2 className="text-4xl md:text-6xl font-Poppins font-bold text-gray-400">JavaScript & React Enthusiast</h2>
        <p className='md:w-2/4 font-Inter font-light my-3 text-gray-400 '>
          Aspiring front-end developer with a focus on JavaScript and React.
          Familiar with Node.js and MongoDB, I'm on a journey to deepen my
          understanding of JavaScript
        </p>
      </div>

      {/* About me */}
      <AboutMe></AboutMe>

      {/* WorkExperience */}
      <WorkExperience></WorkExperience>

      {/* Portfolio Projects */}
      <ProjectSection></ProjectSection>

    </section>
  );
};

export default Home;
