import ListGroup from "./components/ListGroup";

function App() {
  let items = ["1", "2", "3", "4", "5"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
