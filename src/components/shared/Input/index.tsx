import { FC } from "react";

import styles from "./input.module.css";

const Input: FC = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  rest: any;
}) => {
  return (
    <input className={styles.input} {...rest}>
      {children}
    </input>
  );
};

export default Input;
