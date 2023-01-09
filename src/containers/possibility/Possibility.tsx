import styles from "./possibility.module.css"
import possibility from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className={`${styles.container} section__padding`}>
      <div className={styles['img-container']}>
        <img src={possibility} alt="possibility" />
      </div>
      <div className={styles['content-container']}>
        <h2 className={`${styles.title} gradient__text`}>
          The possibilities are beyond your imagination
        </h2>
        <p className={styles.content}>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <a href="#" className={styles.link}>
          Request Early Access to Get Started
        </a>
      </div>
    </div>
  )
}

export default Possibility