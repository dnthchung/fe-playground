import { SubmitHandler } from "react-hook-form";
import { useCreateTodo, useDeleteTodo, useUpdateTodo } from "../services/mutations";
import { useTodos, useTodosIds } from "../services/queries";
import { useForm } from "react-hook-form";
import { Todo } from "../types/todo";
import { Form, Button, ListGroup } from "react-bootstrap";

export default function Todos() {
  const todosIdsQuery = useTodosIds(); //=> return id của tất cả các todos
  const todosQueries = useTodos(todosIdsQuery.data); // in: to do id - out : to do detail

  //post: create new todo
  //put: update todo
  const createTodoMutation = useCreateTodo();
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data);
  };
  const handleMarkAsDoneSubmit = (data: Todo | undefined) => {
    if (data) {
      updateTodoMutation.mutate({ ...data, checked: true });
    }
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodoMutation.mutateAsync(id);
    console.log("Deleted todo with id:", id);
  };

  const { register, handleSubmit } = useForm<Todo>();

  return (
    <>
      {/* Form for creating a new todo */}
      <Form onSubmit={handleSubmit(handleCreateTodoSubmit)} className="mb-4">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter todo title" {...register("title", { required: "Title is required !!" })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Enter todo description" {...register("description", { required: "Description is required !!" })} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={createTodoMutation.isPending}>
          {createTodoMutation.isPending ? "Creating..." : "Create Todo"}
        </Button>
      </Form>

      {/* List of todos */}
      <ListGroup>
        {todosQueries.map(({ data }) => (
          <ListGroup.Item key={data?.id}>
            <div>
              <strong>Id:</strong> {data?.id}
            </div>
            <div>
              <strong>Title:</strong> {data?.title}
            </div>
            <div>
              <strong>Description:</strong> {data?.description}
            </div>
            <div>
              <div>
                <button onClick={() => handleMarkAsDoneSubmit(data)} disabled={data?.checked}>
                  {data?.checked ? "Done" : "Mark as done"}
                </button>
                {data && data.id && (
                  <button onClick={() => handleDeleteTodo(data?.id!)} disabled={deleteTodoMutation.isPending}>
                    {deleteTodoMutation.isPending ? "Deleting..." : "Delete"}
                  </button>
                )}
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
