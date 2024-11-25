import { motion } from "framer-motion";
function SkillComponent({ section, number, skills, bgColor }) {
  return (
    <motion.div
      className="md:w-1/3 mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className={`relative h-32 bg-light-blue rounded-sm md:m-1`}>
        <div className="z-10 flex flex-col justify-center items-center md:flex md:flex-col md:items-center">
          <p className="font-playfiar font-semibold text-3xl ">{number}</p>
          <p className="font-playfiar font-semibold text-xl sm:text-3xl mt-3 text-center">
            {section}
          </p>
        </div>
        {/* <div className="w-full md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" /> */}
      </div>

      <div className="mt-5 flex justify-evenly gap-2">
        {skills.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-2">
              <img
                key={index}
                className="w-8 h-8 flex-wrap bg-transparent rounded-md"
                src={item.image}
                alt={item.skill}
              />
              <span>{item.skill}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SkillComponent;
