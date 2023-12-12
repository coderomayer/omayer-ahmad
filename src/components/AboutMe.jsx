/* eslint-disable */
// Code where all ESLint rules are disabled
/* eslint-enable */


import Image from "next/image";

const AboutMe = () => {
    return (
        <section className="text-gray-400 my-20  md:my-36 ">


            <div class="flex items-center md:w-2/4 mb-4 md:mb-14">
                <span className="text-2xl font-Inter font-bold my-2 text-white">About Me</span>
                <div class="flex-grow border-b ml-4"></div>
            </div>


            <div className=" md:flex gap-8 font-DM ">

                <div className="flex-1 mb-12">
                    <p>
                        Hello! I am Omayer Ahmad, a passionate coder who finds joy in creating and innovating through code. My coding journey began alongside my studies in 2020, driven by a deep love for technology.
                    </p>

                    <p className="my-4">
                        I discovered my affinity for React while working with WordPress and Elementor, leading me to explore the MERN stack. My primary focus is on honing my skills in JavaScript, React, and the delightful Next.js framework.
                    </p>

                    <p className="text-white">
                        Currently, I serve as a front-end developer at <a href="https://bizup360.net/" className="text-lime-400 hover:underline">BizUp 360</a>, where I apply my expertise in technologies like:
                    </p>

                    <div className="flex gap-16 my-4  font-mono mt-8">
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>JavaScript(ES6+)</li>
                            <li>React</li>
                            <li>Next js</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>

                        <ul style={{ listStyleType: 'disc' }}>
                            <li>HTML</li>
                            <li>CSS3</li>
                            <li>Tailwind CSS</li>
                            <li>WordPress</li>
                            <li>Elementor</li>
                        </ul>
                    </div>


                </div>

                <div className="flex-1 flex items-center justify-center ">
                    <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-2 rounded border-collapse ">
                        <Image src="/coderomayer.png"
                        alt="omayer"
                            width={350}
                            height={350}
                            className="rounded absolute right-3 bottom-3 hover:right-4 hover:bottom-4"
                        ></Image>
                    </div>
                </div>
            </div>
            

        </section>
    )
}


export default AboutMe;