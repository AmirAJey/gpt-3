import styles from "./article.module.css";
import { ArticleProps } from "./article.types";

const Article = ({
  imgSrc,
  date,
  title,
  redirectTo,
  variant = "secondary",
}: ArticleProps) => {
  return (
    <div className={`${styles.container} ${styles[variant]}`}>
      <img src={imgSrc} alt={title} className={styles.img} />
      <div className={styles["content-container"]}>
        <h6 className={styles.date}>{date}</h6>
        <h2 className={styles.title}>{title}</h2>
        <a href={redirectTo} className={styles.link}>
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default Article;
