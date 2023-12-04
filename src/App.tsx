import CreateList from "./components/CreateList";
import ListContainer from "./components/ListContainer";

function App() {
  return (
    <main className="p-8">
      <h1 className="text-2xl pb-4">To Do App</h1>
      <CreateList/>
      <ListContainer/>
    </main>
  );
}

export default App;
