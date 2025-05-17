function ListGroup() {
  let items = ["1", "2", "3", "4", "5"];

  const message = items.length === 0 && <p>No item found</p>;

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event, item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
