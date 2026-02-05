import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
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
      <h1>My TASKS</h1>
      <TaskList tasks={tasks}/>
    </>
  );
}
export default Dashboard;
