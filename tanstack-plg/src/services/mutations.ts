import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/todo";
import { createTodo, deleteTodo, updateTodo } from "./api";

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onMutate: (variables) => {
      // Xử lý trước khi mutation bắt đầu
      console.log("onMutate", variables);
    },
    onError: (error) => {
      // Xử lý khi mutation gặp lỗi
      console.log("onError", error);
    },
    onSettled: async (_, error) => {
      // Xử lý khi mutation hoàn thành (dù thành công hay thất bại)
      console.log("onSettled");
      if (error) {
        console.log("onSettled => error:", error);
      } else {
        //code này dùng để refresh lại data sau khi thêm mới 1 todo
        //bằng cách gọi lại queryKey ["todos"]
        await queryClient.invalidateQueries({ queryKey: ["getAllTodosId"] });
      }
    },
    onSuccess: (data) => {
      // Xử lý khi mutation thành công
      console.log("onSuccess => data:", data);
    },
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Todo) => updateTodo(data),
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log("onSettled => error:", error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["getAllTodosId"] });
        await queryClient.invalidateQueries({ queryKey: ["getAllTodos", { id: variables.id }] });
      }
    },
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSettled: async (_, error) => {
      if (error) {
        console.log("onSettled => error:", error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["getAllTodosId"] });
      }
    },
  });
}
