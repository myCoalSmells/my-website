import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillz from '../assets/skillz.JPG';


const MySkills = () => {
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
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-2/3" />
          <p className="mt-10 mb-7">
            beyond what's on my resume, here's what i bring to the table
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src={skillz}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={skillz} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
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
          <div className="relative h-24">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            navigating diverse projects has honed my problem-solving skills and taught me the value of learning from my many many mistakes along the way
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-24">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            from machine learning applications in stem cell research to making unnecessary modifications my PC setup, i let my curiosity drive my passions
          </p>
        </motion.div>
        {/* LEADERSHIP */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-24">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Leadership
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            i know when to embrace leadership, how to extract the best out of my teammates, and find the fun in all situations
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;