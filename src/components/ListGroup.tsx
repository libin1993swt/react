function ListGroup() {
  let items = ["1", "2", "3", "4", "5"];

  items = [];

  const message = items.length === 0 && <p>No item found</p>;

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
