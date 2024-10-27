import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { Hidden } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import resume from "../Shengge_Zhang_Fullstack.pdf";
function Landing({ setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfiar z-10 text-center md:text-start">
            Shengge {""}
            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              Zhang
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            eveniet impedit culpa qui quibusdam inventore numquam quis quod
            rerum. Repellat, tempora quas. Ipsam quisquam eum sit a totam quas.
            Voluptas.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}

        <motion.div
          className="flex mt-5 justify-center md:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
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

          <button className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5">
            <a
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfiar px-10 "
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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}

export default Landing;
