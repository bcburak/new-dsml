import React from "react";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "agent")}
        draggable
      >
        Agent Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "plan")}
        draggable
      >
        plan Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "event")}
        draggable
      >
        event Node
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "belief")}
        draggable
      >
        belief Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "rule")}
        draggable
      >
        rule Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "goal")}
        draggable
      >
        goal Node
      </div>
    </aside>
  );
};

export default Sidebar;
