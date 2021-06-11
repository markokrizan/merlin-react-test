import { FC } from "react";

import Modal from "../Modal";
import TicketForm from "../TicketForm";
import KanbanTicketPreview from "../KanbanTicketPreview";
import { Column, Ticket } from "../../typings/typings";

const TicketModal: FC<{
  isOpen: boolean;
  ticket?: Ticket;
  column?: Column;
  closeModal: () => void;
}> = ({ isOpen, ticket, column, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal isOpen={isOpen}>
      {!ticket ? (
        <TicketForm column={column} closeModal={closeModal} />
      ) : (
        <KanbanTicketPreview ticket={ticket} />
      )}
    </Modal>
  );
};

export default TicketModal;
