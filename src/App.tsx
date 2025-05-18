import ListGroup from "./components/ListGroup";

function App() {
  let items = ["1", "2", "3", "4", "5"];
  return (
    <div>
      <ListGroup items={items} heading="cities" />
      <ListGroup items={items} heading="cities" />
    </div>
  );
}

export default App;
