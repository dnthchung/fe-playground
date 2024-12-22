// import { useIsFetching } from "@tanstack/react-query";
import { useTodosIds } from "../services/queries";

export default function Todo() {
  const todosIdsQuery = useTodosIds();
  //   const isFetching = useIsFetching(); //Trả về số lượng query đang fetch.

  if (todosIdsQuery.isLoading) return <div>Loading ne...</div>;
  if (todosIdsQuery.isError) return <div>Error ...</div>;
  return (
    <div>
      <h1>Todos</h1>
      {/* <p>Query status - about data: {todosIdsQuery.status}</p>
      <p>Fetch status - about calling BE process: {todosIdsQuery.fetchStatus}</p>
      <p>Global fetching status: {isFetching}</p> */}
      {/* code 2 thêm code check data có tồn tại hay không vì có thể data chưa được fetch về*/}
      <>
        {todosIdsQuery.data?.map((id) => (
          <p key={id}>{id}</p>
        ))}
      </>
    </div>
  );
}
