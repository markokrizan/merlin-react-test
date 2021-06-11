import { FC } from "react";

import styles from "./button.module.css";

const Button: FC = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  rest: any;
}) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
