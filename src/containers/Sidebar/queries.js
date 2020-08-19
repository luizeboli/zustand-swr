import { useQuery } from "react-query";
import api from "../../api";

export const useInboxCount = () =>
  useQuery("inbox_count", () => api.get("/tickets/inbox_count"));
