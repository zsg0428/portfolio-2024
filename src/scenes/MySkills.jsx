import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
function MySkills() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfiar font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient />
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            animi ratione perferendis quibusdam dolores repellendus at fugit
            eaque sit. Provident dolor officia doloribus dignissimos hic
            expedita delectus deleniti suscipit dolores.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                src="assets/skill-image.png"
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              />
            </div>
          ) : (
            <img src="assets/skill-image.png" alt="profile" className="z-10" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-center"></div>
    </section>
  );
}

export default MySkills;
