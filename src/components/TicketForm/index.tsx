import { FC, useState } from "react";
import useKanbanContext from "../../hooks/useKanbanContext/useKanbanContext";
import { Column, Ticket } from "../../typings/typings";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        value={acceptanceCriteria}
        onChange={(e) => setAcceptanceCriteria(e.target.value)}
      />
      <input
        type="number"
        value={estimate}
        onChange={(e) => setEstimate(e.target.value as any)}
      />
      <button type="submit">Save Ticket</button>
    </form>
  );
};

export default TicketForm;
