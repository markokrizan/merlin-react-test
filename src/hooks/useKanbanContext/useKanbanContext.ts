import { createContext, useContext } from "react";
import { Kanban } from "../../typings/typings";

const KanbanContext = createContext<Kanban | undefined>(undefined);

const useKanbanContext = () => useContext(KanbanContext);

export const KanbanContextProvider = KanbanContext.Provider;
export default useKanbanContext;
