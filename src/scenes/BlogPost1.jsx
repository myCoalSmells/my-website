import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const BlogPost1 = () => {
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
          Life & Evolution's Opinion on Entropy
        </h1>
        <LineGradient width="w-1/3" />
        <p className="mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor
          posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor
          orci. Etiam at risus et justo dignissim congue. Donec congue lacinia
          dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.
          Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
          pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus
          tortor.
        </p>
      </motion.div>
    </section>
  );
};

export default BlogPost1;
