import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  taskCompleted,
  setEditTask,
  taskEdit,
  editTask,
  editText,
  setEditText,
  editTextDeadline,
  setEditTextDeadline,
  editDeadline,
  setEditDeadline,
  deadlineEdit,
  clearDeadline,
  decrementTaskCount,
  darkMode,
}) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
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
        );
      })}
    </div>
  );
}

export default TaskList;
