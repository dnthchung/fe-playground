import { useQuery, useQueries } from "@tanstack/react-query";
import { getTodo, getTodosIds } from "./api";

export function useTodosIds() {
  return useQuery({
    queryKey: ["todos"], // Đây là key để xác định duy nhất query này
    queryFn: getTodosIds, // Hàm để fetch dữ liệu
  });
}

export function useTodos(ids: (number | undefined)[] | undefined) {
  return useQueries({
    // Dùng useQueries Fetch dữ liệu cho nhiều API endpoint cùng lúc.
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["todo", id],
        queryFn: () => getTodo(id!),
      };
    }),
  });
}
