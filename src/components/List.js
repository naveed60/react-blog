import { useState } from "react";
function List({ list }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="d-flex justify-content-center">
      <ul className="list-group text-center">
        {list.map((item, index) => (
          <li className= {selectedIndex === index
            ? "list-group-item active "
            : "list-group-item"
            }
            key={item.id}
            onClick = { () => {setSelectedIndex(index)}}
          >
            {item.title}
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
