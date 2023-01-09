import styles from "./drawer.module.css";
import { createPortal } from "react-dom";
import { DrawerProps } from "./drawer.types";
import { useEffect, useRef, useState } from "react";
import { useClick } from "../../hooks";

const Drawer = ({ open, onClose, children, className = '' }: DrawerProps) => {
  const portalElRef = useRef<HTMLDivElement | null>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (open) {
      const div = document.createElement("div") as HTMLDivElement;
      div.className = styles["drawer-portal"];
      document.body.prepend(div);
      portalElRef.current = div;
      setIsLoad(true);
    } else {
      const removePortal = () => {
        portalElRef.current?.remove();
        setIsLoad(false);
      };
      drawerRef.current?.addEventListener("animationend", removePortal);
      return () =>
        drawerRef.current?.removeEventListener("animationend", removePortal);
    }
  }, [open]);

  useEffect(() => {
    return () => portalElRef.current?.remove()
  }, [])

  useClick('drawer-element', isLoad, {
    outside: () => onClose()
  })

  const status = open ? "show" : "hide";

  if (!isLoad || !portalElRef.current) return null;
  return createPortal(
    <div className={`${styles.container} ${styles[status]} ${className}`}>
      <aside ref={drawerRef} className={styles.drawer} id='drawer-element'>
        {children}
      </aside>
    </div>,
    portalElRef.current
  );
};

export default Drawer;
