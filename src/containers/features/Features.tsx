
import { Feature } from "../../components";
import { featuresData } from "../../data/dummy";
import styles from "./features.module.css";

const Features = () => {
  return (
    <div className="section__padding gradient__bg3">
      <div className={styles.container}>
      <div className={styles['content-container']}>
        <h2 className={`${styles.title} gradient__text`}>
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h2>
        <a href="#" className={styles.link}>Request Early Access to Get Started</a>
      </div>
      <div className={styles['features-container']}>
        {
          featuresData.map((f, idx) => (
            <Feature key={idx} title={f.title} direction="row">
              {f.content}
            </Feature>
          ))
        }
      </div>
      </div>
    </div>
  )
};

export default Features;
