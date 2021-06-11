import { FC, useState } from "react";
import useKanbanContext from "../../hooks/useKanbanContext/useKanbanContext";
import { Column, Ticket } from "../../typings/typings";

import styles from "./ticketForm.module.css";

const TicketForm: FC<{ column: Column; closeModal: () => void }> = ({
  column,
  closeModal,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [acceptanceCriteria, setAcceptanceCriteria] = useState("");
  const [estimate, setEstimate] = useState(0);

  const { addTicket } = useKanbanContext();

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();

    const newTicket: Ticket = {
      title,
      description,
      acceptanceCriteria,
      estimate,
    };

    // TODO: Move to generic validation service based on validation schemas and rules
    const hasEmptyFields = Object.keys(newTicket).some(
      (key: string) => !newTicket[key]
    );
    const isDuplicateName = column.tickets.find(
      (ticket: Ticket) => ticket.title === title
    );

    if (hasEmptyFields || isDuplicateName) {
      return;
    }

    addTicket(newTicket, column.name);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <span className={styles["form--title"]}>New ticket</span>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={"Title"}
        className={styles.input}
      />
      <input
        id="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={"Description"}
        className={styles.input}
      />
      <input
        id="acceptanceCriteria"
        type="text"
        value={acceptanceCriteria}
        onChange={(e) => setAcceptanceCriteria(e.target.value)}
        placeholder={"Acceptance criteria"}
        className={styles.input}
      />
      <input
        id="estimate"
        type="number"
        value={estimate}
        onChange={(e) => setEstimate(e.target.value as any)}
        placeholder={"Estimate"}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Save Ticket
      </button>
      <button className={styles.button} onClick={closeModal}>
        Close
      </button>
    </form>
  );
};

export default TicketForm;
