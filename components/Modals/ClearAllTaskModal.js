import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clearAllTasksStyles from "../../styles/Home.module.scss";

const YesClearAllTasks = withStyles(() => ({
  root: {
    color: "#FBFCFF",
    background: "#BF0000",
    transition: "background .35s ease-in-out",
    "&:hover": {
      background: "#C42847",
    },
  },
}))(Button);

const NoClearAllTasks = withStyles(() => ({
  root: {
    fontSize: "0.85rem",
    color: "#FBFCFF",
    background: "#785589",
    transition: "background .35s ease-in-out",
    "&:hover": {
      background: "#977390",
    },
  },
}))(Button);

function ClearAllTaskModal({
  task,
  clearAllTaskModal,
  clearAllTaskModalClose,
  clearAllTask,
  resetTaskCount,
  darkMode,
}) {
  return (
    <div>
      <Modal
        open={clearAllTaskModal}
        onClose={clearAllTaskModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={clearAllTasksStyles["clear-all-task-animation"]}>
          <div
            className={
              darkMode
                ? clearAllTasksStyles["clear-all-tasks-modal-content-dark"]
                : clearAllTasksStyles["clear-all-tasks-modal-content"]
            }
          >
            <div>
              <h1>Are you sure you want to clear all tasks?</h1>
            </div>
            <div>
              <YesClearAllTasks
                variant="contained"
                onClick={() => {
                  clearAllTask(task.id);
                  clearAllTaskModalClose();
                  resetTaskCount();
                }}
              >
                Yes
              </YesClearAllTasks>
              <NoClearAllTasks
                variant="contained"
                onClick={() => clearAllTaskModalClose()}
              >
                No
              </NoClearAllTasks>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ClearAllTaskModal;
