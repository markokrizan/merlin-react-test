import React, { FC, useRef, useState } from "react";
import useDrop from "../../hooks/useDrop/useDrop";
import useKanbanContext from "../../hooks/useKanbanContext/useKanbanContext";
import { Column, Ticket } from "../../typings/typings.d";
import AddIcon from "../icons/AddIcon";
import DeleteIcon from "../icons/DeleteIcon";
import KanbanTicket from "../KanbanTicket/KanbanTicket";
import TicketModal from "../TicketModal";
import styles from "./kanbanColumn.module.css";

const KanbanColumn: FC<{ column: Column; onSelect: (Ticket) => void }> = ({
  column,
  onSelect,
}) => {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const { deleteColumn, addTicket, deleteTicket } = useKanbanContext();

  const createTicket = () => {
    setIsTicketModalOpen(true);
  };

  const dropTask = ({ ticket }: { ticket: Ticket }) => {
    addTicket(ticket, column.name);
    deleteTicket(ticket.title);
  };

  const droppableElementRef = useRef();

  useDrop({
    droppableElementRef,
    onDrop: dropTask,
  });

  return (
    <div className={styles.column} ref={droppableElementRef}>
      <div className={styles["column--title"]}>
        {column.name}
        <div>
          <AddIcon className={styles["icon-button"]} onClick={createTicket} />
          <DeleteIcon
            className={styles["icon-button"]}
            onClick={() => deleteColumn(column.name)}
          />
        </div>
      </div>
      {column.tickets.map((ticket) => (
        <KanbanTicket
          key={ticket.title}
          ticket={ticket}
          onClick={() => onSelect(ticket)}
        />
      ))}
      <TicketModal
        isOpen={isTicketModalOpen}
        column={column}
        closeModal={() => setIsTicketModalOpen(false)}
      />
    </div>
  );
};

export default KanbanColumn;
