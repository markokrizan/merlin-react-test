import { FC } from "react";
import { KanbanContextProvider } from "../../hooks/useKanbanContext/useKanbanContext";
import { Kanban, Ticket } from "../../typings/typings";
import KanbanColumn from "../KanbanColumn/KanbanColumn";

const KanbanBoard: FC<Kanban> = (kanban) => {
  const onTicketSelect = (ticket: Ticket) => {
    alert(`Implement "View Ticket" modal here!`);
  };

  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <KanbanContextProvider value={kanban}>
        {kanban.columns.map((col) => (
          <KanbanColumn key={col.name} column={col} onSelect={onTicketSelect} />
        ))}
      </KanbanContextProvider>
    </div>
  );
};

export default KanbanBoard;
