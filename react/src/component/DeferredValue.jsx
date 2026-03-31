import React, { useState, useDeferredValue } from "react";
import { List } from "react-window";

function slowSearch(query) {
  const result = [];
  for (let i = 0; i < 20000; i++) {
    result.push(query + " result " + i);
  }
  return result;
}

/** react-window v2: row data comes via `rowProps`, not closure over `results`. */
function Row({ index, style, ariaAttributes, results }) {
  return (
    <div style={style} {...ariaAttributes}>
      {results[index]}
    </div>
  );
}

export default function DeferredValue() {
  const [query, setQuery] = useState("");

  const deferredQuery = useDeferredValue(query);

  const results = slowSearch(deferredQuery);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Search..." />

      <List
        rowComponent={Row}
        rowCount={results.length}
        rowHeight={30}
        rowProps={{ results }}
        style={{ height: 400, width: 300 }}
      />
    </div>
  );
}
