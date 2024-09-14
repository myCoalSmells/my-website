import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Entropy must really hate evolution",
      excerpt:
        "Life has a weird relationship with how the world wants to work...",
    },
    {
      id: 2,
      title:
        "Everything we create has been made by nature and how computer science is similar but also different",
      excerpt: "Examining human innovation vs. natural processes...",
    },
  ];

  return (
    <section id="blogs" className="pt-24 pb-48">
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
            <span className="text-red">BLO</span>GS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-8 mt-16">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="md:w-1/2 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              to={`/blog/${post.id}`}
              className="text-2xl font-playfair font-semibold hover:text-red"
            >
              {post.title}
            </Link>
            <p className="mt-5">{post.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
