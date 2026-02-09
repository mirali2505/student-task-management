import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

function Dashboard() {
  const navigate = useNavigate();
  const [editTask, setEditTask] = useState();
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(tasks);
  // }, [tasks]);

  const handleAddTask = async (newTask) => {
    const tasktoAdd = { ...newTask, completed: false };
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasktoAdd),
      });
      console.log(tasktoAdd);
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("lData");
    localStorage.removeItem("authData");
    navigate("/login");
  };

  const editingTask = (editingTask) => {
    setEditTask(editingTask);
  };

  const handleUpdateTask = async (updatedTask) => {
    try {
      await fetch(`http://localhost:3000/tasks/${updatedTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });
      setTasks(
        tasks.map((task) =>
          task.id === updatedTask.id ? { ...updatedTask } : task,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleteTask=async(id)=>{
    const taskToggle=tasks.find((t)=>t.id==id);
    const updatedTask={...taskToggle,completed:!taskToggle.completed}
    try{
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });
     setTasks(
        tasks.map((task) =>
          task.id === id ? updatedTask : task,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Navbar
        title="Task Managment"
        onLogout={handleLogout}
        isFormOpen={showForm}
        onAddTaskBtnClick={() => setShowForm(!showForm)}
      />
      {
        showForm&&( <TaskForm
        addTask={handleAddTask}
        editingTask={editTask}
        updateTask={handleUpdateTask}
      />)
      }
     
      <h1>hello</h1>
      <TaskList
        tasks={tasks}
        editingTask={editingTask}
        deletingTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
      />
    </div>
  );
}

export default Dashboard;