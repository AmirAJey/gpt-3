import styles from "./whatGPT3.module.css";
import { Feature } from "../../components";
import { whatGPT3features } from "../../data/dummy";

const WhatGPT3 = () => {
  return (
    <div id="wgpt3" className="section__padding">
      <div className={`${styles.container} gradient__bg2`}>
        <Feature title="What is GPT-3" direction="row" responsive>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </Feature>
        <div className={styles["title-container"]}>
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <a href="#">Explore The Library</a>
        </div>
        <div className={styles["features-container"]}>
          {whatGPT3features.map((f, idx) => (
            <Feature key={idx} title={f.title}>{f.content}</Feature>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
