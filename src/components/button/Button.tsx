import styles from "./button.module.css";
import { ButtonProps } from "./button.types";

const Button = ({
  variant = "filled",
  colorPalette = "primary",
  size = "md",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles[colorPalette]}`}
      {...rest}
    ></button>
  );
};

export default Button;
