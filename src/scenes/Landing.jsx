import {motion} from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import {Hidden} from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import resume from "../Shengge_Zhang_CV_2024.pdf";
import {TextAnimation} from "../components/TextAnimation";

function Landing({setSelectedPage}) {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-4"
        >
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img
                            src="assets/my-image.jpg"
                            alt="profile"
                            className="hover:filter hover:saturate-150 transition duration-500 h-96 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px] "
                        />
                    </div>
                ) : (
                    <img
                        src="assets/my-image.jpg"
                        alt="profile"
                        className="hover:filter hover:saturate-200 transition duration-500 h-auto z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
                    />
                )}
            </div>
            {/* MAIN SECTION */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* Headings */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <p className="text-6xl font-playfiar z-10 text-center md:text-start">
                        Shengge {""}
                        <span
                            className="xs:relative xs:font-semibold z-20 before:-left-[25px] before:-top-[70px] before:z-[-1]">
              Zhang
            </span>
                    </p>
                            <TextAnimation/>
                    <p className="mt-10 mb-7 text-lg text-center md:text-start">
                        I'm a dedicated and versatile full-stack developer with a strong
                        background in both front-end and back-end development. Skilled in
                        technologies like React, Next.js, Node.js, TypeScript, and Redux, I enjoy
                        building seamless, scalable, and user-focused applications. My
                        experience ranges from developing responsive UIs that enhance user
                        engagement to implementing secure, efficient back-end systems with
                        RESTful APIs and JWT authentication.
                        <br/>
                        <br/>I thrive on solving complex challenges, constantly learning,
                        and collaborating to deliver impactful solutions. Let’s connect and
                        create something exceptional!
                    </p>
                </motion.div>

                {/* CALL TO ACTIONS */}

                <motion.div
                    className="flex mt-5 justify-center md:justify-center md:gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5, delay: 0.2}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <AnchorLink
                        className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>

                    {/* DISPLAY RESUME */}

                    <button className="rounded-r-sm bg-gradient-rainblue py-0.5 px-0.5">
                        <a
                            className="bg-deep-blue hover:text-yellow transition duration-500 w-full h-full flex items-center justify-center font-semibold px-10 "
                            href={resume}
                            rel="noreferrer"
                            target="_blank"
                        >
                            My Resume
                        </a>
                    </button>
                    {/* <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfiar px-10 ">
              My Resume
            </div>
          </AnchorLink> */}
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5, delay: 0.2}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <SocialMediaIcons/>
                </motion.div>
            </div>
        </section>
    );
}

export default Landing;
