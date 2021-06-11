import React, { FC, useRef } from "react";
import useDrag from "../../hooks/useDrag/useDrag";
import useKanbanContext from "../../hooks/useKanbanContext/useKanbanContext";
import { Ticket } from "../../typings/typings";
import DeleteIcon from "../icons/DeleteIcon";
import styles from "./kanbanTicket.module.css";

const KanbanTicket: FC<{ ticket: Ticket; onClick: () => void }> = ({
  ticket,
  onClick,
}) => {
  const { deleteTicket } = useKanbanContext();

  const dragRef = useRef();

  useDrag({
    data: JSON.stringify({
      ticket,
    }),
    draggablElementRef: dragRef,
  });

  return (
    <div className={styles.ticket} ref={dragRef}>
      <div className={styles["ticket--title"]}>
        <a onClick={() => onClick()}>{ticket.title}</a>
        <DeleteIcon
          onClick={() => deleteTicket(ticket.title)}
          className={styles["icon-button"]}
        />
      </div>
      <div className={styles["ticket--estimate"]}>
        Story Points: {ticket.estimate}
      </div>
    </div>
  );
};

export default KanbanTicket;
