import ListGroup from "./components/ListGroup";

function App() {
  let items = ["1", "2", "3", "4", "5"];

  const handleSlectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSlectItem}
      />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSlectItem}
      />
    </div>
  );
}

export default App;
