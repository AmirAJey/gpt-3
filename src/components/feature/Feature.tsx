import styles from "./feature.module.css"
import { FeatureProps } from "./feature.types"

const Feature = ({title, children, responsive = false, direction = 'column', minWidth = 'max-content'}: FeatureProps) => {
  return (
    <div
    className={`${styles.container} ${responsive ? styles.responsive : ''} ${styles[direction]}`}>
      <h2 style={{minWidth}} className={styles.title}>{title}</h2>
      <p className={styles.content}>{children}</p>
    </div>
  )
}

export default Feature