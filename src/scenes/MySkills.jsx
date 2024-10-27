import LineGradient from "../components/LineGradient";
import SkillComponent from "../components/SkillComponent";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { skillList } from "../data/skillsList";
function MySkills() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-28">
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
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient />
          <p className="mt-10 mb-2">
            With a solid foundation in both front-end and back-end technologies,
            I build efficient, user-focused applications. My experience spans
            core programming languages, modern front-end frameworks, and robust
            backend solutions, enabling me to handle a full stack of development
            tasks seamlessly. Below, you’ll find a snapshot of the tools and
            technologies I use to bring ideas to life, creating scalable,
            responsive, and maintainable web applications.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                src="assets/skills-image.png"
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              />
            </div>
          ) : (
            <img src="assets/skills-image.png" alt="profile" className="z-10" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-center mt-2 gap-32">
        {/* EXPERIENCE */}
        <SkillComponent
          section="Programming Language"
          number="01"
          skills={skillList.languages}
        />
        <SkillComponent
          section="Frontend Development"
          number="02"
          skills={skillList.frontEnd}
        />{" "}
        <SkillComponent
          section="Backend Development"
          number="03"
          skills={skillList.backEnd}
        />
      </div>
    </section>
  );
}

export default MySkills;
