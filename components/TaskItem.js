import EditText from "./EditText";
import DeadlineEdit from "./DeadlineEdit";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import taskItemStyles from "../styles/Home.module.scss";

const DeleteButton = withStyles(() => ({
  root: {
    marginLeft: "0.55em",
    color: "#FBFCFF",
    background: "#BF0000",
    transition: "background .35s ease-in-out",
    "&:hover": {
      background: "#C42847",
    },
  },
}))(Button);

const TaskCheckbox = withStyles({
  root: {
    color: "#0B7A75",
    "&$checked": {
      color: "#0B7A75",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function TaskItem({
  task,
  deleteTask,
  taskCompleted,
  editTask,
  setEditText,
  editText,
  setEditTask,
  taskEdit,
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
    <div
      key={task.id}
      className={
        task.completed
          ? taskItemStyles["task-item-content-completed"]
          : taskItemStyles["task-item-content"]
      }
    >
      <div className={taskItemStyles["task-item-text-edit"]}>
        <div>
          <TaskCheckbox
            onChange={() => taskCompleted(task.id)}
            style={{ transform: "scale(1.2)", marginRight: "0.25em" }}
            checked={task.completed}
          />
        </div>
        <div>
          <EditText
            task={task}
            editTask={editTask}
            setEditText={setEditText}
            editText={editText}
            taskEdit={taskEdit}
            setEditTask={setEditTask}
            darkMode={darkMode}
          />

          <DeadlineEdit
            task={task}
            editDeadline={editDeadline}
            setEditTextDeadline={setEditTextDeadline}
            deadlineEdit={deadlineEdit}
            setEditDeadline={setEditDeadline}
            clearDeadline={clearDeadline}
            editTextDeadline={editTextDeadline}
            darkMode={darkMode}
          />
        </div>
      </div>
      <div className={taskItemStyles["task-item-delete-button"]}>
        <DeleteButton
          variant="contained"
          onClick={() => {
            deleteTask(task.id);
            decrementTaskCount();
          }}
        >
          Delete
        </DeleteButton>
      </div>
    </div>
  );
}

export default TaskItem;
