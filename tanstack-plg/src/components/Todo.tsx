import { useTodosIds } from "../services/queries";

export default function Todo() {
  const todosIdsQuery = useTodosIds();
  if (todosIdsQuery.isLoading) return <div>Loading...</div>;
  if (todosIdsQuery.isError) return <div>Error ...</div>;
  return (
    <div>
      <h1>Todos</h1>
      {/* code 2 thêm code check data có tồn tại hay không vì có thể data chưa được fetch về*/}
      <>{todosIdsQuery.data && todosIdsQuery.data.map((id) => <p key={id}>{id}</p>)}</>
    </div>
  );
}
