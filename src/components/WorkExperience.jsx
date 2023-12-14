/* eslint-disable react/no-unescaped-entities */

const WorkExperience = () => {
    return (
      <section className="text-gray-400 my-8 md:my-16 lg:my-20 xl:my-36">
  
        <div className="flex items-center md:w-2/4 mb-4 md:mb-14">
          <span className="text-2xl font-Inter font-bold my-2 text-white">Work Experience</span>
          <div className="flex-grow border-b ml-4"></div>
        </div>
  
        <div className="md:flex gap-8 font-DM">
  
          <div className="flex-1 mb-8 md:mb-0">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              I've been privileged to serve as a front-end developer at <a href="https://bizup360.net/" className="text-lime-400 hover:underline">BizUp 360</a> since 2022. In this role, I have contributed to meaningful projects, bringing creative ideas to life through code.
            </p>
  
            <p className="my-4 text-base md:text-lg lg:text-xl xl:text-2xl">
              My responsibilities involve developing user interfaces that prioritize user experience and accessibility. Collaborating with cross-functional teams, I have gained valuable insights into crafting solutions that meet both client and user expectations.
            </p>
  
        
          </div>
  
          {/* Additional content if needed for the right side */}
  
        </div>
      </section>
    );
  };
  
  export default WorkExperience;
  