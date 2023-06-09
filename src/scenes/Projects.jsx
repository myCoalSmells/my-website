import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
hidden: {},
visible: {
    transition: {
    staggerChildren: 0.2,
    },
},
};

const projectVariant = {
hidden: { opacity: 0, scale: 0.8 },
visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, text, url }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
  
    const handleClick = () => {
      window.open(url, "_blank");
    };
  
    return (
      <motion.div
        variants={projectVariant}
        className="relative cursor-pointer"
        onClick={handleClick}
      >
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{text}</p>
        </div>
        <img
          src={require(`../assets/${projectTitle}.jpeg`)}
          alt={projectTitle}
        />
      </motion.div>
    );
  };
  

const Projects = () => {
return (
    <section id="projects" className="pt-24 pb-48">
      {/* HEADINGS */}
    <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
        }}
    >
        <div>
        <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
        </div>
        </div>
        <p className="mt-10 mb-10">
            {/* can put text here */}
        </p>
    </motion.div>

      {/* PROJECTS */}
    <div className="flex justify-center">
        <motion.div
        className="sm:grid sm:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
        {/* <div
            className="flex justify-center text-center items-center p-10 bg-red
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
        >
            This website!
        </div> */}
        <Project title="AI Microscopy" text="using machine learning for non-invasive analysis of stem cell culture" url="https://docs.google.com/presentation/d/1uUoGNGn3yKFTxocOiPrJcQP7AP1_eIjL/edit?usp=sharing&ouid=118285947792588074434&rtpof=true&sd=true"/>
        <Project title="StudySync" text="tinder but for finding your next study group!" url="https://github.com/myCoalSmells/study_sync"/>
        <Project title="BattleShip" text="console-based Battleship to play against friends or varying levels of AI" url="https://github.com/myCoalSmells/Battleship"/>
        {/* <Project title="This Website" test="what youre looking at :)"/> */}

          {/* ROW 2 */}
        {/* <Project title="Project 3" />
        <Project title="Project 4" />
        <Project title="Project 5" /> */}

          {/* ROW 3 */}

        {/* <div
            className="flex justify-center text-center items-center p-10 bg-blue
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
        >
            to be continued...
        </div> */}
        </motion.div>
    </div>
    </section>
);
};

export default Projects;