import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data =await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  //logout karya bad local storage mathi data remove karava mate
  const handleLogout = () => {
    localStorage.removeItem("lData");
    localStorage.removeItem("authData");
    navigate("/login");
  };
  return (
    <>
      <Navbar title="task managment" onLogout={handleLogout} />
      <TaskForm addTask={handleAddTask}></TaskForm>
      <h1>My TASKS</h1>
      <TaskList tasks={tasks}/>
    </>
  );
}
export default Dashboard;
