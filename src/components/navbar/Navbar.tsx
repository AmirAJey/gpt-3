import styles from "./navbar.module.css";
import { navbarLinks } from "../../data/dummy";
import { useBreakpoint, useClick, useToggle } from "../../hooks";
import { MenuCloseIcon, MenuOpenIcon } from "../../data/icons";
import Logo from "../../assets/logo.svg";
import {
  ActionButtonsProps,
  MenuButtonProps,
  MenuDropdownProps,
  NavbarLinksProps,
} from "./types";
import { Drawer, Button } from "../../components";
import { useEffect } from "react";

const NavbarLinks = ({
  float = false,
  direction = "column",
}: NavbarLinksProps) => (
  <ul
    style={{ flexDirection: direction }}
    className={`${styles["links"]} ${float ? styles["float"] : ""}`}
  >
    {navbarLinks.map(({ label, to }, idx) => (
      <li key={idx}>
        <a href={to}>{label}</a>
      </li>
    ))}
  </ul>
);

const ActionButtons = ({ size = "md" }: ActionButtonsProps) => (
  <div className={styles["action-buttons"]}>
    <Button colorPalette="transparent" size={size}>
      logIn
    </Button>
    <Button variant="filled" colorPalette="primary" size={size}>
      signUp
    </Button>
  </div>
);

const MenuButton = ({ isActive, onPress }: MenuButtonProps) => {
  const Icon = isActive ? MenuCloseIcon : MenuOpenIcon;
  return <Icon onClick={onPress} className={styles.icon} />;
};

const MenuDropdown = ({ show, onClose }: MenuDropdownProps) => {
  const status = show ? styles.show : styles.hide;

  useClick(
    "menu-dropdown",
    show,
    {
      outside: onClose,
    },
    true
  );
  return (
    <div id="menu-dropdown" className={`${styles["menu-dropdown"]} ${status}`}>
      <NavbarLinks float />
    </div>
  );
};

const Navbar = () => {
  const [isMenuActive, toggleMenu, setIsMenuActive] = useToggle(false);

  const breakpoint = useBreakpoint();

  useEffect(() => setIsMenuActive(false), [breakpoint]);

  return (
    <div
      className={`${styles.navbar} ${isMenuActive ? styles.show : styles.hide}`}
    >
      <div className={styles["links-container"]}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <NavbarLinks direction="row" />
      </div>
      <div className={styles["menu-container"]}>
        {!["xs", "sm"].includes(breakpoint) && <ActionButtons size="sm" />}
        <MenuButton isActive={isMenuActive} onPress={toggleMenu} />
        <MenuDropdown
          show={isMenuActive}
          onClose={() => setIsMenuActive(false)}
        />
      </div>

      {/* sidebar */}
      {["xs", "sm"].includes(breakpoint) && (
        <Drawer
          open={isMenuActive}
          onClose={() => setIsMenuActive(false)}
          className={styles.drawer}
        >
          <NavbarLinks />
          <ActionButtons size="sm" />
        </Drawer>
      )}
    </div>
  );
};

export default Navbar;
