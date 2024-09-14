import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const blogPosts = [
  {
    id: 1,
    title: "Entropy must really hate evolution",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris...",
  },
  {
    id: 2,
    title:
      "Everything we create has been made by nature and how computer science is similar but also different",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) return <div>Blog post not found</div>;

  return (
    <section className="pt-24 pb-48">
      <div className="md:w-2/3 mx-auto">
        <Link
          to="/#blogs"
          className="flex items-center text-yellow mb-5 hover:text-white transition duration-500"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/#blogs";
          }}
        >
          <ArrowBackIcon />
          <span className="ml-2">Back to Home</span>
        </Link>
        <motion.div
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
            {post.title}
          </h1>
          <LineGradient width="w-1/3" />
          <p className="mt-10">{post.content}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost;
