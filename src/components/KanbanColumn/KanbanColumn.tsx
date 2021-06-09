import React, { FC } from "react";
import useKanbanContext from "../../hooks/useKanbanContext/useKanbanContext";
import { Column } from "../../typings/typings";
import AddIcon from "../icons/AddIcon";
import DeleteIcon from "../icons/DeleteIcon";
import KanbanTicket from "../KanbanTicket/KanbanTicket";
import styles from "./kanbanColumn.module.css";

const KanbanColumn: FC<{ column: Column; onSelect: (Ticket) => void }> = ({
  column,
  onSelect,
}) => {
  const { deleteColumn } = useKanbanContext();

  const createTicket = () => {
    alert("Implement 'New Ticket' Modal here!");
  };

  return (
    <div className={styles.column}>
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
    </div>
  );
};

export default KanbanColumn;
