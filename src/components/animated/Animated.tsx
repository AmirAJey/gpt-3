import React from "react";
import { AnimatedProps, DefaultType } from "./animated.types";
import styles from "./animated.module.css";

const defaults: DefaultType = {
  scaleSettings: {
    axis: "z",
    origin: "center",
  },
};

function convertAnimationToClassName(animations: string | string[]){
  return [...new Set(animations)].map(a => styles[a]).join(' ')
}

const Animated = ({
  children,
  animations = "fade",
  scaleSettings = defaults.scaleSettings,
  show = true,
  duration = 500
}: AnimatedProps) => {

  const convertOrigin = (origin: string) => origin.replace("-", " ");

  return (
    <div
      className={`
      ${styles.container}
      ${convertAnimationToClassName(animations)}
      ${show ? styles['show'] : styles['hide']}
      ${animations.includes("scale") ? styles[scaleSettings.axis!] : ''}
      `}
      style={
        {
          animationDuration: `${duration}ms`,
          ...(animations.includes("scale") && {
            "--origin": convertOrigin(scaleSettings.origin!),
          }),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Animated;
