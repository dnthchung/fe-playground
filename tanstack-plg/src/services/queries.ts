import { useQuery, useQueries, keepPreviousData } from "@tanstack/react-query";
import { getTodo, getTodosIds, getProjects } from "./api";

// todos = getAllTodosId
// todo = get all todos details

export function useTodosIds() {
  return useQuery({
    queryKey: ["getAllTodosId"], // Đây là key để xác định duy nhất query này
    queryFn: getTodosIds, // Hàm để fetch dữ liệu
  });
}

export function useTodos(ids: (number | undefined)[] | undefined) {
  return useQueries({
    // Dùng useQueries Fetch dữ liệu cho nhiều API endpoint cùng lúc.
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["getAllTodos", { id }],
        queryFn: () => getTodo(id!),
      };
    }),
  });
}

export function useProjects(page: number) {
  return useQuery({
    queryKey: ["projects", { page }],
    queryFn: () => getProjects(page),
    placeholderData: keepPreviousData, //Giữ lại dữ liệu của query trước đó làm placeholder trong khi dữ liệu mới đang được fetch.
  });
}
