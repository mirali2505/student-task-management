import React from "react";

export default function TaskList({ tasks, editingTask, deletingTask ,handleCompleteTask}) {
  const handleEditClick = (task) => {
    editingTask(task);
  };

  const handleDeletClick = (taskId) => {
    deletingTask(taskId);
  };

  
  return (
    <>
      <div className="task-grid">
        {tasks.map((task) => (
          <div
            className={`task-card ${task.completed ? "completed" : ""}`}
            style={{ position: "relative" }}
            key={task.id}
          >
            <h3>{task.title}</h3>
            <p>{task.desc}</p>

            <div className="task-meta">
              <span>{task.date}</span>
              <span className="priority-badge priority-high">
                {task.priority}
              </span>
            </div>

            <div className="task-actions">
              <button
                className="btn-icon"
                style={{ background: "#00d2ff" }}
                title="Edit Task"
                disabled={task.completed}
                onClick={() => {
                  handleEditClick(task);
                }}
              >
                ✏️
              </button>
              <button
                className="btn-icon"
                style={{ background: "#00b894" }}
                title="Mark Completion"
                disabled={task.completed}
                onClick={() => {
                  handleCompleteTask(task.id);
                }}
              >
                {task.completed ? "undo":"✔️"}
              </button>
              <button
                className="btn-icon"
                style={{ background: "#ff416c" }}
                title="Delete Task"
                disabled={task.completed}
                onClick={() => handleDeletClick(task.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}