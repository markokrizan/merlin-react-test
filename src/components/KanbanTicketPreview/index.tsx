import { FC } from "react";
import { Ticket } from "../../typings/typings";

import Button from "../shared/Button";
import styles from "./kanbanTicketPreview.module.css";

const KanbanTicketPreview: FC<{ ticket: Ticket; closeModal: () => void }> = ({
  ticket,
  closeModal,
}) => {
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
      <Button onClick={closeModal}>Close</Button>
    </div>
  );
};

export default KanbanTicketPreview;
