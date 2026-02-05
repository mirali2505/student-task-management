import React from "react";

export default function TaskList({tasks}) {
  return (
    <>
      <div className="task-grid">
        {tasks.map((task)=>(
          <div className="task-card" style={{ position: "relative" }}>
          <h3>{task.title}</h3>
          <p>{task.desrcription}</p>

          <div className="task-meta">
            <span>{task.dueDate}</span>
            <span className="priority-badge priority-high">{task.priority}</span>
          </div>

          <div className="task-action">
            <button
              className="btn-icon"
              style={{ background: "#00d2ff" }}
              title="Edit Task"
            >
            🖍
            </button>

            <button
             className="btn-icon"
             style={{ background: "#00b894" }}
              title="Mark Completed"
            >
                ✔
            </button>

            <button
             className="btn-icon"
             style={{ background: "#ff416c" }}
              title="Delet Task"
            >
                🗑
            </button>
          </div>
        </div>

       ))}
        
      </div>
    </>
  );
}
