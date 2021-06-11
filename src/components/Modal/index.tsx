import { FC } from "react";
import ReactDom from "react-dom";

import styles from "./modal.module.css";

const Modal: FC<{ isOpen: boolean; children: React.ReactNode }> = ({
  isOpen,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.container}>{children}</div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
