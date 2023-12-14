import Image from "next/image";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const ProjectSection = () => {
  return (
    <section className="text-gray-400 my-8 md:my-16 lg:my-20 xl:my-36 relative">

      <div className="flex items-center md:w-2/4 mb-4 md:mb-14">
        <span className="text-2xl font-Inter font-bold my-2 text-white">Project Showcase</span>
        <div className="flex-grow border-b ml-4"></div>
      </div>

      <div className="md:flex font-DM items-center justify-center my-32 ">

        <div className="md:w-2/4 relative left-12 z-10 ">
          <h2 className="font-mono mb-3 text-lime-400 ">Blood Donation Application</h2>
          <p className="bg-zinc-800 border p-6 rounded-md text-sm md:text-base">
            MERN stack platform for seamless blood donation interactions. Features role-based access, responsive dashboards, efficient MongoDB integration, dynamic request management, and a robust CMS. Prioritizes user experience, security, and responsiveness, connecting donors with those in need.
          </p>
          <div className="my-4">
            <h3 className=" inline-block font-mono mr-4">React</h3>
            <h3 className=" inline-block font-mono">Firebase</h3>
          </div>
          <div className="flex gap-4">

            <a href="https://lifeflow-25df5.web.app/" target="_blank" aria-label="Link"><BsBoxArrowUpRight className="hover:text-lime-400 transition duration-700"></BsBoxArrowUpRight></a>

            <a href="https://lifeflow-25df5.web.app/" target="_blank"><BsGithub className="hover:text-lime-400 transition duration-700"></BsGithub></a>

          </div>
        </div>

        <div className="md:w-2/4 ">
          <a href="https://www.youtube.com/watch?v=jo3RB0oBhXI&t=527s" target="_blank"> <Image
            src="/blood-donation.png"
            alt="Blood Donation Application img"
            width={800}
            height={800}
            className="rounded-md opacity-70 hover:opacity-100 transition duration-300"
          /></a>
        </div>

      </div>


      {/* 2 */}

      <div className="md:flex font-DM items-center justify-center my-20 ">

        <div className="md:w-2/4 relative right-12 z-10 order-2 ">
          <h2 className="font-mono mb-3 text-lime-400 text-right ">Blood Donation Application</h2>
          <p className="bg-zinc-800 border p-6 rounded-md text-sm md:text-base">
            MERN stack platform for seamless blood donation interactions. Features role-based access, responsive dashboards, efficient MongoDB integration, dynamic request management, and a robust CMS. Prioritizes user experience, security, and responsiveness, connecting donors with those in need.
          </p>
          <div className="my-4 text-right">
            <h3 className=" inline-block font-mono mr-4">React</h3>
            <h3 className=" inline-block font-mono">Firebase</h3>
          </div>
          <div className="flex gap-4 justify-end">

            <a href="https://lifeflow-25df5.web.app/" target="_blank" aria-label="Link"><BsBoxArrowUpRight className="hover:text-lime-400 transition duration-700"></BsBoxArrowUpRight></a>

            <a href="https://lifeflow-25df5.web.app/" target="_blank"><BsGithub className="hover:text-lime-400 transition duration-700"></BsGithub></a>

          </div>
        </div>

        <div className="md:w-2/4 ">
          <a href="https://www.youtube.com/watch?v=jo3RB0oBhXI&t=527s" target="_blank"> <Image
            src="/blood-donation.png"
            alt="Blood Donation Application img"
            width={800}
            height={800}
            className="rounded-md opacity-70 hover:opacity-100 transition duration-300"
          /></a>
        </div>

      </div>

    </section>
  );
};

export default ProjectSection;
