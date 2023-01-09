import { footerLinks } from "../../data/dummy";
import styles from "./footer.module.css";
import { GroupListProps } from "./footer.types";
import { logo } from "../../assets";

const GroupList = ({ groupName, links }: GroupListProps) => (
  <ul className={styles["group-list"]}>
    <li className={styles["group-item"]}>{groupName}</li>
    {links.map((l) => (
      <li className={styles["group-item"]}>
        <a href={l.to}>{l.label}</a>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <div className={`${styles.container} section__padding`}>
      <div className={styles["content-container"]}>
        <h1 className={`${styles.title} gradient__text`}>
          Do you want to step in to the future before others
        </h1>
        <button className={styles.btn}>Request Early Access</button>
      </div>
      <div className={styles["links-container"]}>
        <div className={styles["footer-icon"]}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.subtitle}>
          Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        {footerLinks.map((l, idx) => (
          <div className={styles["footer-group-links"]}>
            <GroupList key={idx} {...l} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
