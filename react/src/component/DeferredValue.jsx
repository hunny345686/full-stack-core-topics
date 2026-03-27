import React, { useState, useDeferredValue } from "react";

function slowSearch(query) {
  const result = [];
  for (let i = 0; i < 20000; i++) {
    result.push(query + " result " + i);
  }
  return result;
}

export default function DeferredValue() {
  const [query, setQuery] = useState("");

  // delay value for rendering
  const deferredQuery = useDeferredValue(query);

  const results = slowSearch(deferredQuery);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
  }

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Search..." />

      <ul>
        {results.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
