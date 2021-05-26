import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const SubmitTask = withStyles(() => ({
  root: {
    marginBottom: "1.5em",
    color: "#FBFCFF",
    background: "#2A2A72",
    transition: "background .35s ease-in-out",
    "&:hover": {
      background: "#4464AD",
    },
  },
}))(Button);

const ClearAllTaskButton = withStyles(() => ({
  root: {
    color: "#FBFCFF",
    background: "#BF0000",
    transition: "background .35s ease-in-out",
    "&:hover": {
      background: "#C42847",
    },
  },
}))(Button);

function FormButton({
  task,
  clearAllTaskModalOpen,
  tasks,
  incrementTaskCount,
}) {
  return (
    <>
      <SubmitTask
        variant="contained"
        type="submit"
        disabled={!task.length}
        onClick={incrementTaskCount}
      >
        Submit Task
      </SubmitTask>
      <ClearAllTaskButton
        variant="contained"
        onClick={clearAllTaskModalOpen}
        disabled={!tasks.length}
      >
        Clear All Task
      </ClearAllTaskButton>
    </>
  );
}

export default FormButton;
