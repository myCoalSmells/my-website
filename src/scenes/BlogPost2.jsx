import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const BlogPost2 = () => {
  return (
    <section className="pt-24 pb-48">
      <motion.div
        className="md:w-2/3 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="font-playfair font-semibold text-4xl mb-5">
          Everything we create has been made by nature
        </h1>
        <LineGradient width="w-1/3" />
        <p className="mt-10">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
      </motion.div>
    </section>
  );
};

export default BlogPost2;
