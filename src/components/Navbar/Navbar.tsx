import { FC } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar: FC = ({ children }) => {
  return (
    <div className={styles.navbar}>
      <div>{children}</div>
      <Image
        src="/Merlin-Logo.png"
        alt="Merlin Logo"
        height={30}
        width={150}
        objectFit="contain"
      />
    </div>
  );
};

export default Navbar;
