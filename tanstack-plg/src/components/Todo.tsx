import { useTodos, useTodosIds } from "../services/queries";

export default function Todo() {
  const todosIdsQuery = useTodosIds(); //=> return id của tất cả các todos
  const todosQueries = useTodos(todosIdsQuery.data); // in: to do id - out : to do detail

  return (
    <>
      <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
            <div>Id: {data?.id}</div>
            <span>
              <strong>Title:</strong> {data?.title}, <strong>Description:</strong> {data?.description}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
