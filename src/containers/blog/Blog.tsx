import { Article } from "../../components";
import { blogs } from "../../data/dummy";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <div className="section__padding">
      <h1 className={`${styles.title} gradient__text`}>
        A lot is happening, We are blogging about it.
      </h1>
      <div className={styles.container}>
        {blogs.map((b, idx) => (
          <Article key={idx} {...b} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
