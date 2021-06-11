import { FC } from "react";

import styles from "./input.module.css";

const Input: FC = (props) => {
  return <input className={styles.input} {...props}></input>;
};

export default Input;
