import taskManagerStyles from "../styles/Home.module.scss";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "../components/TaskList";
import DateTimeTextfield from "../components/DateTimeTextfield";
import TaskTextField from "../components/TaskTextField";
import ClearAllTaskModal from "../components/Modals/ClearAllTaskModal";
import FormButton from "../components/Buttons/FormButton";
import DarkModeButton from "../components/Buttons/DarkModeButton";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [editText, setEditText] = useState("");
  const [deadline, setDeadline] = useState("No Deadline");
  const [editDeadline, setEditDeadline] = useState(null);
  const [editTextDeadline, setEditTextDeadline] = useState("");
  const [clearAllTaskModal, setClearAllTaskModal] = useState(false);
  const [taskCount, setTaskCount] = useState(0);
  const incrementTaskCount = () => setTaskCount(taskCount + 1);
  const decrementTaskCount = () => setTaskCount(taskCount - 1);
  const resetTaskCount = () => setTaskCount(0);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  //Local Storage
  useEffect(() => {
    const json = localStorage.getItem("tasks");
    const loadedTasks = JSON.parse(json);

    if (loadedTasks) {
      setTasks(loadedTasks);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json);
  }, [tasks]);

  //Local Storage for Saving Task Count
  useEffect(() => {
    const json = localStorage.getItem("taskCount");
    const saveTaskCount = JSON.parse(json);

    if (saveTaskCount) {
      setTaskCount(saveTaskCount);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(taskCount);
    localStorage.setItem("taskCount", json);
  }, [taskCount]);

  //Saving Dark Mode Changes
  useEffect(() => {
    const json = localStorage.getItem("darkMode");
    const darkModeSave = JSON.parse(json);

    if (darkModeSave) {
      setDarkMode(darkModeSave);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(darkMode);
    localStorage.setItem("darkMode", json);
  }, [darkMode]);

  //When Opening a Modal
  const clearAllTaskModalOpen = () => {
    setClearAllTaskModal(true);
  };

  const clearAllTaskModalClose = () => {
    setClearAllTaskModal(false);
  };

  //Set a new Task
  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: task,
      completed: false,
      finished: deadline,
    };

    setTasks([...tasks].concat(newTask));
    setTask("");
    setDeadline("No Deadline");
  }

  //Delete Task
  function deleteTask(id) {
    const updatedTasks = [...tasks].filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  //If the Task is complete
  function taskCompleted(id) {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  //When Editing the Task
  function taskEdit(id) {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        task.text = editText;
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditTask(null);
    setEditText("");
  }

  //Editing the Deadline
  function deadlineEdit(id) {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        task.finished = editTextDeadline;
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditDeadline(null);
    setEditTextDeadline("");
  }

  //Clearing the Deadline
  function clearDeadline(id) {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        task.finished = "No Deadline";
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditDeadline(null);
    setEditTextDeadline("");
  }

  //Clearing All task
  function clearAllTask(id) {
    const updatedTasks = [...tasks].filter((task) => task.id === id);

    setTasks(updatedTasks);
  }

  //When switching to DarkMode for Body
  useEffect(() => {
    document.getElementsByTagName("body")[0].className = darkMode
      ? taskManagerStyles["task-bg-dark"]
      : taskManagerStyles["task-bg"];
  }, [darkMode]);

  return (
    <div>
      <ClearAllTaskModal
        task={task}
        clearAllTaskModal={clearAllTaskModal}
        clearAllTaskModalClose={clearAllTaskModalClose}
        clearAllTask={clearAllTask}
        resetTaskCount={resetTaskCount}
        darkMode={darkMode}
      />
      <div className={taskManagerStyles["task-manager-wrapper"]}>
        <div className={taskManagerStyles["task-manager-position"]}>
          <div
            className={
              darkMode
                ? taskManagerStyles["task-manager-content-dark"]
                : taskManagerStyles["task-manager-content"]
            }
          >
            <form
              onSubmit={handleSubmit}
              className={taskManagerStyles["task-manager-form"]}
              noValidate
            >
              <DarkModeButton
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
              <h1>Task Manager</h1>
              <h3>Task Count: {taskCount}</h3>
              <TaskTextField
                task={task}
                setTask={setTask}
                darkMode={darkMode}
              />
              <DateTimeTextfield
                deadline={deadline}
                setDeadline={setDeadline}
                darkMode={darkMode}
              />
              <FormButton
                task={task}
                clearAllTaskModalOpen={clearAllTaskModalOpen}
                tasks={tasks}
                incrementTaskCount={incrementTaskCount}
              />
            </form>
            <TaskList
              tasks={tasks}
              deleteTask={deleteTask}
              taskCompleted={taskCompleted}
              editTask={editTask}
              setEditText={setEditText}
              editText={editText}
              setEditTask={setEditTask}
              taskEdit={taskEdit}
              editTextDeadline={editTextDeadline}
              setEditTextDeadline={setEditTextDeadline}
              editDeadline={editDeadline}
              setEditDeadline={setEditDeadline}
              deadlineEdit={deadlineEdit}
              clearDeadline={clearDeadline}
              decrementTaskCount={decrementTaskCount}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
