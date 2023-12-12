/* eslint-disable */
// Code where all ESLint rules are disabled
/* eslint-enable */


import AboutMe from "@/components/AboutMe";



const Home = () => {
  return (
    <section className=" p-12 md:p-24 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-zinc-700 darken">

      <div className="text-white">
        <h4 className='text-lime-400 font-mono'>Hi, my name is</h4>

        <h2 className="text-4xl md:text-6xl font-DM font-bold my-3 relative">
          <span className="bg-gradient-to-br from-gray-100 to-gray-400 darken text-transparent bg-clip-text">
            Omayer Ahmad
          </span>
        </h2>

        <h2 className=" text-4xl md:text-6xl font-Inter font-bold text-gray-400">JavaScript & React Enthusiast</h2>
        <p className='md:w-2/4 font-Inter font-light my-3 text-gray-400 '>
          Aspiring front-end developer with a focus on JavaScript and React.
          Familiar with Node.js and MongoDB, I m on a journey to deepen my
          understanding of JavaScript
        </p>
      </div>

      {/* About me */}

      <AboutMe></AboutMe>


    </section>
  );
};

export default Home;
