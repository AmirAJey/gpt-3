import styles from "./cta.module.css"

const CTA = () => {
  return (
    <div className="section__padding">
      <div className={styles.container}>
        <div className={styles['content-container']}>
          <h6 className={styles.subtitle}>
            Request Early Access to Get Started
          </h6>
          <h2 className={styles.title}>
            Register today & start exploring the endless possiblities.
          </h2>
        </div>
        <button className={styles.button}>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default CTA