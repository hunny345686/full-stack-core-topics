import { startTransition, useState } from "react";

function slowFunction(input) {
  let result = [];
  for (let i = 0; i < 20000; i++) {
    result.push(`${input} - ${i}`);
  }

  return result;
}

function ReactFiber() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    startTransition(() => {
      const data = slowFunction(e.target.value);
      setList(data);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReactFiber;
