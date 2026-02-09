import React from "react";

export default function TaskList({ tasks, editingTask, deletingTask }) {
  const handleEditClick = (task) => {
    editingTask(task);
  };

  const handleDeleteClick = (taskId) => {
    deletingTask(taskId);
  };
  return (
    <>
      <div className="task-grid">
        {tasks.map((task) => (
          <div className="task-card" style={{ position: "relative" }}>
            <h3>{task.title}</h3>
            <p>{task.desc}</p>

            <div className="task-meta">
              <span>{task.date}</span>
              <span className="priority-badge priority-high">
                {task.priority}
              </span>
            </div>

            <div className="task-action">
              <button
                className="btn-icon"
                style={{ background: "#00d2ff" }}
                title="Edit Task"
                onClick={() => handleEditClick(task)}
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
                onClick={() => handleDeleteClick(task.id)}
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
