import { brands } from "../../data/dummy";
import styles from "./brand.module.css";

const Brand = () => {
  return (
    <ul className={`${styles.container} section__padding`}>
      {brands.map((brand) => (
        <li key={brand.name}>
          <img src={brand.imgSrc} alt={brand.name} className={styles.brand} />
        </li>
      ))}
    </ul>
  );
};

export default Brand;
