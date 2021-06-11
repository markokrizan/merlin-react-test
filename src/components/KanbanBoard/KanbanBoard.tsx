import { FC, useState } from "react";
import { KanbanContextProvider } from "../../hooks/useKanbanContext/useKanbanContext";
import { Column, Kanban, Ticket } from "../../typings/typings";
import KanbanColumn from "../KanbanColumn/KanbanColumn";
import TicketModal from "../TicketModal";

const KanbanBoard: FC<Kanban> = (kanban) => {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);

  const onTicketSelect = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsTicketModalOpen(true);
  };

  const onTicketCreate = (column: Column) => {
    setSelectedColumn(column);
    setIsTicketModalOpen(true);
  };

  const onCloseModal = () => {
    setIsTicketModalOpen(false);
    setSelectedTicket(null);
    setSelectedColumn(null);
  };

  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <KanbanContextProvider value={kanban}>
        {kanban.columns.map((col) => (
          <KanbanColumn
            key={col.name}
            column={col}
            onSelect={onTicketSelect}
            onTicketCreate={onTicketCreate}
          />
        ))}
        <TicketModal
          isOpen={isTicketModalOpen}
          column={selectedColumn}
          ticket={selectedTicket}
          closeModal={onCloseModal}
        />
      </KanbanContextProvider>
    </div>
  );
};

export default KanbanBoard;
