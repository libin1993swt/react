import { MouseEvent } from "react";
function ListGroup() {
  let items = ["1", "2", "3", "4", "5"];

  const message = items.length === 0 && <p>No item found</p>;

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
