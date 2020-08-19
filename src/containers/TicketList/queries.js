import { useQuery } from "react-query";
import api from "../../api";

export const useTicketList = () =>
  useQuery("ticketList", () =>
    api.get("/tickets/inbox/createdate?count=50&skip=0")
  );
