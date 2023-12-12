/* eslint-disable */
// Code where all ESLint rules are disabled
/* eslint-enable */


import Image from "next/image";

const AboutMe = () => {
    return (
        <section className="text-gray-400  my-36 ">


            <div class="flex items-center w-2/4 mb-14">
                <span className="text-3xl font-Inter font-bold my-2 text-white">About Me</span>
                <div class="flex-grow border-b ml-4"></div>
            </div>


            <div className="flex gap-8 font-DM ">

                <div className="flex-1">
                    <p>
                        Hello! I am Omayer Ahmad, a passionate coder who finds joy in creating and innovating through code. My coding journey began alongside my studies in 2020, driven by a deep love for technology.
                    </p>

                    <p className="my-3 font-thin">
                        I discovered my affinity for React while working with WordPress and Elementor, leading me to explore the MERN stack. My primary focus is on honing my skills in JavaScript, React, and the delightful Next.js framework.
                    </p>

                    <p>
                        Currently, I serve as a front-end developer at BizUp360, where I apply my expertise in technologies like:
                    </p>

                    <div className="flex gap-16 my-4  font-mono mt-8">
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>JavaScript (ES6+)</li>
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

                <div className="flex-1 flex items-center justify-center relative">
                    <div className="absolute w-[350px] h-[350px] border-2 rounded border-lime-400 ">
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