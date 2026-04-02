import React, { useState } from "react";

function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      {render(pos)}
    </div>
  );
}

export default function RenderPropes() {
  return (
    <MouseTracker
      render={(pos) => (
        <div>
          {pos.x}, {pos.y}
        </div>
      )}
    />
  );
}
