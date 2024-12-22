import { useQuery } from "@tanstack/react-query";
import { getTodosIds } from "./api";

export function useTodosIds() {
  return useQuery({
    queryKey: ["todos"], // Đây là key để xác định duy nhất query này
    queryFn: getTodosIds, // Hàm để fetch dữ liệu
  });
}
