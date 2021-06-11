import { FC } from "react";
import { Ticket } from "../../typings/typings";

import styles from "./kanbanTicketPreview.module.css";

const KanbanTicketPreview: FC<{ ticket: Ticket }> = ({ ticket }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span className={styles.label}>Title: </span>
        <span className={styles.value}>{ticket.title}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Description: </span>
        <span className={styles.value}>{ticket.description}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Acceptance criteria: </span>
        <span className={styles.value}>{ticket.acceptanceCriteria}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Estimate: </span>
        <span className={styles.value}>{ticket.estimate}</span>
      </div>
    </div>
  );
};

export default KanbanTicketPreview;
