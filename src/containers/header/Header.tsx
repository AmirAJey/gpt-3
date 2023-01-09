import styles from "./header.module.css";
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
import { Button } from "../../components";

const Header = () => {
  return (
    <div className={`${styles.container} section__padding`}>
      <div className={styles['content-col']}>
        <h1 className={`${styles.title} gradient__text`}>
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className={styles.content}>
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={styles['input-group']}>
          <input type="text" placeholder="Your Email Address" />
          <Button size="sm">Get Started</Button>
        </div>
      </div>

      <div className={styles['people-col']}>
        <div className={styles.people}>
        <img src={people} alt="people" className={styles.people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className={styles["img-container"]}>
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
  // return (
  //   <div className={`${styles.container} section__padding`}>
  //     <div className={styles["content-container"]}>
  //       <h1 className={`${styles.title} gradient__text`}>
  //         Let’s Build Something amazing with GPT-3 OpenAI
  //       </h1>
  //       <p className={styles.content}>
  //         Yet bed any for travelling assistance indulgence unpleasing. Not
  //         thoughts all exercise blessing. Indulgence way everything joy
  //         alteration boisterous the attachment. Party we years to order allow
  //         asked of.
  //       </p>
  //       {/* input group */}
  //       <div className={styles['input-group']}>
  //         <input type="text" placeholder="Your Email Address" />
  //         <Button size="sm">Get Started</Button>
  //       </div>
  //       <div className={styles.people}>
  //         <img src={people} alt="people" className={styles.people} />
  //         <p>1,600 people requested access a visit in last 24 hours</p>
  //       </div>
  //     </div>
  //     <div className={styles["img-container"]}>
  //       <img src={ai} alt="ai" />
  //     </div>
  //   </div>
  // );
};

export default Header;
